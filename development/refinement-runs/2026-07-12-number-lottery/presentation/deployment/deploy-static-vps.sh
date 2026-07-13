#!/usr/bin/env sh
set -eu

# Connection defaults are inherited from TROQAR's simple VPS deploy route.
SSH_CMD="${SSH_CMD:-ssh root@187.77.248.154}"
SCP_CMD="${SCP_CMD:-scp}"
REMOTE_DIR="${REMOTE_DIR:-/srv/cyberalchemize}"
REMOTE_COPY_TARGET="${REMOTE_COPY_TARGET:-root@187.77.248.154:$REMOTE_DIR}"

PUBLIC_HOST="${PUBLIC_HOST:-time-capsule.cyberalchemize.com}"
EDGE_NETWORK="${EDGE_NETWORK:-troqar_edge}"
TRAEFIK_ENTRYPOINT="${TRAEFIK_ENTRYPOINT:-websecure}"
TRAEFIK_CERT_RESOLVER="${TRAEFIK_CERT_RESOLVER:-letsencrypt}"
DRY_RUN="${DRY_RUN:-0}"

SCRIPT_DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
SITE_DIR="$(CDPATH= cd -- "$SCRIPT_DIR/../site" && pwd)"
COMPOSE_FILE="$SCRIPT_DIR/docker-compose.yml"
NGINX_FILE="$SCRIPT_DIR/nginx.conf"
TMP_DIR="$(mktemp -d)"

cleanup() {
  rm -rf "$TMP_DIR"
}
trap cleanup EXIT INT TERM

remote() {
  if [ "$DRY_RUN" = "1" ]; then
    printf '[dry-run ssh] %s %s\n' "$SSH_CMD" "$1"
    return 0
  fi

  $SSH_CMD "$1"
}

upload() {
  source_file="$1"
  remote_name="$2"

  if [ "$DRY_RUN" = "1" ]; then
    printf '[dry-run scp] %s %s %s/%s\n' "$SCP_CMD" "$source_file" "$REMOTE_COPY_TARGET" "$remote_name"
    return 0
  fi

  $SCP_CMD "$source_file" "$REMOTE_COPY_TARGET/$remote_name"
}

for required_path in \
  "$SITE_DIR/index.html" \
  "$SITE_DIR/idea/index.html" \
  "$SITE_DIR/assets/resonant-time-capsule-poster.png" \
  "$COMPOSE_FILE" \
  "$NGINX_FILE"
do
  if [ ! -f "$required_path" ]; then
    echo "missing required deploy input: $required_path" >&2
    exit 1
  fi
done

SITE_BUNDLE="$TMP_DIR/cyberalchemize-site.tar.gz"
ENV_FILE="$TMP_DIR/cyberalchemize.env"

tar -C "$SITE_DIR" -czf "$SITE_BUNDLE" .

cat > "$ENV_FILE" <<ENV_EOF
PUBLIC_HOST=$PUBLIC_HOST
EDGE_NETWORK=$EDGE_NETWORK
TRAEFIK_ENTRYPOINT=$TRAEFIK_ENTRYPOINT
TRAEFIK_CERT_RESOLVER=$TRAEFIK_CERT_RESOLVER
ENV_EOF

echo "creating isolated remote directory: $REMOTE_DIR"
remote "mkdir -p '$REMOTE_DIR'"

echo "uploading static site and public routing files"
upload "$SITE_BUNDLE" "site.tar.gz"
upload "$COMPOSE_FILE" "docker-compose.yml"
upload "$NGINX_FILE" "nginx.conf"
upload "$ENV_FILE" ".env.next"

echo "installing the new site release"
remote "cd '$REMOTE_DIR' && rm -rf site.next && mkdir site.next && tar -xzf site.tar.gz -C site.next && test -f site.next/index.html && test -f site.next/idea/index.html && test -f site.next/assets/resonant-time-capsule-poster.png && rm -rf site.previous && if [ -d site ]; then mv site site.previous; fi && mv site.next site && mv .env.next .env"

echo "starting the isolated static container"
remote "cd '$REMOTE_DIR' && docker compose --env-file .env -f docker-compose.yml up -d --pull always --force-recreate site"

echo "checking the container directly"
remote "cd '$REMOTE_DIR' && docker compose --env-file .env -f docker-compose.yml exec -T site wget -qO- http://127.0.0.1/healthz"

if [ "$DRY_RUN" = "1" ]; then
  echo "dry run complete"
  exit 0
fi

echo "checking public HTTPS routes"
attempt=1
while [ "$attempt" -le 18 ]; do
  if curl -fsS --max-time 15 "https://$PUBLIC_HOST/" | grep -q '<title>Resonant Time Capsule</title>' && \
     curl -fsS --max-time 15 "https://$PUBLIC_HOST/idea/" | grep -q '<title>The Full Idea — Resonant Time Capsule</title>'
  then
    echo "public HTTPS: pass"
    echo "deploy complete: https://$PUBLIC_HOST"
    exit 0
  fi

  echo "public HTTPS not ready ($attempt/18)"
  sleep 5
  attempt=$((attempt + 1))
done

echo "public HTTPS validation failed" >&2
exit 1

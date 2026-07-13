# Cyberalchemize Deployment Validation

Status: pass<br>
Deployed: 2026-07-12<br>
Public URL: `https://time-capsule.cyberalchemize.com/`<br>
Full idea: `https://time-capsule.cyberalchemize.com/idea/`

## Deployment Shape

- VPS: `187.77.248.154`
- Remote directory: `/srv/cyberalchemize`
- Container: `cyberalchemize-site`
- Static server: `nginx:1.27-alpine`
- Traefik router: `cyberalchemize`
- Edge network: `troqar_edge`
- TLS resolver: `letsencrypt`
- Host: `time-capsule.cyberalchemize.com`

The deployment reuses TROQAR's VPS connection and public Traefik conventions,
but it does not share TROQAR's application directory, container, router,
database, or environment file.

## Validation

- Subdomain homepage: HTTP 200.
- Full-idea page: HTTP 200.
- TLS verification: pass for `time-capsule.cyberalchemize.com`.
- Certificate issuer: Let's Encrypt.
- Previous apex route: detached; `cyberalchemize.com` returns HTTP 404 and no
  longer serves the capsule.
- Homepage explains the word-to-number path as word → locked capsule → later
  public number → founding supply, while keeping the unfinished-calculation
  boundary visible.
- Complete `How it works` context fits in a single 1180×798 section capture at
  the 1920px desktop validation width.
- Participation language invites a word or silence as equally welcome ways to
  remain in the circle; the previous penalty/influence warnings are absent.
- Participation invitation cards use a deeper amber-brown background, stronger
  warm border, and brighter cream text for clearer separation and readability.
- The burnished amber and higher-contrast cream/panel system is applied across
  the hero, controls, poster frame, declaration, ritual, number flow,
  participation choices, return timeline, closing, and footer.
- Homepage-to-full-idea browser navigation: pass.
- Desktop width: 1280px with no horizontal overflow.
- Mobile width: 390px with no horizontal overflow.
- Poster natural width: 1672px; loaded successfully.
- Full-idea section anchors: all present.
- Browser console errors: 0.
- Browser console warnings: 0.
- TROQAR `/api/status` after deployment: HTTP 200.
- TROQAR app container remained healthy and was not restarted.

## Redeploy

From the repository root, run:

```sh
development/refinement-runs/2026-07-12-number-lottery/presentation/deployment/deploy-static-vps.sh
```

Run `DRY_RUN=1` first when changing the deployment shape:

```sh
DRY_RUN=1 development/refinement-runs/2026-07-12-number-lottery/presentation/deployment/deploy-static-vps.sh
```

Each later deployment keeps the immediately previous static payload at
`/srv/cyberalchemize/site.previous` before recreating the container.

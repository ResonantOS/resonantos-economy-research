import { isBearerValue } from "./crypto.js";

export interface ConsumedInviteFragment {
  readonly inviteSecret: string | null;
  readonly sanitizedUrl: string;
}

export function consumeInviteFragment(rawUrl: string): ConsumedInviteFragment {
  const url = new URL(rawUrl);
  const fragment = new URLSearchParams(url.hash.startsWith("#") ? url.hash.slice(1) : url.hash);
  const candidate = fragment.get("invite");
  url.hash = "";

  return Object.freeze({
    inviteSecret: isBearerValue(candidate) ? candidate : null,
    sanitizedUrl: url.toString()
  });
}

export type { Teardown } from "./teardowns/types";

import { stripe } from "./teardowns/stripe";
import { wise } from "./teardowns/wise";
import { venmo } from "./teardowns/venmo";
import { klarna } from "./teardowns/klarna";
import { robinhood } from "./teardowns/robinhood";
import { amex } from "./teardowns/amex";
import type { Teardown } from "./teardowns/types";

export const teardowns: Teardown[] = [stripe, wise, venmo, klarna, robinhood, amex];

export const teardownsByDate: Teardown[] = [...teardowns].sort((a, b) =>
  (b.date ?? "").localeCompare(a.date ?? "")
);

export function getTeardownById(id: string): Teardown | undefined {
  return teardowns.find((t) => t.id === id);
}

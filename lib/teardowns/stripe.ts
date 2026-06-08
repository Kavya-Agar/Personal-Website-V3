import type { Teardown } from "./types";

export const stripe: Teardown = {
  id: "stripe",
  appName: "Stripe",
  thesis: "How Stripe Became the Operating System for Internet Payments",
  category: "Payment Infrastructure",
  description: "Stripe transformed payments from a fragmented, complex problem into a simple, developer-friendly API. Their insight: payments infrastructure is core to every digital business.",
  keyInsights: [
    "Developer experience as the primary moat",
    "Global expansion through local payment methods",
    "Vertical integration from payments to financial services",
  ],
  date: "2026-05-07",
  critique: "High fees and pricing opacity compared to some competitors; limited transparency on chargeback processes",
  content: `# Stripe: The Operating System for Internet Payments

## Executive Summary

Before Stripe, accepting payments online meant navigating a labyrinth of bank relationships, merchant accounts, PCI compliance, and fragile third-party integrations. Stripe collapsed all of that into seven lines of code and a weekend integration. What began as a developer tool in 2010 has compounded into a full financial stack powering millions of businesses — from solo founders to Fortune 500 companies — processing hundreds of billions in volume annually. The thesis is simple but powerful: every company on the internet needs payments infrastructure, and Stripe owns that layer.

## The Problem They Solved

In the late 2000s, integrating payments was genuinely painful. PayPal existed but was consumer-first and hostile to developers. Authorize.net and traditional payment gateways required working through banks, signing contracts, waiting weeks for approval, and writing brittle XML integrations. For a startup moving fast, this was a death sentence.

The underlying problem wasn't just technical — it was structural. Payments sat at the intersection of banking regulation, card network rules, fraud risk, and international complexity. No single company had packaged that complexity into an abstraction developers could trust. Stripe's founders Patrick and John Collison saw that the internet economy was still in early innings, and whoever built the best payments infrastructure would sit underneath every transaction.

## Core Value Proposition

Stripe's core insight was that developer experience is a distribution channel. By making the API elegant — real JSON, clear documentation, instant test mode, no sales call required — they created something developers genuinely wanted to use and actively advocated for internally. The CTO would bring Stripe into a company, not the CFO.

This created a powerful bottom-up sales motion. Developers made the integration choice; the business felt the result. Over time Stripe layered on everything a business needs around payments: subscription billing, fraud detection, multi-party payouts, tax automation, revenue recognition, and banking-as-a-service. The result is that switching costs compound — every new Stripe product a business adopts makes leaving more painful.

## Business Model

Stripe's primary revenue driver is a simple per-transaction fee: 2.9% + $0.30 on card transactions in the US, with pricing adjusted by country, card type, and volume. This sounds thin, but at scale the math is extraordinary — Stripe reportedly processes over $1 trillion in annual volume, generating tens of billions in revenue.

Beyond the core take rate, Stripe has built a growing suite of paid add-ons: Radar (ML fraud detection), Billing (subscription management), Tax (automated sales tax calculation), Issuing (card issuance), Treasury (banking APIs), and Connect (marketplace payouts). Each product captures incremental margin from customers already on the platform, raising ARPU without new acquisition cost.

The enterprise segment (Stripe's direct sales motion) unlocks custom pricing and seven-figure contracts with large platforms, rideshares, and marketplaces — where even a few basis points of savings justifies a lengthy sales process.

## Product Evolution

Stripe has expanded in deliberate layers, moving up the stack from infrastructure toward full financial services:

**Payments API (2010)** — The founding product. Card acceptance, webhooks, test mode. Targeted developers entirely.

**Stripe.js + Checkout (2012–2014)** — Prebuilt UI components for card collection that handle PCI compliance automatically. Lowered the bar further and removed a common failure mode.

**Connect (2015)** — Multi-party payment flows for marketplaces and platforms. Uber, Lyft, and DoorDash built their payout infrastructure here. This was the first product that couldn't be replicated by a developer writing their own Stripe clone.

**Billing & Subscriptions (2016)** — SaaS-native subscription management with trials, proration, metered billing, and dunning. Competed directly with Zuora and Recurly.

**Radar (2016)** — Machine learning fraud detection trained on Stripe's network-wide transaction data. This is a genuine network effect: more transaction volume means better fraud models for everyone.

**Issuing & Treasury (2018–2020)** — Card issuance and banking APIs. Enabled fintechs like Brex and Mercury to build on top of Stripe's banking relationships. Stripe is now infrastructure for infrastructure companies.

**Revenue Recognition & Tax (2020–2022)** — Moved Stripe from the engineering stack into the finance and accounting stack, deepening enterprise relationships.

## Competitive Advantages

**Network data moat:** Stripe sees billions of transactions across millions of merchants globally. This data trains fraud models, informs risk decisions, and creates a feedback loop that's impossible to replicate from zero.

**Developer loyalty:** A generation of engineers grew up building with Stripe. They carry institutional preference across jobs and companies. This is a cultural moat that pure pricing competition can't easily erode.

**Platform breadth:** No single competitor matches Stripe's product surface area. PayPal/Braintree lacks the developer culture. Adyen is enterprise-focused with limited self-serve. Square is SMB-focused and hardware-dependent. Checkout.com and Worldpay compete on specific verticals. Stripe is the only company spanning indie developer to global enterprise with a coherent product suite.

**Distribution through Connect:** Thousands of platforms built on Stripe Connect become distribution for Stripe. Every time a marketplace uses Connect, Stripe touches every seller on that marketplace.

## Market Position

The global payments processing market is enormous — over $2 trillion in annual revenue by some estimates, given total card volume in the tens of trillions. Stripe occupies a premium segment: internet-native businesses, SaaS companies, and technology-forward enterprises.

Stripe's last private valuation was $50B (down from a peak of $95B during the 2021 bull market), with revenues estimated at $15–20B. An IPO has been anticipated for years; the company has stayed private partly because its founders have no immediate need for liquidity and partly because they can use equity more flexibly as a private company.

The competitive threat to watch is not any single processor — it's the card networks (Visa, Mastercard) and large banks developing their own developer-friendly products. If the networks internalize more of the stack, the take rate that flows to processors like Stripe compresses.

## Challenges & Criticisms

**Pricing transparency:** Stripe's fees compound quickly when you add Radar, Billing, and international fees. Mid-market companies often discover their effective rate is significantly higher than the headline 2.9% + $0.30, leading to painful renegotiations or processor switches.

**Chargeback handling:** Merchants frequently cite frustration with Stripe's chargeback dispute process — insufficient communication, slow resolution, and funds holds that can threaten cash flow for smaller businesses. This is partly structural (card network rules limit what any processor can do) but Stripe's tooling here lags its payments UX quality.

**Enterprise sales velocity:** Stripe's self-serve heritage creates friction at the enterprise level, where procurement cycles, custom SLAs, and compliance reviews require a sales motion Stripe has been slower to build than its developer-first origins would suggest.

**Dependency on Visa/Mastercard:** For all its sophistication, Stripe sits on top of the card networks and is subject to their rule changes, interchange adjustments, and scheme fees. Any compression at the network level flows directly through Stripe's margins.

## Future Outlook

Stripe's long-term bet is that it becomes the financial operating system for the internet — not just processing transactions but issuing cards, holding balances, automating tax and accounting, and powering embedded finance for platforms. The Treasury and Issuing products point toward a world where companies never need a traditional bank relationship; Stripe provides the full stack.

The IPO timeline remains a moving target, but a public listing would unlock equity as a retention and acquisition tool and provide a market-based benchmark for the company's progress. At current scale, Stripe is already one of the most consequential private companies in technology.

The real question is whether Stripe can maintain its premium positioning as payments becomes more commoditized at the infrastructure layer. Their answer — compound new products on top of existing relationships — is the right one. Execution is everything.

## Key Metrics

- **Payment volume:** ~$1 trillion processed annually (estimated)
- **Revenue:** ~$15–20B annually (estimated, private company)
- **Valuation:** $50B (2023 secondary round, down from $95B peak)
- **Merchants:** Millions of businesses across 140+ countries
- **Products:** 15+ distinct products beyond core payments
- **Employees:** ~8,000 (as of 2024)`,
};

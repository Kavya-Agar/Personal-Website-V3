import type { Teardown } from "./types";

export const wise: Teardown = {
  id: "wise",
  appName: "Wise",
  thesis: "How Wise Simplified International Money Transfer",
  category: "Cross-Border Payments",
  description: "Wise transformed a historically opaque and costly problem into a transparent, fair-price experience. Their core insight: show the real exchange rate upfront.",
  keyInsights: [
    "Mid-market rate transparency as a trust mechanism",
    "Progress indicators for multi-step transfers",
    "Flat fee model vs. percentage (better for large transfers)",
  ],
  date: "2026-04-15",
  critique: "Could simplify recipient bank details collection for first-time users",
  content: `# Wise: Making International Money Transfer Simple and Fair

## Overview

In 2011, Taavet Hinrikus and Kristo Käärmann discovered they were each paying thousands of pounds a year in hidden bank fees on international transfers. Their solution — matching each other's currency needs directly, bypassing banks entirely — became the founding insight of Wise (originally TransferWise). Today Wise processes over £100 billion in cross-border transfers annually, serves 16 million customers, and is publicly traded on the London Stock Exchange. Their product thesis is deceptively simple: show people what they're actually paying.

## The Problem

International money transfers were (and to some degree remain) one of the most opaque consumer financial products in existence. Traditional banks quote an exchange rate, but that rate typically includes a hidden margin of 2–5% on top of the real mid-market rate. A $10,000 transfer could silently cost $200–500 more than it should.

The complexity is real — banks manage currency risk, regulatory compliance across jurisdictions, correspondent banking relationships, and liquidity management. But customers weren't paying for complexity, they were paying because they had no alternative and no visibility. The status quo persisted because the hidden fee was invisible by design.

## Solution & Strategy

Wise's core product decision was radical honesty: always show the mid-market rate (the real exchange rate you'd find on Google), quote the fee explicitly and upfront, and display exactly how much the recipient will receive before you confirm the transfer.

This transparency wasn't just ethical — it was a marketing strategy. Customers who discovered their bank had been charging them 4% implicitly for years became evangelists. Word-of-mouth and comparison-site traffic drove acquisition more efficiently than paid advertising.

The early technology was clever: Wise netted opposite currency flows, so a GBP→EUR transfer from a UK user would be matched against a EUR→GBP transfer from a European user. Money didn't cross borders — only accounting did. As volume grew, Wise built direct bank integrations, local payment networks, and its own treasury operations to manage flows at scale.

## Key Features

**Transfers:** Send money to 160+ countries in 40+ currencies with transparent fees and the mid-market rate. The fee is a small fixed amount plus a percentage (typically 0.3–1.5% depending on currency corridor), always shown before confirmation.

**Wise Account (formerly Borderless):** A multi-currency account with local bank details in 10+ currencies (USD, EUR, GBP, AUD, etc.). Freelancers and remote workers use this to receive payments locally abroad without a local bank account.

**Wise Business:** Multi-user accounts, batch payments, accounting integrations (Xero, QuickBooks), and API access for companies managing international payroll or supplier payments.

**Wise Platform:** White-label infrastructure enabling banks and fintechs (including Monzo, N26, and others) to offer Wise-powered international transfers within their own products.

**Debit Card:** A card tied to the Wise Account that converts at the mid-market rate with no foreign transaction fee — a genuine alternative to travel cards and currency exchange booths.

## Business Model

Wise's revenue model is straightforward and directly tied to customer value: take a small percentage of transfer volume. Their average take rate is roughly 0.6% across all currency corridors, compared to banks charging 2–5% implicitly. Wise is cheaper because they've built more efficient infrastructure, not because they're subsidizing losses.

Revenue breakdown (FY2024):
- **Transfers:** ~70% of revenue — per-transaction fees on cross-border sends
- **Interest income:** ~20% — earned on customer balances in Wise accounts
- **Other:** ~10% — card fees, API/platform licensing, business account fees

This is an unusually clean model: Wise makes money when customers make transfers, aligned with customer success. As interest rates rose post-2022, the balance income component grew substantially, improving margins. Wise turned profitable in 2021 and has maintained profitability since — rare for a fintech of its growth stage.

## Competitive Positioning

**vs. Traditional banks:** Banks still hold most international transfer volume by sheer inertia and trust. Wise consistently beats them on price by 3–8x and speed by 1–3 days. The opportunity remains massive — bank customers who haven't switched are still the primary growth pool.

**vs. PayPal/Venmo:** PayPal's international transfers are expensive and opaque, and Venmo is US-only. Wise targets this directly, particularly for freelancers and small businesses who transact internationally.

**vs. Remitance players (Western Union, MoneyGram):** These dominate cash-to-cash corridors (sending cash to be collected at an agent location), which Wise doesn't serve. The overlap is in bank-to-bank digital transfers, where Wise has a clear price and UX advantage.

**vs. Revolut/N26:** Digital banks with competitive FX rates, but typically markup the rate on weekends, cap fee-free transfer amounts, or bundle FX in a subscription. Wise's rate is consistent and unconditional.

**vs. Airwallex/Payoneer (B2B):** The business corridor is more competitive, with Airwallex particularly strong in APAC. Wise Business competes on simplicity and brand trust rather than exotic features.

## UX Innovations

**The price calculator on the homepage:** Before creating an account, you can see exactly what a transfer will cost. This single UX decision built enormous trust and made Wise the reference point for fair pricing. Comparison sites link to it constantly.

**Transfer progress tracking:** Wise decomposed transfers into visible steps — "received your GBP," "converted to EUR at X rate," "sent to recipient bank" — with timestamps. In an industry where "3–5 business days" was the norm, this transparency was radical.

**Recipient detail validation:** Wise validates IBAN and account numbers in real-time and warns you before sending if details look wrong. Reducing recipient errors directly reduces support costs and customer frustration.

**Onboarding that front-loads value:** The first transfer flow is designed to get money moving before asking you to fully set up an account — you see the real cost before committing, which dramatically improves conversion.

## Challenges

**Recipient bank detail complexity:** Despite improvements, collecting local bank details for some corridors (especially in Asia and Africa) remains confusing. IBAN vs. sort code vs. routing number vs. SWIFT creates real friction for first-time international senders.

**Customer support at scale:** As a 16 million customer company, Wise's support responsiveness has declined. Compliance holds — where transfers are frozen for verification — are a common complaint, and the resolution process lacks urgency.

**Regulatory complexity:** Operating in 160+ countries means navigating licenses, capital requirements, and compliance rules in dozens of jurisdictions simultaneously. Regulatory changes (particularly around AML/KYC) can slow feature rollout or increase operational cost.

**FX margins on exotic corridors:** While Wise is transparent about its fees, the all-in cost on less-liquid currency corridors can approach bank-level pricing. The headline rate advantage is strongest on major corridors (GBP/EUR/USD).

## Future Vision

Wise's stated mission is to "move money without borders: instant, convenient, transparent, and eventually free." The "eventually free" framing is interesting — it implies a long-term model where interest income, card interchange, and platform licensing cross-subsidize transfer fees into irrelevance.

Wise Platform is the highest-optionality bet: if banks and fintechs white-label Wise infrastructure, Wise collects fees without acquiring customers directly. This B2B2C model could dwarf the consumer business at scale.

Expansion into SMB financial services — expense management, corporate cards, accounts payable — moves Wise up the value chain from a transfer tool into a full treasury product for small businesses operating internationally.

## Key Metrics

- **Annual transfer volume:** ~£118B (FY2024)
- **Customers:** 16M+
- **Revenue:** ~£1.1B (FY2024)
- **Profit:** Consistently profitable since 2021
- **Average cost to customer:** ~0.61% of transfer amount
- **Countries:** 160+ send, 80+ receive
- **Market cap:** ~£8B (London Stock Exchange, listed 2021)`,
};

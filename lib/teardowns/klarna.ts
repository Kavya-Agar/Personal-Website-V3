import type { Teardown } from "./types";

export const klarna: Teardown = {
  id: "klarna",
  appName: "Klarna",
  thesis: "How Klarna Democratized Buy-Now-Pay-Later",
  category: "Fintech",
  description: "Klarna transformed point-of-sale financing from hidden credit lines into transparent, interest-free installments. Their insight: make consumer credit frictionless at checkout.",
  keyInsights: [
    "Merchant integration at checkout as the distribution channel",
    "Risk modeling through underwriting at scale",
    "Transparent fixed payments to build consumer trust",
  ],
  date: "2026-03-20",
  critique: "Dependency on merchant fees for profitability; consumer debt patterns and default risk in downturns",
  content: `# Klarna: Buy Now, Pay Later Simplified

## The Problem

Consumer credit has always existed — credit cards, store cards, layaway, installment loans. But the traditional model was opaque by design: revolving credit with variable interest rates, minimum payments that extended debt indefinitely, and fees that punished late payment. For merchants, getting customers over the purchase threshold was the core conversion problem. For consumers, big-ticket items were gated by credit limits and interest rate anxiety.

Klarna's founding insight (Stockholm, 2005) was that credit doesn't have to be opaque or permanent. A simple four-installment plan — pay 25% now, 25% in two weeks, 25% in four weeks, 25% in six weeks, zero interest, fixed amounts — is fundamentally different psychologically from "charge it to the card." It's a commitment with an end date, not a floating liability.

## Core Innovation

Klarna's product innovation is less about technology and more about reframing. "Buy now, pay later" existed before Klarna, but it was anchored to high-interest store financing. Klarna stripped the interest, made the schedule transparent, and integrated directly at checkout — removing every moment of friction between desire and purchase.

The underwriting model is what makes this work at scale. Klarna runs a soft credit check in milliseconds at checkout, using a combination of traditional credit bureau data and behavioral signals (device, purchase history, merchant context) to approve or decline a purchase. The average decision takes under a second. Approval rates are high — 90%+ for returning customers — because Klarna has progressively more data on each user.

The merchant value proposition is equally important: Klarna guarantees payment to the merchant at the time of purchase, absorbing all default risk. Merchants pay a per-transaction fee (typically 3–6% of transaction value, higher than a credit card interchange rate) in exchange for: higher conversion rates, higher average order values, and zero default risk. For fashion, electronics, and home goods retailers, the conversion lift frequently justifies the fee premium.

## Product Strategy

Klarna's product has evolved from a single checkout option into a shopping platform:

**Pay in 4 (US) / Pay in 3 (UK):** The core BNPL product. Split a purchase into equal installments over 6 weeks, zero interest if paid on time. This is the product that drove Klarna's consumer growth.

**Pay in 30 (Pay Later):** Buy now, pay the full amount in 30 days. Designed for purchase-to-delivery timing — you don't pay until you've received and decided to keep the item. Extremely useful for apparel where return rates are high.

**Financing (6–36 months):** Traditional installment loans for larger purchases, carrying interest. This product makes the economics work for big-ticket items where the interest-free model doesn't cover Klarna's cost of capital.

**Klarna App (Shopping Experience):** Klarna rebranded its consumer interface as a shopping destination — price comparison, wish lists, store browsing, cashback offers. The ambition: become the starting point for intent-to-purchase, capturing affiliate and advertising revenue before checkout.

**Klarna Card:** A Visa card that wraps Klarna's Pay in 4 around any purchase, not just Klarna-integrated merchants. This extends the BNPL model to the entire card-accepting world.

**Klarna for Business:** Merchant tools including analytics, marketing, and targeted promotions to Klarna's user base. Turns the consumer platform into an advertising channel.

## Business Model

Klarna's revenue comes from two primary sources, with the balance shifting as the company matures:

**Merchant fees (~60–70% of revenue):** Every time a consumer uses Klarna at checkout, the merchant pays a fee. This is the core revenue engine — Klarna is paid by merchants to increase their conversion and average order value. The fee varies by product (Pay in 4 vs. financing) and merchant (volume discounts for large partners).

**Consumer fees and interest (~20–30% of revenue):** Late fees on Pay in 4 (charged when a consumer misses an installment) and interest on financing products. Klarna has historically downplayed this — and regulatory pressure has pushed them to further minimize it — but it's meaningful at scale.

**Advertising and affiliate (~10%):** Klarna's app has 85M+ users browsing for products. Merchants pay for placement, promotions, and targeted campaigns. This is the highest-margin business, and Klarna has been investing in it aggressively as it grows.

The economics are tightly coupled to credit losses (defaults) and cost of capital (Klarna funds the gap between merchant payment and consumer collection). In bull markets, credit losses are low and capital is cheap; in downturns, both deteriorate simultaneously. Klarna's 2022 losses — and a valuation cut from $46B to $6.7B — were driven precisely by this: rising defaults, rising funding costs, and a growth slowdown.

## Market Position

Klarna was the dominant BNPL provider globally through 2021, before the category attracted enormous competition. Today:

**US:** Affirm is the strongest competitor, particularly in higher-ticket items (Peloton, Walmart). Afterpay (acquired by Square/Block) has meaningful fashion retailer penetration. Apple Pay Later (now discontinued) attempted to leverage existing iOS distribution.

**Australia/UK:** Afterpay dominated Australia before its Block acquisition. Klarna and Laybuy compete in the UK.

**Europe:** Klarna remains the strongest player in its home markets (Nordics, Germany, Netherlands), where it has been operating for nearly two decades and has deep merchant relationships.

**Global:** PayPal Pay Later and credit card issuers (Citi Flex, Chase My Chase Plan) have activated BNPL features for their massive existing user bases, competing without needing to acquire a new customer or build a new merchant network.

Klarna IPO'd on the New York Stock Exchange in July 2024, raising ~$1.2B at a valuation of approximately $15B — a significant recovery from the 2022 trough but still well below the $46B peak.

## Regulatory Landscape

BNPL arrived in a regulatory gap — because it wasn't technically credit (no interest on the core product), it escaped the consumer protection rules that govern credit cards and loans in most jurisdictions. That gap is closing:

**UK:** The Financial Conduct Authority is requiring BNPL lenders to conduct affordability checks and register as consumer credit firms. This adds compliance cost and may suppress approval rates.

**EU:** The revised Consumer Credit Directive explicitly includes BNPL in consumer credit regulation, requiring clear disclosure of loan terms, right of withdrawal, and creditworthiness assessments.

**US:** The CFPB issued guidance treating BNPL providers as credit card companies for certain regulatory purposes, requiring dispute resolution processes and periodic billing statements.

For Klarna, regulation is a double-edged sword. More compliance cost and lower approval rates hurt the consumer business. But tighter regulation raises barriers to entry and may squeeze out smaller, less sophisticated BNPL players — benefiting Klarna's scale advantage.

## Consumer Impact

BNPL has genuinely expanded access to consumer credit for people who couldn't qualify for credit cards or who prefer predictability over revolving debt. For a 22-year-old without a credit history buying a $400 winter coat, Pay in 4 is a better product than a store card with 29% APR.

The concern — and it's legitimate — is that the frictionless experience overcorrects. When buying something feels like splitting a bill rather than taking out a loan, consumers may systematically underestimate total obligations. Research consistently shows BNPL users carry multiple simultaneous installment plans and occasionally lose track. The design that reduces friction at purchase also reduces the salience of debt.

Klarna's response has been to build debt visibility into the app — showing outstanding balances clearly, sending payment reminders — while pushing back against regulatory requirements they argue are overly burdensome for a product with lower consumer harm than credit cards.

## Unit Economics

The core BNPL unit economics are challenging at scale:

- **Revenue per transaction:** ~4% of GMV on average (merchant fee) minus ~1–2% in credit losses minus ~1% in funding costs minus marketing and ops. Net margin per transaction is thin.
- **LTV unlock:** The economics improve dramatically with repeat purchase behavior. A customer who uses Klarna once is near-breakeven; a customer who uses it monthly for 3+ years is highly profitable.
- **Customer acquisition:** Marketing spend and merchant integration costs are high. Klarna spent billions building the merchant network and consumer brand.

Klarna's path to sustained profitability runs through repeat usage (driving LTV), advertising revenue (high margin from an existing audience), and reducing credit losses as the underwriting model matures with more data.

## Challenges & Criticisms

**Credit loss volatility:** Klarna's underwriting is good in normal conditions and deteriorates in downturns. The 2022 writedowns demonstrated real exposure to macroeconomic cycles — a structural risk that doesn't affect merchant fee revenue but hits profitability significantly.

**Merchant fee compression:** As BNPL has become table stakes for online retailers, merchants have more leverage. Klarna competes against Affirm, Afterpay, and PayPal for the same merchant integrations, pushing fees down.

**Consumer trust and regulation:** The "spend now, worry later" user experience design has attracted regulatory and media scrutiny. Managing this reputational risk while maintaining the product's core appeal is an ongoing tension.

**Profitability timeline:** Despite being 19 years old, Klarna has only recently approached sustained profitability. The IPO puts pressure on demonstrating durable earnings, not just revenue growth.

## Future Outlook

Klarna's highest-conviction bet is the shopping app: owning consumer intent before checkout, not just financing at checkout. If Klarna becomes where people go to discover and compare products — the way Pinterest or Google Shopping functions but with integrated payment — the advertising and affiliate revenue model could substantially reduce dependence on volatile credit economics.

The Klarna Card extends the BNPL model to the offline and non-integrated world, making BNPL a general-purpose payment method rather than a checkout add-on. This is the right long-term move if consumers genuinely prefer installment thinking to revolving credit.

Post-IPO, Klarna faces the same challenge as every maturing fintech: proving that the business model works without the tailwind of zero interest rates and unlimited growth capital. The product is genuinely good and the brand is strong. The question is whether the unit economics support the ambition.

## Key Metrics

- **GMV:** ~$100B annually
- **Merchants:** 500,000+ globally
- **Consumers:** 85M+ active users
- **Revenue:** ~$2.8B (FY2023)
- **Markets:** 45 countries
- **IPO:** NYSE, July 2024, ~$15B valuation
- **Employees:** ~5,000 (post-restructuring from ~7,000 in 2022)`,
};

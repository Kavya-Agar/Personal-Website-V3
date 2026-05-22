export interface Teardown {
  id: string;
  appName: string;
  thesis: string;
  category: string;
  description: string;
  keyInsights: string[];
  critique: string;
  content: string; // Full detailed content (markdown)
}

export const teardowns: Teardown[] = [
  {
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
    critique: "High fees and pricing opacity compared to some competitors; limited transparency on chargeback processes",
    content: `# Stripe: The Operating System for Internet Payments

## Executive Summary
[Add executive summary here]

## The Problem They Solved
[Describe the problem Stripe addressed in the payment ecosystem]

## Core Value Proposition
[What makes Stripe different from competitors]

## Business Model
[Revenue streams, pricing structure, unit economics]

## Product Evolution
- Payments API
- Connect (marketplace payments)
- Billing
- Financial services expansion

## Competitive Advantages
[Technical, network, and strategic moats]

## Market Position
[Market size, share, competitive landscape]

## Challenges & Criticisms
[Areas for improvement, regulatory concerns]

## Future Outlook
[Your perspective on Stripe's future]

## Key Metrics
[Important numbers that define their success]
    `.trim(),
  },
  {
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
    critique: "Could simplify recipient bank details collection for first-time users",
    content: `# Wise: Making International Money Transfer Simple and Fair

## Overview
[Add your detailed analysis here]

## The Problem
[What problem does Wise solve]

## Solution & Strategy
[How Wise approaches the problem differently]

## Key Features
[Main products and services]

## Business Model
[Revenue and unit economics]

## Competitive Positioning
[vs. Traditional banks, PayPal, other fintech]

## UX Innovations
[Design and experience wins]

## Challenges
[Areas to improve]

## Future Vision
[Where Wise is headed]
    `.trim(),
  },
  {
    id: "venmo",
    appName: "Venmo",
    thesis: "How Venmo Made P2P Payments Social",
    category: "Social Payments",
    description: "Venmo's genius wasn't the payments—it was treating transfers like posts. A public ledger with emojis and comments turned a utility into a social network.",
    keyInsights: [
      "Social graph as the primary discovery mechanism",
      "Emoji-first memo system for quick context",
      "Public/private toggle for compliance + network effects",
    ],
    critique: "Security model conflates social sharing with payment visibility risks",
    content: `# Venmo: Payments as a Social Experience

## The Insight
[How Venmo reimagined payments]

## Product Strategy
[Why treating payments like social posts was genius]

## Network Effects
[How the social graph created a moat]

## Monetization
[Business model and revenue drivers]

## Challenges
[Regulatory, security, and operational challenges]

## Competition
[Where Venmo stands among competitors]

## Design Decisions
[Key UX/UI choices that made it work]

## Future Trajectory
[Vision and strategic direction]
    `.trim(),
  },
  {
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
    critique: "Dependency on merchant fees for profitability; consumer debt patterns and default risk in downturns",
    content: `# Klarna: Buy Now, Pay Later Simplified

## The Problem
[What financing problem Klarna solved]

## Core Innovation
[How Klarna changed consumer lending]

## Product Strategy
[Checkout integration and payment plans]

## Business Model
[Revenue from merchants, risk management]

## Market Position
[Growth, competitors, market share]

## Regulatory Landscape
[BNPL regulatory scrutiny and compliance]

## Consumer Impact
[How Klarna changed shopping behavior]

## Unit Economics
[Profitability and path to sustainability]

## Challenges & Criticisms
[Debt concerns, market saturation, profitability]

## Future Outlook
[Strategic direction and market expansion]
    `.trim(),
  },
];

export function getTeardownById(id: string): Teardown | undefined {
  return teardowns.find((t) => t.id === id);
}

// Template for adding new teardowns:
/*
  {
    id: "your-slug",
    appName: "Company/App Name",
    thesis: "How [Company] Did X",
    category: "Category Name",
    description: "2-3 sentence summary for the list view",
    keyInsights: [
      "Key insight 1",
      "Key insight 2",
      "Key insight 3",
    ],
    critique: "One balanced critique or limitation",
    content: `# Company Name: Full Title

## Section 1
[Your detailed analysis]

## Section 2
[Continue writing sections]
    `.trim(),
  },
*/

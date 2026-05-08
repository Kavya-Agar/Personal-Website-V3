export interface CaseStudy {
  id: string;
  appName: string;
  thesis: string;
  category: string;
  description: string;
  keyInsights: string[];
  critique: string;
}

export const caseStudies: CaseStudy[] = [
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
  },
];

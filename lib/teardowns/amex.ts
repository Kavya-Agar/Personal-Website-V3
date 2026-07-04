import type { Teardown } from "./types";

export const amex: Teardown = {
  id: "amex",
  appName: "American Express",
  thesis: "How American Express Turned Metal Into a Status Symbol",
  category: "Credit & Rewards",
  description: "A teardown of how Amex engineered card weight, invitation-only opacity, and a closed-loop points currency into an entire status economy, and why that economy runs with a fraction of the consumer protection the EU now requires.",
  keyInsights: [
    "Card weight is an engineered signal, not a manufacturing byproduct",
    "Membership Rewards devalues on Amex's schedule, months after you've already earned the points, not yours",
    "Centurion's opacity is the exclusivity: no published criteria means status can never be verified, only implied",
  ],
  date: "2026-07-04",
  critique: "Prestige and predation share the same toolkit, opacity, sunk cost, and fees justified after the fact. The difference is only which side of that line a regulator is still willing to enforce.",
  content: `# How American Express Turned Metal Into a Status Symbol

I got a Chase Sapphire Preferred a few weeks ago. It's my first metal card. I didn't apply for it because of the metal, I applied for the points on travel and dining, but the first time I set it down on a bar to pay a tab, it made a sound the plastic card next to it didn't make. Heavier. A small thud instead of a click. I noticed it. I wasn't supposed to not notice it.

That reaction wasn't designed by Chase. It was designed by American Express, in 1999, and every issuer that has put out a metal card since has been renting the same trick.


## The Card That Started It

In 1999, Amex launched the Centurion Card, invitation only, no published application, machined out of anodized titanium. Nobody could apply for it. Nobody could even confirm what it cost unless they already had one. The mythology built itself: rumors of unlimited credit lines, personal shoppers, private jets on request. Most of that was never officially confirmed and much of it wasn't true, but Amex never bothered to correct the record, because the ambiguity was doing the marketing for free.

By the mid-2000s, the Centurion had kicked off an entire category. Financial writers now call the sensory reaction to a metal card the "plunk factor," the audible, physical cue that a piece of plastic in your wallet costs more than the ones around it. Amex didn't invent weight as a marketing tool. But it was the first company to realize that a credit card, an object whose only real job is to authenticate a payment, could be redesigned as a status object first and a payment instrument second.

Every metal card that followed, Chase Sapphire Reserve, Chase Sapphire Preferred, Capital One Venture X, is downstream of that decision.


## The Platinum Card: Metal for the Mass Affluent

The Centurion card was never meant to scale. The Platinum Card, launched in 1984 and rebuilt in stainless steel in the 2010s, is Amex's answer to the obvious follow-up question: what if regular affluent people, not just billionaires, could buy a small piece of that feeling?

The annual fee tells the story of how aggressively Amex has leaned into that bet. It went from $695 to $895 in 2025, a 29 percent increase, effective immediately for new applicants as of September 18, 2025, and rolling out to existing cardholders at their next renewal on or after January 2, 2026. Amex frames the increase around new benefits, not a price hike, and on paper the math is generous: over $3,500 in combined credits and benefits, including up to $600 in semi-annual hotel credit through Fine Hotels + Resorts, a $400 Resy dining credit, up to $200 in Uber Cash plus $120 toward Uber One, $25 a month in digital entertainment credit across services like Disney+ and the New York Times, and access to more than 1,550 airport lounges worldwide including unlimited Centurion Lounge visits.

That's the pitch. The catch is structural, not hidden: the credits are not cash back. Each one only counts if you spend at a specific merchant, in a specific category, inside a specific window, and re-enroll where required. A cardholder who doesn't already use Uber, doesn't already book through Amex Travel, and doesn't already have a Resy habit is paying $895 for lounge access and not much else. The "over $3,500 in value" framing describes maximum theoretical value if every credit is used exactly as designed. It is not a description of what the average cardholder actually redeems. That gap, between advertised value and realized value, is the same gap every rewards card has always had. Amex just has more line items to obscure it with now.


## Centurion: The Card You Can't Apply For

If Platinum is metal for the mass affluent, Centurion is metal for people who no longer have to prove anything. You cannot apply for it. Amex reviews existing cardholders internally and extends an invitation, and the criteria for that invitation have never been officially published. Reported thresholds vary wildly depending on who you ask, anywhere from $250,000 to $500,000 in annual Amex spend by some accounts, $1 million or more by others, plus a minimum of a year of clean history on an existing Amex card.

The fee, when you're invited, is public: a one-time $10,000 initiation charge and $5,000 a year after that.

The interesting design decision isn't the price. It's the refusal to publish the qualification bar. Every other financial product in existence, mortgages, auto loans, even the Platinum Card itself, tells you exactly what you need to qualify. Centurion doesn't, and that omission is the product. A defined bar is something you can fail to clear. An undefined one is something you can only be told you haven't reached yet, which keeps the aspiration alive indefinitely. Scarcity through disclosed rules creates a queue. Scarcity through undisclosed rules creates a myth, and myths don't have waiting lists.


## Membership Rewards: A Currency Amex Controls Both Ends Of

Every Amex product eventually funnels into Membership Rewards, the points currency that makes direct comparison shopping almost impossible by design. A point isn't a dollar. Its value depends on which airline or hotel program you transfer it to, at what ratio, on what day, because Amex can and does change those ratios without much warning.

That is not a hypothetical risk. It is happening in real time. Amex cut the US transfer ratio to Emirates Skywards from 1:1 to 5:4, a 20 percent devaluation, effective September 2025. UK cardholders got hit harder: Emirates dropped from 4:3 to 2:1, a 33 percent cut, effective February 2026. Australian cardholders saw most airline ratios move from 2:1 to 3:1 in December 2025. And in March 2026, Amex is cutting the US transfer ratio to Cathay Pacific from 1:1 to 5:4, another 20 percent reduction.

Here's the part that matters: these devaluations don't just lower future earn rates. They cut the value of points you already earned and haven't transferred out yet, on spend you already made, under a rewards rate you were quoted at the time. The CFPB has specifically flagged this pattern in a circular on credit card rewards programs, warning that devaluing earned rewards after a consumer has already made a decision based on the original terms can amount to an unfair or deceptive bait-and-switch practice. Amex hasn't been formally charged over the recent cuts. But the mechanism the regulator described and the mechanism playing out across three continents in the last six months are the same mechanism.


## The Regulatory Gap: Two Systems, One Product

This is where the US and EU diverge sharply, and it's worth being specific about both records instead of gesturing at "regulation" in the abstract.

**In the US**, Amex has a real enforcement history. In October 2012, the CFPB and other federal regulators ordered three Amex subsidiaries to refund an estimated $85 million to roughly 250,000 customers, on top of $27.5 million in combined penalties. The findings: Amex deceived customers into believing that paying off old debt through a settlement program would be reported to credit bureaus and improve their credit scores, when it wouldn't. Its "Blue Sky" card promised a $300 bonus to customers who met stated qualifications and then didn't pay many of them. And American Express Centurion Bank ran a credit scoring system that treated applicants differently by age for eight months, effectively discriminating against applicants over 35. In January 2025, the Department of Justice reached a separate $109 million settlement with Amex over deceptive marketing of small business cards between 2014 and 2017, including misrepresenting rewards and fees and not disclosing that credit checks would run without consent.

Both of those were after-the-fact enforcement, years after the conduct occurred, following a formal investigation. Meanwhile, in the same period Amex was raising its most visible product's fee by $200, the CFPB's own proactive rule protecting cardholders from excessive fees was walked back voluntarily. The Bureau had finalized a rule in March 2024 capping credit card late fees at $8, down from a safe harbor of $30 to $41. In April 2025, the CFPB itself joined bank trade groups in a motion asking a federal judge to vacate that rule, conceding it had overstepped, and the court did. The agency built to prevent exactly this kind of fee structure agreed to undo its own protection when the industry pushed back.

**In the EU**, the posture is structurally different, not just in degree but in design. The Consumer Credit Directive II, formally Directive (EU) 2023/2225, explicitly expands its scope to cover credit cards, buy now pay later products, and authorized overdrafts, categories that used to sit outside consumer credit rules entirely. It removes the previous 200 euro floor that let small credit products dodge oversight, raises the upper threshold to 100,000 euros, and mandates standardized creditworthiness assessments and disclosure requirements before a credit product can be sold to a consumer at all. Member states are required to transpose it into national law by November 20, 2026, meaning the rulebook exists before most of the products it governs even launch, not after enough consumers file complaints.

The difference isn't that the EU has more rules and the US has fewer. It's that the EU treats "is this credit product structured fairly" as a question asked by default, before the product ships. The US treats it as a forensic question, answered years later, by a regulator that can be talked out of enforcing its own conclusions by the companies it regulates.


## The Status Stack, Named

Strip away the specific card numbers and the same handful of mechanisms show up across the whole product line.

**Weight as heuristic:** the plunk factor. A heavier card reads as a more valuable card, independent of what's actually in the account behind it.

**Opacity as scarcity:** Centurion's unpublished criteria keep the aspiration alive precisely because it can never be definitively failed.

**Sunk cost via annual fee:** an $895 fee framed as pre-paid credits creates pressure to "earn it back," which means using the card, which means staying enrolled in the ecosystem of merchant partners that generates that spend.

**A closed-loop currency:** Membership Rewards points can't be benchmarked against a dollar, which makes a 20 to 33 percent devaluation across three countries in six months something you'd have to be reading credit card blogs to even notice.

**Identity and tenure lock-in:** Amex is the one issuer whose apps and statements constantly remind you how long you've been a "Member." Closing a card you've held for a decade doesn't feel like closing an account. It feels like ending something.

None of these mechanisms are illegal on their own. Every one of them is legal specifically because the US treats disclosure and after-the-fact fines as sufficient, where the EU increasingly does not.


## What My $95 Card Taught Me

My Sapphire Preferred isn't trying to be a Platinum, and it's nowhere near a Centurion. It's a $95 chunk of stainless steel, the cheapest available unit of a feeling Amex spent twenty-five years building a mythology around. And it works anyway. I know without checking that it's heavier than the debit card next to it in my wallet. That has nothing to do with a 21 percent APR or a hotel credit I'll probably forget to use. It has to do with a company that figured out, decades before anyone else, that the easiest way to sell status is to sell weight, and then let every restaurant counter and checkout line do the rest of the advertising for free.

The interesting question isn't whether that's a scam. Mostly, it isn't. The lounges are real. The miles are real, until Amex quietly decides they're worth a fifth less. The metal is genuinely heavier. The interesting question is what happens when an entire category of financial product succeeds by making people feel a certain way rather than by offering a transparently better deal, and the only referee watching to make sure that feeling doesn't tip into deception is one that, the same year Amex pushed the Platinum fee to $895, agreed to let its own consumer protection rule get thrown out because the banks asked nicely.

Somewhere in Brussels, that trade is being written out of the rulebook in advance. In my wallet, the card just sits there, heavier than everything else in it, and I'd be lying if I said that doesn't feel exactly the way it's supposed to feel.


*Sources: CFPB enforcement action against American Express Centurion Bank, American Express Bank FSB, and American Express Travel Related Services (October 2012); U.S. Department of Justice settlement with American Express over deceptive small-business card marketing (January 2025); CFPB Credit Card Penalty Fees Final Rule and its vacatur by the U.S. District Court for the Northern District of Texas (April 2025); CFPB circular on credit card rewards program devaluation practices; Directive (EU) 2023/2225 on credit agreements for consumers (Consumer Credit Directive II); reporting on Amex annual fee history and 2025-2026 benefit changes by Upgraded Points and CNBC Select; reporting on Membership Rewards transfer partner devaluations by The Points Guy, One Mile at a Time, and Mainly Miles (2025-2026); "plunk factor" reporting by Fortune (2024).*`,
};

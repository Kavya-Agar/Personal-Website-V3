import type { Teardown } from "./types";

export const robinhood: Teardown = {
  id: "robinhood",
  appName: "Robinhood",
  thesis: "How Robinhood Turns a Signup Into a Trader",
  category: "Retail Brokerage",
  description: "A step-by-step teardown of the onboarding funnel behind the free brokerage and the psychology that routes users toward its most profitable products.",
  keyInsights: [
    "Access framing turns every risk product into an upgrade",
    "Compliance quizzes that create paper trails without gating access",
    "Reciprocity, variable reward, and habit formation stacked in sequence",
  ],
  date: "2026-06-08",
  critique: "Democratizing finance and optimizing for monetizable behavior are two goals in direct tension — the onboarding reveals which one wins",
  content: `# How Robinhood Turns a Signup Into a Trader

You download Robinhood because you want to invest. Maybe you saw something about index funds. Maybe a friend mentioned it. Maybe you just got your first real paycheck and feel like you should be doing something with it.

Twelve minutes later, you have an account, a free stock, $1,000 in instant buying power, and a prompt asking if you'd like to start trading options.

That speed is not an accident. It is the product.


## Step 1: The Download Decision

Robinhood's App Store presence is its first funnel layer. Green numbers, a clean chart, and the words "Invest for free." Reviews averaging 4.2 stars, top ones mentioning ease of use. Not a single number about investment returns.

The framing from the first pixel is access. You are being let in. Other brokerages have minimums, paperwork, advisors who look at you funny if your account is under $50,000. Robinhood has none of that. The implicit promise is that what was previously unavailable to you is now available. That framing does not go away. It runs through every screen of the onboarding.


## Step 2: Account Creation (Friction as a Design Choice)

The signup flow asks for your name, email, and a password. That's it for screen one.

Compare this to opening a bank account, where you're typically asked for a government ID, employment status, and sometimes a utility bill before you've gotten past the first page. Robinhood delays all of that. You see progress. You feel momentum. You are already inside.

This is a deliberate reversal of the traditional financial services onboarding pattern. Legacy brokerages front-load compliance and verification because their compliance teams designed the flow. Robinhood's product team designed theirs. The compliance requirements are still there. They're just distributed later in the flow, after you're already invested in finishing.

The psychology term for this is the sunk cost nudge. Once you've spent four minutes on a signup, the activation energy required to abandon it is much higher than it was before you started.


## Step 3: The Goals Quiz (Data That Doesn't Gate Anything)

After basic account creation, Robinhood asks you a series of questions:

- What are you investing for? (Retirement, building wealth, extra income, other)
- What's your investment experience? (None, some, a lot)
- What's your risk tolerance? (Conservative, moderate, aggressive)

These questions look like suitability screening. They have the shape of the "know your customer" requirements that financial regulators mandate. But notice what they don't do: none of your answers restrict what you can access. A user who selects "no experience" and "conservative" and "extra income" gets the same product as one who selects "a lot of experience" and "aggressive" and "wealth building."

What the quiz actually does is two things. First, it creates a paper trail. Robinhood can demonstrate to regulators that it asked the required questions. Second, it personalizes the marketing copy that follows. If you said you're investing for retirement, the next screens will talk about long-term wealth. If you said extra income, they'll lean into the idea of your money working for you. The product doesn't change. The messaging wraps around your stated identity.

This is not unique to Robinhood. It is standard fintech practice. But it is worth naming clearly, because the quiz feels like it matters when you're taking it.


## Step 4: Identity Verification (Normalizing the SSN)

Now comes the Social Security number. You've been in the app for maybe five or six minutes. You have a sense of the product, you've seen the interface, you've answered some questions about yourself. Now they need your SSN.

The placement here is careful. Asking for a Social Security number on screen one of any app would cause massive drop-off. Users would close it immediately. Here, it arrives after you've already built a relationship with the product, after you've already made micro-commitments by answering the quiz, after the app has already started to feel like yours.

Robinhood frames the SSN request with a brief explanation: required by federal law to verify your identity and prevent fraud. This is true. But the framing is "this is a formality," not "this is a significant piece of personal data you're sharing with a fintech startup." The distinction matters.


## Step 5: Instant Buying Power (The First Taste of Margin)

Before your deposit clears, before you've moved a dollar from your bank account, Robinhood offers you up to $1,000 in instant buying power.

This is margin. It is Robinhood lending you money. But the word "margin" does not appear in this part of the flow. The language is "instant buying power," which sounds like a feature, like an upgrade, like something you're receiving rather than a liability you're taking on.

The mechanics: you initiate an ACH transfer, which takes several business days to settle. In the meantime, Robinhood advances you up to $1,000 so you can trade immediately. If you sell before the transfer settles, the proceeds cover the advance. If the stock drops below what you bought it for and you sell at a loss, you owe the difference.

For most users, this works fine and they never think about the mechanics. But the design choice is significant. Your very first action in Robinhood, before you've transferred a cent, can be to trade with borrowed money. The introduction to investing and the introduction to leverage happen simultaneously, in the same flow, without the word leverage appearing once.

For Robinhood Gold subscribers, the instant buying power ceiling rises to $50,000.


## Step 6: The Free Stock (Reciprocity, Engineered)

You've completed the account setup. Now Robinhood gives you a free stock.

The stock is real. It's a share of an actual company. The value typically ranges from a few dollars to, occasionally, something more substantial if you're lucky. The mechanic is presented as a scratch-off: you tap to reveal which company you received. Green confetti falls.

The behavioral mechanic at work here is reciprocity. Robert Cialdini documented this in *Influence* in 1984: when someone gives you something, you feel a pull to give something back. In this context, giving something back means engaging with the product. Depositing money. Making a trade. The free stock is not charity. It is an acquisition cost that also creates an emotional obligation.

There's a secondary effect: now you own a stock. You have a position. You'll check the app to see how it's doing. Every time you open Robinhood to check your free share of some company you've never heard of, you are training the habit of checking the app. Daily active users are a core metric for Robinhood. The free stock is a retention mechanism dressed as a gift.

The referral program extends this: refer a friend, both of you get a free stock. This is how Robinhood grew its initial user base with near-zero paid acquisition costs. Reciprocity, distributed virally.


## Step 7: The Options Unlock (Access Framing for Risk Products)

Some time after account creation, often within the first few sessions, Robinhood prompts you to apply for options trading.

The language is "apply," but the framing is "unlock." You are not applying to take on additional financial risk. You are upgrading your account. You are getting access to more of the product.

Options are complex derivatives. A call option gives you the right to buy a stock at a set price before a set date. A put option gives you the right to sell. You can lose your entire investment on an option if it expires worthless, which the majority of retail options do. The maximum loss on a stock is 100% of what you paid. Options can behave much more violently than that in short timeframes.

The application asks a few questions about your options experience. It then assigns you a "level," which determines what options strategies you can run. Level 1 is covered calls, relatively conservative. Level 2 is buying calls and puts outright, the most common retail options play, and where most retail losses happen. Level 3 adds spreads.

Most new users get approved to Level 2 quickly, sometimes immediately. The bar for Level 2 is not particularly high, and the financial consequences of Level 2 options trading for an undercapitalized retail investor can be severe.

In 2020, a 20-year-old named Alex Kearns died by suicide after seeing a negative $730,000 balance in his Robinhood account from an options spread. His account wasn't actually down that amount. It was a display of unrealized temporary exposure before assignment, but the interface didn't explain that. He thought he'd destroyed his finances. Robinhood updated the UI after his death to add more contextual information to complex positions.

The options funnel is worth examining not because options are inherently predatory, but because the product journey from "I want to invest" to "I am buying short-dated options" can happen in days, with minimal friction, before a user has any real understanding of what they're doing.


## Step 8: The Gold Upsell (Turning the Product Into a Subscription)

Robinhood Gold is a $5/month subscription. It includes higher instant buying power (up to $50,000), margin investing beyond your deposit, professional research reports from Morningstar, a higher interest rate on uninvested cash, and Level 2 market data.

The Gold upsell appears naturally, after you've been in the product for a while, when you bump into a limit that Gold removes. Want more than $1,000 in instant buying power? Gold. Want to see more detailed market data? Gold. The upsell is triggered by your own behavior, which makes it feel like a response to your needs rather than a sales pitch.

Margin interest is where Robinhood makes significant money from Gold subscribers. If you have $10,000 in your account and want to buy $15,000 worth of stock, the extra $5,000 is a margin loan. Robinhood charges interest on that balance. Margin rates have historically been around 5 to 8 percent annually. For a retail investor holding a leveraged position for any length of time, that is a meaningful cost that reduces returns.

The Gold subscription is also the clearest indicator of where Robinhood's business model is going. Payment for order flow revenue is under regulatory pressure and depends on trade volume, which is volatile. Subscription and margin interest revenue is recurring and scales with account size. Gold is the durable business. The free tier is the funnel that feeds it.


## The Psychology Stack, Named

Looking across the full flow, the mechanisms layer in a specific order.

**Reciprocity:** the free stock creates obligation before the first trade.

**Completion pressure:** progress bars and multi-step flows make abandonment feel like quitting, not opting out.

**Identity anchoring:** the goals quiz ties the product to your self-concept before you've done anything.

**Access framing:** every product, including margin and options, is presented as something you're being given access to, not something that carries risk. The language is consistently unlock, apply, upgrade. Not borrow, leverage, or speculate.

**Variable reward:** the free stock scratch-off, the daily portfolio movement, the options P&L. All of these produce unpredictable outcomes on a variable schedule. Variable ratio reinforcement is the most powerful behavioral conditioning pattern. It is also how slot machines work.

**Habit formation:** push notifications, the home screen widget, the portfolio check that becomes reflexive. Robinhood is not trying to be a tool you use occasionally. It wants to be a daily behavior.

None of these patterns are illegal. Most of them are used by every consumer app that depends on engagement. But their application in the context of financial products, where the behavior being reinforced involves real money and real risk, deserves more scrutiny than they'd get in the context of a photo-sharing app.


## What the Fine Print Said

In 2021, FINRA fined Robinhood $57 million, the largest fine in the organization's history at the time, and ordered $12.6 million in restitution to customers. The findings included:

- Robinhood approved thousands of customers for options trading who didn't meet the firm's own eligibility criteria
- The platform displayed false or misleading information about customers' account balances and options positions
- The firm failed to report tens of thousands of customer complaints
- Systems outages during high-volatility periods left customers unable to trade

The "know your customer" requirements that the goals quiz is designed to address are not guidelines. They are rules. FINRA found that Robinhood collected the data and then didn't use it to gate access. The quiz was compliance theater.

Robinhood paid the fine, did not admit or deny the findings, and continued operating. The fine was $57 million against a company that was valued at roughly $32 billion at its IPO the same year.


## The Comparison: What a Less Optimized Onboarding Looks Like

Open a brokerage account at Fidelity. The flow is longer, the interface is uglier, and you will be asked to confirm your understanding of certain products before accessing them. Options approval takes longer and the questions are more pointed. The free stock offer is not there. There is no confetti.

Fidelity is not more ethical than Robinhood in some absolute sense. Fidelity has its own conflicts of interest and its own revenue incentives. But Fidelity's revenue model does not depend on trade frequency. Fidelity makes money on assets under management, on funds, on advisory services. It does not make more money because you traded today instead of last week. That structural difference shapes what the onboarding optimizes for.

Robinhood's revenue has historically correlated directly with trading volume. More trades means more payment for order flow revenue. That means Robinhood's product incentives and its users' financial interests are not aligned. A user who buys a diversified index fund and holds it for thirty years is a mediocre Robinhood customer. A user who actively trades options several times a week is a great one.

The onboarding is designed to make the latter as easy to become as possible.


## The Harder Question

Robinhood genuinely did democratize access to brokerage accounts. Before Robinhood, zero-commission trading did not exist. The company's competitive pressure forced every major brokerage to eliminate trading commissions, which is unambiguously good for retail investors.

Millions of people opened their first investment account on Robinhood. Many of them learned, had good experiences, and went on to build real portfolios. The product is not a scam.

But "democratizing finance" and "optimizing for monetizable behavior" are two goals that create real tension inside a single product. The onboarding makes both visible at once. The free stock and the zero-commission trades are genuine access. The options unlock and the margin nudge and the variable reward mechanics are optimization.

The question isn't whether Robinhood is good or bad. It's whether a product can democratize access to something while also being structurally incentivized to push users toward the riskier, more expensive version of that thing.

The onboarding suggests the answer is: it can try to do both, but the incentives will show up in the details. And in consumer product design, the details are everything.


*Sources: FINRA AWC No. 2020056173901 (June 2021); Robinhood S-1 filing (July 2021); Influence by Robert Cialdini (1984); reporting on the Alex Kearns case by the Chicago Tribune and Bloomberg (June 2020).*`,
};

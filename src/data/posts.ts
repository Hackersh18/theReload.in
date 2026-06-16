import type { Post } from "@/types";

export const posts: Post[] = [
  {
    slug: "design-system-before-features",
    title: "Why Your SaaS Needs a Design System Before It Needs Features",
    excerpt:
      "Shipping features without a design system is borrowing against your future velocity. Here's the interest rate you'll pay.",
    category: "Design",
    date: "2026-05-28",
    readTime: 8,
    author: { name: "Priya Nair", role: "Head of Design" },
    featured: true,
    intro:
      "Every founder we meet wants to ship features. Almost none of them want to talk about buttons. But the gap between a product that scales gracefully and one that collapses under its own weight usually traces back to a decision made in the first month: whether to invest in a design system before piling on features.",
    sections: [
      {
        heading: "Features are liabilities until they're systematized",
        body: [
          "A feature is not an asset the moment you ship it — it's a liability you've taken on. Every screen has to be maintained, restyled when the brand evolves, and kept consistent with everything around it. Without a shared system, each new feature is built from scratch, and the cost of consistency compounds.",
          "A design system flips the economics. Instead of designing a date picker for the fifth time, you reach for the one that already exists, already accessible, already tested. The marginal cost of the sixth feature drops dramatically.",
        ],
      },
      {
        heading: "Consistency is a feature your users feel",
        body: [
          "Users rarely articulate that your spacing is inconsistent or your buttons have six different shades of blue. What they feel is friction. The product feels harder to use, less trustworthy, a little cheaper — even if they can't say why.",
          "A design system encodes those decisions once, so consistency becomes the default rather than something you have to police in code review.",
        ],
      },
      {
        heading: "Start small, but start",
        body: [
          "You don't need a hundred-page Figma library on day one. Start with the primitives: color tokens, type scale, spacing, and a handful of core components. Document the rules. Build everything else on top of that foundation.",
          "The teams that win aren't the ones with the prettiest component library. They're the ones who can ship the next ten features without slowing down — and that starts with the system underneath.",
        ],
      },
    ],
  },
  {
    slug: "true-cost-of-bad-architecture",
    title: "The True Cost of Bad Software Architecture",
    excerpt:
      "Bad architecture doesn't announce itself. It shows up as a slow, quiet tax on every change you make.",
    category: "Development",
    date: "2026-05-14",
    readTime: 6,
    author: { name: "Marcus Lee", role: "Principal Engineer" },
    intro:
      "Nobody sets out to build a tangled system. It happens one reasonable shortcut at a time. The trouble is that the bill for those shortcuts arrives later — and it arrives with interest.",
    sections: [
      {
        heading: "The tax you can't see on the invoice",
        body: [
          "Bad architecture rarely causes a dramatic outage. Instead it makes every feature take 20% longer, every bug take three guesses to locate, and every new hire take a month longer to become productive. None of that shows up as a line item, but it's the most expensive thing in your budget.",
          "The insidious part is that the team adapts. They stop noticing how slow things are because slow has become normal.",
        ],
      },
      {
        heading: "Coupling is the silent killer",
        body: [
          "Most architectural pain comes down to coupling: pieces of the system that shouldn't know about each other but do. Change one thing and three unrelated things break. The fix is rarely a rewrite — it's drawing clearer boundaries and being disciplined about what crosses them.",
        ],
      },
      {
        heading: "When to pay it down",
        body: [
          "You don't refactor for its own sake. You pay down architectural debt when it's actively slowing you on work you're about to do anyway. Bundle the cleanup with the feature that touches the same code, and the investment pays off immediately rather than sitting on a someday list.",
          "Good architecture isn't about predicting the future perfectly. It's about keeping the cost of changing your mind low.",
        ],
      },
    ],
  },
  {
    slug: "pulsehr-wireframe-to-500-users",
    title: "How We Took PulseHR from Wireframe to 500 Users in 10 Weeks",
    excerpt:
      "A behind-the-scenes look at the decisions, trade-offs, and constraints that got an HR product to real users fast.",
    category: "Case Study",
    date: "2026-04-30",
    readTime: 10,
    author: { name: "Dana Whitfield", role: "Product Lead" },
    intro:
      "PulseHR came to us with a clear problem and an aggressive deadline: a working HR platform for mid-size teams, in front of paying customers, in under three months. Here's how we got there without cutting the corners that matter.",
    sections: [
      {
        heading: "Week 1–2: Ruthless scoping",
        body: [
          "The fastest way to miss a deadline is to build the wrong things. We spent the first two weeks cutting the roadmap in half, then in half again, until what remained was the smallest product that solved a real, painful job for HR managers.",
          "Everything that wasn't essential to that core loop got parked on a clearly labelled later list — visible, agreed, and out of the way.",
        ],
      },
      {
        heading: "Week 3–7: Build in public, internally",
        body: [
          "We ran weekly demos with the founders and a handful of friendly customers. Real software, every Friday. That cadence caught two features that looked great on paper but confused actual HR managers — before we'd sunk weeks into them.",
        ],
      },
      {
        heading: "Week 8–10: Launch and learn",
        body: [
          "We launched to a small cohort first, watched the analytics and support channel like hawks, and shipped fixes daily. By the end of week ten, 500 users were onboarded and the retention numbers told us we'd built the right thing.",
          "The lesson wasn't about working faster. It was about deciding faster, and refusing to build anything we couldn't justify to a real user.",
        ],
      },
    ],
  },
  {
    slug: "apis-that-dont-break-at-3am",
    title: "Building APIs That Don't Break at 3am",
    excerpt:
      "Resilience isn't a feature you bolt on later. It's a set of small habits you build in from the first endpoint.",
    category: "Development",
    date: "2026-04-12",
    readTime: 7,
    author: { name: "Marcus Lee", role: "Principal Engineer" },
    intro:
      "The pager going off at 3am is almost never caused by something exotic. It's a timeout that wasn't set, a retry storm nobody anticipated, or an error that got swallowed silently. Reliable APIs come from sweating those unglamorous details.",
    sections: [
      {
        heading: "Design for failure, not just success",
        body: [
          "The happy path is the easy part. What separates a robust API from a fragile one is how it behaves when a dependency is slow, a payload is malformed, or traffic spikes 10×. Set timeouts everywhere. Assume every external call can fail, and decide in advance what happens when it does.",
        ],
      },
      {
        heading: "Make it observable",
        body: [
          "You can't fix what you can't see. Structured logs, request tracing, and a handful of meaningful metrics turn a 3am mystery into a five-minute diagnosis. Instrument the boring stuff — latency, error rates, queue depth — before you need it.",
        ],
      },
      {
        heading: "Idempotency is your friend",
        body: [
          "Networks retry. Clients double-submit. If your write endpoints aren't idempotent, those retries become duplicate charges and corrupted state. An idempotency key on every mutating request is a small amount of work that prevents a whole category of pages.",
          "None of this is glamorous. That's exactly why it's where the reliability lives.",
        ],
      },
    ],
  },
  {
    slug: "what-clients-mean-by-make-it-pop",
    title: "What Clients Actually Mean When They Say 'Make It Pop'",
    excerpt:
      "Vague feedback isn't a problem to dread. It's a signal to decode — and a chance to lead.",
    category: "Design",
    date: "2026-03-29",
    readTime: 5,
    author: { name: "Priya Nair", role: "Head of Design" },
    intro:
      "\"Make it pop\" gets a bad rap among designers. But behind that throwaway phrase is almost always a real, specific reaction. Our job isn't to roll our eyes — it's to translate.",
    sections: [
      {
        heading: "It usually means hierarchy",
        body: [
          "Nine times out of ten, \"make it pop\" means the design lacks contrast and the eye doesn't know where to go. The fix isn't a brighter color — it's a clearer hierarchy. Bigger jumps in type scale, more deliberate use of whitespace, one obvious focal point per screen.",
        ],
      },
      {
        heading: "Ask the question behind the question",
        body: [
          "When feedback is vague, don't guess. Ask what they expected to feel, or which competitor they had in mind. \"What were you hoping someone would do on this screen?\" turns an aesthetic comment into an actionable brief.",
        ],
      },
      {
        heading: "Lead with options, not defensiveness",
        body: [
          "Show two or three concrete directions rather than arguing for the one you already made. Clients rarely have the vocabulary to direct design — but they're excellent at reacting to it. Give them something to react to and the feedback gets sharp fast.",
        ],
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export const featuredPost = posts.find((p) => p.featured) ?? posts[0];

export const postCategories = [
  "All",
  "Development",
  "Design",
  "Business",
  "SaaS",
  "Case Study",
] as const;

import Image from "next/image";

const engagements = [
  {
    title: "Fractional CTO support",
    description:
      "Steady technical judgement for founders and product leaders: architecture choices, hiring input, delivery planning and the trade-offs that shape a reliable product.",
  },
  {
    title: "Platform modernisation",
    description:
      "Incremental improvements to services, infrastructure and data flows so teams can move faster without betting everything on a rewrite.",
  },
  {
    title: "MVP delivery",
    description:
      "Hands-on product engineering for early ideas that need to reach real users, gather evidence and remain maintainable as the scope changes.",
  },
  {
    title: "Technical leadership for small teams",
    description:
      "Mentoring, code review, delivery rhythm and practical standards for teams that need senior support without adding management weight.",
  },
  {
    title: "Stabilising legacy systems",
    description:
      "Finding the operational friction, reducing incidents and making older systems understandable enough for teams to improve them with confidence.",
  },
];

const highlights = [
  "Engineering leadership roles across startup and scale-up environments.",
  "Deep experience with AWS, distributed systems, data pipelines and production operations.",
  "A delivery-focused approach shaped by two decades of building and maintaining software.",
  "Climate-related, sustainability and impact work with teams that need dependable technology.",
];

const principles = [
  "Clear-eyed about constraints",
  "Calm in complex delivery",
  "Hands-on when it matters",
];

export default function Home() {
  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col overflow-hidden px-5 py-6 sm:px-8 lg:px-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[44rem] bg-[radial-gradient(circle_at_12%_10%,rgba(215,195,151,0.32),transparent_22rem),radial-gradient(circle_at_85%_4%,rgba(132,157,134,0.22),transparent_26rem)]" />
      <header className="flex items-center justify-between rounded-full border border-forest-100/70 bg-earth-50/70 px-4 py-3 text-sm text-slate-800 shadow-[0_12px_40px_rgba(46,63,55,0.06)] backdrop-blur">
        <a href="#top" className="font-semibold tracking-tight">
          Dominic Porter
        </a>
        <nav className="hidden items-center gap-6 sm:flex" aria-label="Primary navigation">
          <a className="transition hover:text-forest-600" href="#about">
            About
          </a>
          <a className="transition hover:text-forest-600" href="#engagements">
            Engagements
          </a>
          <a className="transition hover:text-forest-600" href="#contact">
            Contact
          </a>
        </nav>
      </header>

      <section id="top" className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:py-28">
        <div>
          <p className="mb-6 inline-flex rounded-full border border-moss-200/80 bg-earth-50/80 px-4 py-2 text-sm font-medium text-forest-700 shadow-sm">
            Senior Software Engineer / Fractional CTO
          </p>
          <h1 className="max-w-5xl text-5xl font-semibold tracking-[-0.045em] text-slate-900 sm:text-6xl lg:text-7xl">
            Calm technical leadership for climate and mission-driven products.
          </h1>
          <p className="mt-7 max-w-2xl text-xl leading-9 text-slate-700">
            I help small teams build, scale and stabilise dependable software for meaningful real-world problems — bringing senior engineering depth without agency overhead or startup theatre.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:hello@extinctionsucks.help?subject=Freelance%20engineering%20enquiry"
              className="inline-flex items-center justify-center rounded-full bg-forest-800 px-6 py-3 text-sm font-semibold text-earth-50 shadow-warm transition hover:bg-forest-700 focus:outline-none focus:ring-2 focus:ring-forest-600 focus:ring-offset-2 focus:ring-offset-earth-50"
            >
              Start a conversation
            </a>
            <a
              href="#engagements"
              className="inline-flex items-center justify-center rounded-full border border-moss-200 bg-earth-50/80 px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-forest-600 hover:bg-white/70"
            >
              Typical engagements
            </a>
          </div>
          <ul className="mt-10 grid gap-3 text-sm font-medium text-slate-700 sm:grid-cols-3">
            {principles.map((principle) => (
              <li key={principle} className="rounded-2xl border border-earth-200/70 bg-earth-50/60 px-4 py-3 shadow-sm">
                {principle}
              </li>
            ))}
          </ul>
        </div>

        <aside className="relative rounded-[2.25rem] border border-white/75 bg-gradient-to-br from-earth-50/95 via-earth-100/70 to-moss-100/70 p-4 shadow-soft backdrop-blur">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/80 shadow-inner-soft" style={{ aspectRatio: "4/5" }}>
            <Image
              src="/dom.jpg"
              alt="Dominic Porter"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority
            />
          </div>
          <div className="absolute -bottom-6 left-8 right-8 rounded-3xl border border-white/80 bg-earth-50/95 p-5 text-sm leading-6 text-slate-700 shadow-layer backdrop-blur">
            <span className="font-semibold text-forest-800">Focus:</span> climate tech, sustainability organisations, NGOs and tech-for-good teams that need dependable engineering.
          </div>
        </aside>
      </section>

      <section id="about" className="section-shell mt-8 py-14 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1fr]">
          <div>
            <p className="eyebrow">About</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Practical senior engineering for teams with important work to ship.</h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-slate-700">
            <p>
              I am a senior engineer with 20+ years of experience building, operating and improving digital products. My work spans hands-on implementation, engineering leadership, architecture and production operations.
            </p>
            <p>
              I work best with small, capable teams that need experienced technical judgement, clear delivery habits and systems that can be trusted. The focus is pragmatic engineering: understand the constraints, make the right trade-offs and keep momentum.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell py-14 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-start">
          <div>
            <p className="eyebrow">Why this work matters</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Useful technology needs to survive contact with the real world.</h2>
          </div>
          <div className="rounded-[2rem] border border-earth-200/75 bg-gradient-to-br from-earth-50/90 to-moss-100/55 p-7 text-lg leading-8 text-slate-700 shadow-layer sm:p-8">
            <p>
              Climate, sustainability and public-benefit teams often work with difficult constraints: limited runway, changing evidence, legacy systems and high expectations from people outside the technology team. Good engineering cannot solve every problem, but it can reduce friction, make decisions clearer and give important work a stronger foundation.
            </p>
            <p className="mt-5">
              My role is to bring calm senior judgement, dependable delivery and enough technical depth to help teams move forward without adding noise.
            </p>
          </div>
        </div>
      </section>

      <section id="engagements" className="section-shell py-14 sm:py-20">
        <div className="max-w-3xl">
          <p className="eyebrow">Typical engagements</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Practical support shaped around the work, not a sales package.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            Flexible support for founders, product leaders and small engineering teams who need steady senior input, direct implementation and better delivery habits.
          </p>
        </div>
        <div className="mt-11 grid gap-5 md:grid-cols-2">
          {engagements.map((engagement, index) => (
            <article key={engagement.title} className="group rounded-[1.75rem] border border-white/75 bg-earth-50/82 p-6 shadow-layer transition duration-300 hover:-translate-y-0.5 hover:shadow-soft">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-moss-100 to-earth-200 text-sm font-bold text-forest-800 shadow-sm">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="text-xl font-semibold text-slate-900">{engagement.title}</h3>
              <p className="mt-3 leading-7 text-slate-700">{engagement.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell py-14 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-start">
          <div>
            <p className="eyebrow">Experience highlights</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">A concise view of relevant experience.</h2>
          </div>
          <ul className="grid gap-4">
            {highlights.map((highlight) => (
              <li key={highlight} className="rounded-3xl border border-white/75 bg-earth-50/75 p-5 text-base leading-7 text-slate-700 shadow-sm">
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact" className="py-14 sm:py-20">
        <div className="rounded-[2rem] bg-gradient-to-br from-forest-800 via-forest-900 to-slate-900 p-8 text-earth-50 shadow-soft sm:p-10 lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-earth-200">Contact</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">Need senior engineering or fractional technical leadership?</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-earth-50/75">
            Send a short note about the product, team and problem you are trying to solve. I will reply with next steps if it looks like a fit.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="mailto:hello@extinctionsucks.help?subject=Freelance%20engineering%20enquiry"
              className="inline-flex items-center justify-center rounded-full bg-earth-50 px-6 py-3 text-sm font-semibold text-forest-900 transition hover:bg-earth-100 focus:outline-none focus:ring-2 focus:ring-earth-200 focus:ring-offset-2 focus:ring-offset-forest-900"
            >
              Contact
            </a>
            <a className="text-sm font-medium text-earth-50/70 transition hover:text-earth-50" href="mailto:hello@extinctionsucks.help?subject=Freelance%20engineering%20enquiry">
              hello@extinctionsucks.help
            </a>
            <a className="text-sm font-medium text-earth-50/70 transition hover:text-earth-50" href="https://linkedin.com/in/porterdom" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
          <p className="mt-6 text-sm leading-6 text-earth-50/50">Work is delivered via Extinction Sucks Ltd (UK).</p>
        </div>
      </section>

      <footer className="border-t border-moss-200/60 py-8 text-sm text-slate-600">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© Dominic Porter</p>
          <p>Operated by Extinction Sucks Ltd</p>
          <a className="transition hover:text-slate-900" href="https://linkedin.com/in/porterdom" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </footer>
    </main>
  );
}

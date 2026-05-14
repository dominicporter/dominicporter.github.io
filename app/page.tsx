const services = [
  {
    title: "Fractional CTO / technical leadership",
    description:
      "Calm senior guidance for product decisions, technical direction, hiring, delivery planning and engineering practices.",
  },
  {
    title: "Platform modernisation and architecture",
    description:
      "Pragmatic improvements to legacy services, cloud infrastructure and data-heavy systems without unnecessary rewrites.",
  },
  {
    title: "MVP development for startups",
    description:
      "Hands-on product engineering that gets early ideas into reliable users' hands quickly, with room to evolve.",
  },
  {
    title: "Stabilising and scaling existing systems",
    description:
      "Finding the failure points, reducing operational noise and making systems easier to maintain as teams grow.",
  },
  {
    title: "Senior engineering support for small teams",
    description:
      "Direct implementation, code review, mentoring and delivery support where experienced judgement matters.",
  },
];

const highlights = [
  "Engineering leadership roles across startup and scale-up environments.",
  "Deep experience with AWS, distributed systems, data pipelines and production operations.",
  "A delivery-focused approach shaped by two decades of building and maintaining software.",
  "Climate-related, sustainability and impact work with teams that need dependable technology.",
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 py-6 sm:px-8 lg:px-10">
      <header className="flex items-center justify-between py-4 text-sm text-forest-900">
        <a href="#top" className="font-semibold tracking-tight">
          Dominic Porter
        </a>
        <nav className="hidden items-center gap-6 sm:flex" aria-label="Primary navigation">
          <a className="transition hover:text-forest-600" href="#about">
            About
          </a>
          <a className="transition hover:text-forest-600" href="#services">
            Services
          </a>
          <a className="transition hover:text-forest-600" href="#contact">
            Contact
          </a>
        </nav>
      </header>

      <section id="top" className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:py-28">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-forest-100 bg-white/70 px-4 py-2 text-sm font-medium text-forest-700 shadow-sm">
            Senior Software Engineer / Fractional CTO
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-forest-900 sm:text-5xl lg:text-6xl">
            I help climate startups and mission-driven organisations build, scale and stabilise digital products through senior hands-on engineering and fractional technical leadership.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-forest-900/75">
            Senior engineer and fractional technical leader helping mission-driven teams turn complex systems into dependable digital products.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:hello@dominicporter.dev?subject=Freelance%20engineering%20enquiry"
              className="inline-flex items-center justify-center rounded-full bg-forest-900 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-forest-700 focus:outline-none focus:ring-2 focus:ring-forest-600 focus:ring-offset-2"
            >
              Get in touch
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-forest-100 bg-white/70 px-6 py-3 text-sm font-semibold text-forest-900 transition hover:border-forest-600"
            >
              See how I can help
            </a>
          </div>
        </div>

        <aside className="rounded-[2rem] border border-white/70 bg-white/75 p-6 shadow-soft backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest-600">Focus</p>
          <div className="mt-6 space-y-4 text-base leading-7 text-forest-900/80">
            <p>Climate tech startups</p>
            <p>Sustainability organisations</p>
            <p>Mission-driven NGOs</p>
            <p>Tech-for-good companies</p>
          </div>
        </aside>
      </section>

      <section id="about" className="border-t border-forest-100 py-14 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest-600">About</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-forest-900">Practical senior engineering for teams with important work to ship.</h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-forest-900/75">
            <p>
              I am a senior engineer with 20+ years of experience building, operating and improving digital products. My work spans hands-on implementation, engineering leadership, architecture and production operations.
            </p>
            <p>
              I work best with small, capable teams that need experienced technical judgement, clear delivery habits and systems that can be trusted. The focus is pragmatic engineering: understand the constraints, make the right trade-offs and keep momentum.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="border-t border-forest-100 py-14 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest-600">What I do</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-forest-900">Senior technical support without agency overhead.</h2>
          <p className="mt-4 text-lg leading-8 text-forest-900/75">
            Flexible support for founders, product leaders and small engineering teams who need steady senior input and direct delivery.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="rounded-3xl border border-white/70 bg-white/75 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-forest-900">{service.title}</h3>
              <p className="mt-3 leading-7 text-forest-900/70">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-forest-100 py-14 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest-600">Experience highlights</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-forest-900">A concise view of relevant experience.</h2>
          </div>
          <ul className="space-y-4">
            {highlights.map((highlight) => (
              <li key={highlight} className="rounded-2xl border border-white/70 bg-white/70 p-5 text-base leading-7 text-forest-900/75 shadow-sm">
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact" className="py-14 sm:py-20">
        <div className="rounded-[2rem] bg-forest-900 p-8 text-white shadow-soft sm:p-10 lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-earth-200">Contact</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">Need senior engineering or fractional technical leadership?</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-white/75">
            Send a short note about the product, team and problem you are trying to solve. I will reply with next steps if it looks like a fit.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:hello@dominicporter.dev?subject=Freelance%20engineering%20enquiry"
              className="inline-flex items-center justify-center rounded-full bg-earth-50 px-6 py-3 text-sm font-semibold text-forest-900 transition hover:bg-earth-100 focus:outline-none focus:ring-2 focus:ring-earth-200 focus:ring-offset-2 focus:ring-offset-forest-900"
            >
              Get in touch
            </a>
            <a
              href="https://www.linkedin.com/"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/60"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

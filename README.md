# Dominic Porter personal website

A simple conversion-focused personal landing page for freelance senior software engineering and fractional CTO work with climate, sustainability and mission-driven organisations.

## Tech stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Docker standalone build

## Local development

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Production build

```bash
npm run build
npm start
```

## Docker

```bash
docker build -t dominicporter-site .
docker run --rm -p 3000:3000 dominicporter-site
```

## Customise

Update the email and LinkedIn links in `app/page.tsx` before publishing if needed.

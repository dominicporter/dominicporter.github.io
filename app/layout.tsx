import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dominic Porter — Senior Software Engineer / Fractional CTO",
  description:
    "Senior hands-on engineering and fractional technical leadership for climate startups, sustainability organisations, NGOs and tech-for-good teams.",
  openGraph: {
    title: "Dominic Porter — Senior Software Engineer / Fractional CTO",
    description:
      "Helping climate startups and mission-driven organisations build, scale and stabilise dependable digital products.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

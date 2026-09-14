import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Fruits Crew — Back to Nature",
    template: "%s | Fruits Crew",
  },
  description:
    "Everything Is Connected. Each One Teach One. A joyful children’s educational universe that reconnects kids with nature through fruit characters, stories, music, maths and real science.",
  keywords: [
    "children education",
    "nature education",
    "fruits",
    "plants",
    "STEM",
    "Caribbean",
    "African heritage",
    "kids learning",
  ],
  authors: [{ name: "Darren-neil" }],
  openGraph: {
    title: "Fruits Crew — Back to Nature",
    description: "Everything Is Connected. Each One Teach One.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#16a34a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}

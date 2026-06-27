import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://subhashkumar.com.np"),

  title: {
    default: "Subhash Kumar | SEO, AI & Web Development Blog",
    template: "%s | Subhash Kumar",
  },

  description:
    "Personal blog by Subhash Kumar featuring in-depth articles on SEO, AI, Next.js, React, Web Development, Programming, Blogging, and Digital Marketing.",

  keywords: [
    "Subhash Kumar",
    "SEO",
    "Next.js",
    "React",
    "AI",
    "Artificial Intelligence",
    "Programming",
    "Web Development",
    "Digital Marketing",
    "Blogging",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
  ],

  authors: [
    {
      name: "Subhash Kumar",
      url: "https://subhashkumar.com.np",
    },
  ],

  creator: "Subhash Kumar",

  publisher: "Subhash Kumar",

  category: "Technology",

  robots: {
    index: true,
    follow: true,
    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",

    url: "https://subhashkumar.com.np",

    siteName: "Subhash Kumar",

    title: "Subhash Kumar | SEO, AI & Web Development Blog",

    description:
      "Expert tutorials and articles on SEO, Next.js, AI, React, Web Development and Digital Marketing.",

    locale: "en_US",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Subhash Kumar",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Subhash Kumar | SEO, AI & Web Development Blog",

    description:
      "Learn SEO, AI, Programming, React, Next.js and Web Development.",

    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gray-50 text-gray-900 antialiased">
        <Navbar />

        <main className="min-h-screen">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
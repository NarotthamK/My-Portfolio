import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import {Loader}  from "@/components/index";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  openGraph: {
    type: "website",
    locale: "en_US",
    title:
      "Naveen Sai",
    description:
      "Explore the portfolio of Naveen Sai",
    images: [
      {
        url: "/og-image.webp",
        alt: "Naveen Sai Portfolio",
      },
    ],
  },
  title:
    "Naveen Sai Alapati | Full Stack Developer | JPMC | Kansas,USA",
  description:
    "Explore the portfolio of Naveen Sai",
  keywords:
    "Naveen Sai Alapati, ReactJS, Angular, Java, SpringBoot, Node.js, Javascript, Typescript, Material UI, TailwindCSS, Web Development, Portfolio, React developer, Next js developer, USA",
  robots:
    "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  icons: {
    icon: "/favicon.webp",
    apple: "/apple-touch-icon.png",
  },
};

export const revalidate = 600;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden">
            <Suspense fallback={<Loader />}>{children}</Suspense>
            
          </main>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

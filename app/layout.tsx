import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import { Loader } from "@/components/loader";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Narottham K",
    description: "Explore the portfolio of Narottham K",
    images: [
      {
        url: "/og-image.webp",
        alt: "Narottham K Portfolio",
      },
    ],
  },
  title: "Narottham K | Cloud & Application Security Engineer | USA",
  description: "Explore the portfolio of Narottham K",
  keywords:
    "Narottham K, Cloud Security Engineer, Application Security Engineer, AppSec, Cloud Security, AWS Security, IAM Least Privilege, GuardDuty, CloudTrail, DevSecOps, CI/CD Security, GitHub Actions, Terraform, Infrastructure as Code, SOC Analyst, Security Engineering, Threat Detection, SIEM, Splunk, Zeek, Suricata, Security Automation, Python Security, OWASP Top 10, Secure SDLC, Web Application Security, Linux Hardening, CIS Benchmarks, Cybersecurity Portfolio, USA",
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
      <body className={`${inter.className} bg-black-100 text-white`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="relative flex flex-col min-h-screen w-full overflow-x-hidden">
            <Suspense fallback={<Loader />}>{children}</Suspense>
          </main>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

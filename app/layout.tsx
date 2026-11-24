import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ScrollProgressIndicator } from "@/components/scroll-progress-indicator"
import { AnimationProvider } from "@/contexts/animation-context"
import { StickyFooter } from "@/components/sticky-footer"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://sreezarman.github.io"),
  title: "Arman Ali | Paid Media Specialist",
  description:
    "Paid media specialist for e-commerce brands: Google Ads, Shopping, PMax & Meta. 9+ years, $60M+ annual ad spend, and hands-on GA4/GTM conversion tracking.",
  icons: {
    icon: "/arman-profile.jpeg",
  },
  openGraph: {
    title: "Arman Ali | Paid Media Specialist",
    description:
      "Paid media specialist for e-commerce brands: Google Ads, Shopping, PMax & Meta. 9+ years, $60M+ annual ad spend, and hands-on GA4/GTM conversion tracking.",
    images: [
      {
        url: "/arman-profile.jpeg",
        width: 1200,
        height: 630,
        alt: "Arman Ali - Paid Media Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arman Ali | Paid Media Specialist",
    description:
      "Paid media specialist for e-commerce brands: Google Ads, Shopping, PMax & Meta. 9+ years, $60M+ annual ad spend, and hands-on GA4/GTM conversion tracking.",
    images: ["/arman-profile.jpeg"],
    creator: "@armanali",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnimationProvider>
          <ScrollProgressIndicator />
          <Suspense>{children}</Suspense>
          <StickyFooter />
        </AnimationProvider>
      </body>
    </html>
  )
}

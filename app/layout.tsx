import "./globals.css"
import { Montserrat, Open_Sans } from "next/font/google"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import type React from "react"
import { Analytics } from "@vercel/analytics/react";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" })
const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-open-sans" })

export const metadata = {
  title: "Outtabox - Future Forward Workspaces",
  description:
    "Outtabox designs and builds workspaces that enhance productivity, inspire creativity, and support hybrid work models.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${montserrat.variable} ${openSans.variable} font-sans`}>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}


import "./globals.css"
import { Montserrat, Open_Sans } from "next/font/google"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import type React from "react"

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
      <body className={`${montserrat.variable} ${openSans.variable} font-sans`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}


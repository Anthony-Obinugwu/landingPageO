"use client";

import { metadata } from './metadata';
import "./globals.css";
import { Montserrat, Open_Sans } from "next/font/google";
import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Lazy load Header and Footer components with manual loading
const Header = dynamic(() => import("@/components/Header"), {
  loading: () => <LoadingSpinner />,
});
const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <LoadingSpinner />,
});

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-open-sans" });

// Custom Loading Spinner Component
function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="animate-spin w-16 h-16 border-4 border-tech-green border-t-transparent rounded-full"></div>
    </div>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const spinner = document.getElementById("loading-spinner");

    // Set a timeout to remove the spinner after 6 seconds
    const timer = setTimeout(() => {
      if (spinner) {
        spinner.remove(); // Remove the spinner from the DOM
        console.log("Spinner removed after 6 seconds.");
      }
    }, 6000); // 6000ms = 6 seconds

    // Cleanup the timeout on component unmount
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${montserrat.variable} ${openSans.variable} font-sans`}>
        {/* Header with custom loading spinner */}
        <Header />
        {children}
        {/* Footer with custom loading spinner */}
        <Footer />
        <Analytics />
        <SpeedInsights />

        {/* Custom loading spinner for dynamic components */}
        <div id="loading-spinner" className="fixed inset-0 flex items-center justify-center bg-white z-50">
          <LoadingSpinner />
        </div>
      </body>
    </html>
  );
}


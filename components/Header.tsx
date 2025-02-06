"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import AnimatedHeaderLogo from "./AnimatedHeaderLogo";

const primaryNavItems = [
  { name: "About", href: "#about-us" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#featured-projects" },
  { name: "Reviews", href: "#reviews" },
  { name: "Blog", href: "#blog-insights" },
  { name: "Careers", href: "#careers" },
  { name: "Contact", href: "#contact-us" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center">
              <AnimatedHeaderLogo />
              <span className="text-lg font-semibold">Outtabox</span>
            </Link>

            <nav className="hidden md:flex items-center space-x-6">
              {primaryNavItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleClick(item.href)}
                  className="text-sm hover:text-tech-green transition-colors duration-300"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>

          <div className="flex items-center">
            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-full"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-y-0 right-0 w-2/3 bg-tech-green z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center mb-6">
            <Link href="/" className="flex items-center">
              <AnimatedHeaderLogo />
              <span className="text-lg font-semibold text-white">Outtabox</span>
            </Link>
            <button className="p-2 hover:bg-deep-blue rounded-full" onClick={() => setIsMobileMenuOpen(false)}>
              <X className="w-5 h-5 text-white" />
            </button>
          </div>
          <nav className="space-y-4">
            {primaryNavItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleClick(item.href)}
                className="block w-full text-left text-lg text-white hover:bg-deep-blue hover:font-bold py-2 px-4 rounded transition-all duration-300"
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}


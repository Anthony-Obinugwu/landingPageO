"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
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

const websites = [
  { name: "The Yard", href: "https://theyard.outtabox.work/" },
  { name: "Sites and Stories", href: "https://sitesandstories.outtabox.work/" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop Header */}
      <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-6 py-2">
          <div className="flex items-center justify-between h-12">
            <Link href="/" className="flex items-center group">
              <AnimatedHeaderLogo />
              <span className="ml-2 text-xl font-bold text-deep-blue group-hover:text-tech-green transition-colors">
                Outtabox
              </span>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              {primaryNavItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleClick(item.href)}
                  className="relative group text-sm font-medium text-gray-700 hover:text-tech-green transition-colors"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tech-green transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}

              {/* Sub-brands Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center text-sm font-medium text-gray-700 hover:text-tech-green transition-colors"
                >
                  Sub-brands
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                {isDropdownOpen && (
                  <div className="absolute top-full mt-2 bg-white shadow-lg rounded-lg py-2 w-40">
                    {websites.map((site) => (
                      <a
                        key={site.name}
                        href={site.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-tech-green/10 hover:text-tech-green transition-colors"
                      >
                        {site.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="w-6 h-6 text-deep-blue" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isMobileMenuOpen ? 0 : "100%" }}
        transition={{ type: "tween", ease: "easeInOut" }}
        className="fixed inset-y-0 right-0 w-4/5 bg-white z-50 shadow-2xl md:hidden"
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <Link href="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
            <AnimatedHeaderLogo />
            <span className="ml-2 text-xl font-bold text-deep-blue">Outtabox</span>
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        <nav className="p-6 space-y-4">
          {primaryNavItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleClick(item.href)}
              className="block w-full text-left py-3 px-4 text-gray-800 hover:bg-tech-green/10 hover:text-tech-green rounded-lg transition-colors"
            >
              {item.name}
            </button>
          ))}

          {/* Websites Dropdown for Mobile */}
          <div className="space-y-2">
            <span className="block text-sm font-medium text-gray-700">Sub-brands</span>
            {websites.map((site) => (
              <a
                key={site.name}
                href={site.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-left py-3 px-4 text-gray-800 hover:bg-tech-green/10 hover:text-tech-green rounded-lg transition-colors"
              >
                {site.name}
              </a>
            ))}
          </div>
        </nav>
      </motion.div>
    </>
  );
}
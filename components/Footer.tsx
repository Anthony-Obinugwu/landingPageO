"use client";

import { Facebook, LinkedinIcon as LinkedIn, Instagram, Phone, Mail, MapPin, ChevronRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import AnimatedFooterLogo from "./AnimatedFooterLogo";

const footerLinks = {
  About: [
    { name: "Our Story", href: "#" },
    { name: "Team", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" },
  ],
  Services: [
    { name: "Workspace Strategy", href: "#" },
    { name: "Office Design", href: "#" },
    { name: "Smart Solutions", href: "#" },
    { name: "Sustainability", href: "#" },
  ],
  Resources: [
    { name: "Blog", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Guides", href: "#" },
    { name: "Newsletter", href: "#" },
  ],
  Support: [
    { name: "Contact", href: "#" },
    { name: "FAQs", href: "#" },
    { name: "Terms", href: "#" },
    { name: "Privacy", href: "#" },
  ],
};

const contactInfo = [
  { icon: Phone, text: "+2347044227870", href: "tel:+2347044227870" },
  { icon: Mail, text: "hello@outtabox.work", href: "mailto:hello@outtabox.work" },
  { icon: MapPin, text: "Abuja, Nigeria", href: "#" },
];

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/outtaboxwork?igsh=MWp4ZDVpNW9tcXlmeQ%3D%3D&utm_source=qr" },
  {
    icon: Facebook,
    href: "https://www.facebook.com/share/1BTiDeu6GX/?mibextid=wwXIfr",
  },
  // { icon: X, href: "#" },
  { icon: LinkedIn, href: "#" },
  { icon: MessageCircle, href: "https://www.threads.net/@outtaboxwork?igshid=NTc4MTIwNjQ2YQ=="},
  { icon: Phone, href: "http://wa.me/2347044227870" },
  // { icon: Pinterest, href: "https://pin.it/3XtUdwslp" },
];

export default function Footer() {
  return (
    <footer className="bg-deep-blue text-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <AnimatedFooterLogo />
              <span className="text-xl font-bold">Outtabox</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-sm">
              Creating world-class, future-forward workspaces that empower businesses to thrive in the evolving world of
              work.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-tech-green hover:text-tech-green/80 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-white mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-tech-green transition-colors flex items-center group"
                    >
                      <ChevronRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 transition-all" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-200 pt-8 mt-8">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="flex flex-wrap gap-8">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center text-gray-300 hover:text-tech-green transition-colors"
                >
                  <contact.icon className="w-5 h-5 mr-2" />
                  <span>{contact.text}</span>
                </a>
              ))}
            </div>
            <p className="text-gray-300 text-sm">© {new Date().getFullYear()} Outtabox. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}


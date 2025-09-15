"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const socialLinks = [
  {
    href: "https://www.facebook.com/wealbd2024",
    icon: <FaFacebookF />,
    color: "text-gray-600",
  },
  {
    href: "#",
    icon: <FaInstagram />,
    color: "text-gray-600",
  },
  {
    href: "#",
    icon: <FaTiktok />,
    color: "text-gray-600",
  },
  {
    href: "https://wa.me/8801403000212",
    icon: <FaWhatsapp />,
    color: "text-gray-600",
  },
];

const footerSections = [
  {
    title: "Services",
    links: [
      ["Men's Collection", "/collections/men"],
      ["Kids Collection", "/collections/kids"],
      ["Accessories", "/collections/accessories"],
      ["Size Guide", "/size-guide"],
      ["Custom Orders", "/custom-orders"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About Us", "/about"],
      ["Careers", "/careers"],
      ["Press", "/press"],
      ["Sustainability", "/sustainability"],
      ["Blog", "/blog"],
    ],
  },
  {
    title: "Help",
    links: [
      ["Shipping & Exchange", "/shipping-exchange"],
      ["Returns", "/returns"],
      ["FAQ", "/faq"],
      ["Contact", "/contact"],
      ["Warranty", "/warranty"],
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "" || !email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }
    console.log("Newsletter subscription for:", email);
    alert(`Thank you for subscribing with ${email}!`);
    setEmail("");
  };

  return (
    <footer className="w-full bg-gray-50 text-gray-800 shadow-md">
      {/* Socials */}

      {/* Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-12 px-6 md:px-16 bg-gray-50">
        {footerSections.map(({ title, links }) => (
          <div key={title}>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {title}
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {links.map(([text, href]) => (
                <li key={text}>
                  <Link
                    href={href}
                    className="hover:text-gray-900 hover:underline transition-colors duration-200"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
          <div className="text-sm text-gray-600 space-y-3">
            <div className="flex gap-3 items-center">
              <FaEnvelope className="text-gray-500" />
              <a
                href="mailto:wealbd2024@gmail.com"
                className="hover:text-gray-900 hover:underline transition-colors duration-200"
              >
                wealbd2024@gmail.com
              </a>
            </div>
            <div className="flex gap-3 items-center">
              <FaPhoneAlt className="text-gray-500" />
              <a
                href="tel:+8801403000212"
                className="hover:text-gray-900 hover:underline transition-colors duration-200"
              >
                +8801403000212
              </a>
            </div>
            <div className="flex gap-3 items-start">
              <FaMapMarkerAlt className="text-gray-500 mt-1" />
              <address className="not-italic leading-tight">
                <a
                  href="https://maps.app.goo.gl/4hccp969SeYRUVpH6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-900 hover:underline transition-colors duration-200"
                >
                  Bikrampur Shopping Mall,
                  <br />
                  Balasur, Sreenagar, Munshiganj
                  <br />
                  Bangladesh
                </a>
              </address>
            </div>
          </div>

          {/* Newsletter */}
          <div className="mt-6">
            <p className="font-medium text-sm text-gray-900 mb-2">
              Subscribe for updates
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-500 transition-all duration-200"
                required
              />
              <button
                type="submit"
                onClick={handleNewsletterSubmit}
                className="cursor-pointer bg-gray-800 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-gray-900 transition-colors duration-200"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full  pb-6 px-4 flex flex-wrap justify-center items-center gap-3 border-b border-gray-200">
        {socialLinks.map(({ href, icon, color }, i) => (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${color} p-2 rounded-full hover:bg-gray-100 hover:text-gray-900 transition-all duration-200`}
          >
            {React.cloneElement(icon, { className: "h-5 w-5" })}
          </a>
        ))}
      </div>
      {/* Bottom */}
      <div className="bg-gray-100 text-center text-sm text-gray-500 py-4 border-t border-gray-200">
        <p>&copy; {currentYear} WEAL BD. All rights reserved.</p>
      </div>
    </footer>
  );
}

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
    color: "text-blue-600",
  },
  {
    href: "#",
    icon: <FaInstagram />,
    color: "text-pink-600",
  },
  {
    href: "#",
    icon: <FaTiktok />,
    color: "text-black",
  },
  {
    href: "https://wa.me/8801403000212",
    icon: <FaWhatsapp />,
    color: "text-green-600",
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
    // Basic validation
    if (email.trim() === "" || !email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }
    // Here you would typically handle the newsletter subscription,
    // e.g., by sending the email to a server or a third-party service.
    console.log("Newsletter subscription for:", email);
    alert(`Thank you for subscribing with ${email}!`);
    setEmail(""); // Reset the input field
  };

  return (
    <footer className="w-full bg-white text-gray-800 shadow-xl overflow-hidden">
      {/* Socials */}
      <div className="w-full bg-blue-50 py-6 px-4 flex flex-wrap justify-center items-center gap-6 md:gap-20 border-b border-gray-200">
        {socialLinks.map(({ href, icon, color }, i) => (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:scale-110 transition-transform duration-300 ${color} hover:opacity-90 p-3 rounded-xl`}
          >
            {React.cloneElement(icon, { className: "h-7 w-7 sm:h-8 sm:w-8" })}
          </a>
        ))}
      </div>

      {/* Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 py-12 px-8 md:px-20 bg-pink-50 text-gray-800">
        {footerSections.map(({ title, links }) => (
          <div key={title}>
            <h3 className="text-xl font-semibold text-blue-700 mb-4">
              {title}
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              {links.map(([text, href]) => (
                <li key={text}>
                  <Link
                    href={href}
                    className="hover:text-blue-600 transition-colors"
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
          <h3 className="text-xl font-semibold text-blue-700 mb-4">Contact</h3>
          <div className="text-sm text-gray-700 space-y-3">
            <div className="flex gap-3 items-center">
              <FaEnvelope className="text-blue-600" />
              <a href="mailto:wealbd2024@gmail.com" className="hover:underline">
                wealbd2024@gmail.com
              </a>
            </div>
            <div className="flex gap-3 items-center">
              <FaPhoneAlt className="text-blue-600" />
              <a href="tel:+8801403000212" className="hover:underline">
                +8801403000212
              </a>
            </div>
            <div className="flex gap-3 items-start">
              <FaMapMarkerAlt className="text-blue-600 mt-1" />
              <address className="not-italic leading-tight">
                <a
                  href="https://maps.app.goo.gl/4hccp969SeYRUVpH6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:underline"
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
            <p className="font-semibold text-sm mb-2">Subscribe for updates</p>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-2"
            >
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow border border-gray-300 rounded-lg px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-5 py-2 rounded-lg text-base font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-gray-100 text-center text-sm text-gray-600 py-4 border-t border-gray-200">
        <p>&copy; {currentYear} WEAL BD. All rights reserved.</p>
      </div>
    </footer>
  );
}
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import IMAGES from "../../app/assets/images.constant";
import {
  ADDRESS,
  COMPANY_MAIL,
  NAVIGATION_ROUTES,
  PHONE_NO,
  RENTAL,
} from "../../app/constant.jsx";
import { quickLinks, services, socials } from "../../Store/Footer-Data";
import ServiceModal from "./serviceModal";
import { Typography } from "./typography";

import PropertyListingContent from "./PropertyListingContent";
import RoomBookingContent from "./RoomBookingContent";
import RoomMaintenanceContent from "./RoomMaintenanceContent";

export default function Footer() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const handleOpen = (serviceName) => {
    setActive(serviceName);
    setOpen(true);
  };

  return (
    <>
      <section
        id="contact"
        className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-gray-100 py-16 px-6 mt-10 overflow-hidden scroll-mt-28"
      >
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10">
          {/* Grid Section */}
          <div className="max-w-9xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-white p-2 rounded-xl shadow-lg">
                  <Image
                    src={IMAGES.logo}
                    alt="brand icon"
                    width={40}
                    height={40}
                  />
                </div>
                <Typography
                  variant="brand"
                  className="text-white text-2xl font-bold"
                >
                  {RENTAL}
                </Typography>
              </div>

              <Typography
                variant="paraPrimary"
                className="text-gray-300 leading-relaxed"
              >
                Find the perfect room for your stay — affordable, verified, and
                comfortable living spaces for students, travelers, and
                professionals.
              </Typography>

              <Link href={NAVIGATION_ROUTES.UIPAGE}>
                <Typography variant="buttonHighLight">
                  Explore Rooms →
                </Typography>
              </Link>
            </div>

            {/* Quick Links */}
            <div>
              <div className="mb-6">
                <Typography
                  variant="h4"
                  className="text-white text-lg font-bold mb-1"
                >
                  Quick Links
                </Typography>
                <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>
              <ul className="space-y-3">
                {quickLinks.map(({ name, path }) => (
                  <li key={name}>
                    <Link href={path}>
                      <Typography
                        variant="linkPrimary"
                        className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-flex items-center group"
                      >
                        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          →
                        </span>
                        {name}
                      </Typography>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <div className="mb-6">
                <Typography
                  variant="h4"
                  className="text-white text-lg font-bold mb-1"
                >
                  Our Services
                </Typography>
                <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>
              <ul className="space-y-3">
                {services.map(({ name, path }) => (
                  <li key={name}>
                    {path ? (
                      // If service has path → navigate
                      <Link href={path}>
                        <Typography
                          variant="linkPrimary"
                          className="text-gray-300 hover:text-white transition-all cursor-pointer"
                        >
                          → {name}
                        </Typography>
                      </Link>
                    ) : (
                      // If service has no path → open modal
                      <button
                        onClick={() => handleOpen(name)}
                        className="text-gray-300 hover:text-white transition-all cursor-pointer"
                      >
                        → {name}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <ServiceModal
              open={open}
              onClose={() => setOpen(false)}
              title={
                active === "Room Booking"
                  ? "Room Booking"
                  : active === "Property Listing"
                  ? "Property Listing"
                  : "Room Maintenance"
              }
            >
              {active === "Room Booking" && <RoomBookingContent />}
              {active === "Property Listing" && <PropertyListingContent />}
              {active === "Room Maintenance" && <RoomMaintenanceContent />}
            </ServiceModal>

            {/* Contact */}
            <div>
              <div className="mb-6">
                <Typography
                  variant="h4"
                  className="text-white text-lg font-bold mb-1"
                >
                  Contact Us
                </Typography>
                <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-sm leading-relaxed">{ADDRESS}</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-blue-400 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <a
                    href={`tel:${PHONE_NO}`}
                    className="hover:text-white transition-colors"
                  >
                    {PHONE_NO}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-blue-400 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a
                    href={`mailto:${COMPANY_MAIL}`}
                    className="hover:text-white transition-colors"
                  >
                    {COMPANY_MAIL}
                  </a>
                </li>
              </ul>

              {/* Social Icons */}
              <div className="mt-6">
                <Typography
                  variant="h4"
                  className="text-white text-sm font-semibold mb-3"
                >
                  Follow Us
                </Typography>
                <div className="flex space-x-3">
                  {socials.map(({ icon, url }, index) => (
                    <Link href={url} key={index}>
                      <div className="w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer">
                        <span className="text-white text-lg">{icon}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Bottom Section */}
          <div className="max-w-9xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <Typography
                variant="paraHighLight"
                className="text-gray-400 text-sm"
              >
                © {new Date().getFullYear()} {RENTAL}. All rights reserved. Made
                with ❤️
              </Typography>

              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <Link href={NAVIGATION_ROUTES.PRIVACY_POLICY}>
                  <Typography
                    variant="linkSecondary"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Typography>
                </Link>
                <Link href={NAVIGATION_ROUTES.TERMS_CONDITIONS}>
                  <Typography
                    variant="linkSecondary"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Terms & Conditions
                  </Typography>
                </Link>
                <Link href={NAVIGATION_ROUTES.HELP_CENTER}>
                  <Typography
                    variant="linkSecondary"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Help Center
                  </Typography>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

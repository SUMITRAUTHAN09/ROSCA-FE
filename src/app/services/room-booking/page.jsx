"use client";

import BackArrow from "@/components/custom/back_arrow";
import { Typography } from "@/components/custom/typography";

export default function RoomBooking() {
  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6">
      <BackArrow />
      <div className="max-w-4xl mx-auto">
        <Typography variant="h1" className="mb-6 block">
          Room Booking
        </Typography>

        <Typography variant="paraPrimary" className="block">
          Our Room Booking service helps tenants quickly find, explore, and
          reserve rooms based on their preferences such as location, rent,
          amenities, and availability. The process is seamless, transparent, and
          user-friendly.
        </Typography>

        <div className="mt-10 space-y-6">
          <Typography variant="h2" className="block">
            How It Works
          </Typography>

          <Typography variant="body">
            1. Browse available rooms across different locations.
            <br />
            2. View room details including rent, facilities, photos, and owner
            information.
            <br />
            3. Select your preferred room and book instantly.
            <br />
            4. Receive confirmation and connect with the property owner.
          </Typography>

          <Typography variant="h2" className="block">
            Why Choose Our Booking System?
          </Typography>

          <Typography variant="body">
            Our system provides real-time updates, accurate pricing, verified
            listings, and a hassle-free booking experience that saves you time
            and effort.
          </Typography>
        </div>
      </div>
    </section>
  );
}

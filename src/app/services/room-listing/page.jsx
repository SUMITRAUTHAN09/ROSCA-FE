"use client";

import BackArrow from "@/components/custom/back_arrow";
import { Typography } from "@/components/custom/typography";

export default function PropertyListing() {
  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6">
      <BackArrow />
      <div className="max-w-4xl mx-auto">
        <Typography variant="h1" className="mb-6 block">
          Property Listing
        </Typography>

        <Typography variant="paraPrimary" className="block">
          Our Property Listing service allows owners to list their rooms, PGs,
          flats, or houses with complete details, enabling potential tenants to
          discover and contact them easily.
        </Typography>

        <div className="mt-10 space-y-6">
          <Typography variant="h2" className="block">
            Steps to List a Property
          </Typography>

          <Typography variant="body">
            1. Register or log in to your account.
            <br />
            2. Add property details such as rent, location, room type, and
            amenities.
            <br />
            3. Upload high-quality photos and optional video walkthroughs.
            <br />
            4. Submit the listing for verification.
            <br />
            5. Your property becomes visible to thousands of tenants.
          </Typography>

          <Typography variant="h2" className="block">
            Benefits for Property Owners
          </Typography>

          <Typography variant="body">
            Owners receive higher visibility, trustworthy tenants, faster
            occupancy, and an easy management dashboard to edit or update
            listings anytime.
          </Typography>
        </div>
      </div>
    </section>
  );
}

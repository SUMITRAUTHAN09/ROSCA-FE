"use client";

import BackArrow from "@/components/custom/back_arrow";
import { Typography } from "@/components/custom/typography";

export default function RoomMaintenance() {
  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6">
      <BackArrow />
      <div className="max-w-4xl mx-auto">
        <Typography variant="h1" className="mb-6 block">
          Room Maintenance
        </Typography>

        <Typography variant="paraPrimary">
          Our Room Maintenance service ensures that tenants have access to quick
          and reliable support for repairs, cleaning, and essential maintenance
          tasks.
        </Typography>

        <div className="mt-10 space-y-6">
          <Typography variant="h2" className="block">
            Maintenance Support We Provide
          </Typography>

          <Typography variant="body">
            • Electrical repairs
            <br />
            • Plumbing and water supply issues
            <br />
            • Room cleaning and sanitization
            <br />
            • Furniture repair and fixture replacement
            <br />• Regular safety checks
          </Typography>

          <Typography variant="h2" className="block">
            How to Request Maintenance?
          </Typography>

          <Typography variant="body">
            Tenants can raise a maintenance request through their dashboard. Our
            team assigns the nearest available service provider and ensures
            timely resolution.
          </Typography>
        </div>
      </div>
    </section>
  );
}

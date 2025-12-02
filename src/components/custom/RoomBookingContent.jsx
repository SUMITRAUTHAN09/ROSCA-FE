import { Typography } from "../custom/typography";

export default function RoomBookingContent() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white/40 backdrop-blur-xl shadow-xl p-10 rounded-3xl border border-white/30">
        <Typography
          variant="paraPrimary"
          className="block text-gray-700 text-center max-w-3xl mx-auto"
        >
          Our room booking service makes it easy for tenants to explore verified
          rooms based on budget, location, and amenities — all through a
          seamless and transparent process.
        </Typography>

        {/* Steps */}
        <div className="mt-12 space-y-8">
          <Typography variant="h2" className="text-gray-900">
            How It Works
          </Typography>

          <div className="space-y-4 text-gray-700">
            <Typography variant="paraSecondary" className="block">
              1. Browse available rooms across multiple verified locations.
            </Typography>
            <Typography variant="paraSecondary" className="block">
              2. Check room details like rent, facilities, photos, and owner
              info.
            </Typography>
            <Typography variant="paraSecondary" className="block">
              3. Choose your preferred room and book instantly.
            </Typography>
            <Typography variant="paraSecondary" className="block">
              4. Get confirmation and directly connect with the property owner.
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Typography } from "../custom/typography";

export default function RoomMaintenanceContent() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white/40 backdrop-blur-xl shadow-xl p-10 rounded-3xl border border-white/30">
        <Typography variant="h1" className="block mb-6 text-center">
          Complaint Management
        </Typography>

        <Typography
          variant="paraPrimary"
          className="block text-gray-700 text-center max-w-3xl mx-auto"
        >
          We provide a fast and responsive complaint management system so
          tenants can report issues and receive timely assistance.
        </Typography>

        <div className="mt-12 space-y-8">
          <Typography variant="h2" className="text-gray-900">
            How It Works
          </Typography>

          <div className="space-y-4 text-gray-700">
            <Typography variant="paraSecondary" className="block">
              1. Submit complaints related to room issues or owner behavior.
            </Typography>
            <Typography variant="paraSecondary" className="block">
              2. Our support team reviews and assigns cases instantly.
            </Typography>
            <Typography variant="paraSecondary" className="block">
              3. Communication is established between tenant and owner.
            </Typography>
            <Typography variant="paraSecondary" className="block">
              4. Issues are resolved with transparency and follow-ups.
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
}

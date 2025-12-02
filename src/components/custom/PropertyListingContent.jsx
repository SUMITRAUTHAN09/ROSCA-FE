import { Typography } from "../custom/typography";

export default function PropertyListingContent() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white/40 backdrop-blur-xl shadow-xl p-10 rounded-3xl border border-white/30">
        <Typography variant="h1" className="block mb-6 text-center">
          Room Verification
        </Typography>

        <Typography
          variant="paraPrimary"
          className="block text-gray-700 text-center max-w-3xl mx-auto"
        >
          Our verification team ensures every listed property is authentic,
          safe, and meets quality standards before making it available for
          tenants.
        </Typography>

        <div className="mt-12 space-y-8">
          <Typography variant="h2" className="text-gray-900 block">
            Verification Process
          </Typography>

          <div className="space-y-4 text-gray-700">
            <Typography variant="paraSecondary" className="block">
              1. Property inspection by trained professionals.
            </Typography>
            <Typography variant="paraSecondary" className="block">
              2. Verification of legal documents & ownership.
            </Typography>
            <Typography variant="paraSecondary" className="block">
              3. Photos, amenities, and room conditions validated.
            </Typography>
            <Typography variant="paraSecondary" className="block">
              4. Property is approved and listed for tenants.
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
}

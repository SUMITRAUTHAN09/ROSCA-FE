"use client";

import { ADDRESS, COMPANY_MAIL, PHONE_NO } from "@/app/constant";
import BackArrow from "@/components/custom/back_arrow";

import { Typography } from "@/components/custom/typography";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-6">
      <BackArrow />
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-10">
        <div className="text-center mb-12">
          <Typography variant="h1" className="block">
            Privacy Policy
          </Typography>

          <Typography variant="paraPrimary" className="text-gray-600">
            Last Updated:{" "}
            <strong>
              {new Date().toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </strong>
          </Typography>
        </div>

        {/* Introduction */}
        <section className="mb-8">
          <Typography
            variant="paraPrimary"
            className="text-gray-700 leading-relaxed"
          >
            At RentalRooms, we respect your privacy and are committed to
            protecting your personal information. This Privacy Policy explains
            how we collect, use, disclose, and safeguard your information when
            you use our platform.
          </Typography>
        </section>

        {/* Information We Collect */}
        <section className="mb-8">
          <Typography
            variant="h2"
            className="text-2xl font-bold text-gray-900 mb-4"
          >
            1. Information We Collect
          </Typography>

          <div className="ml-4 space-y-4">
            <div>
              <Typography
                variant="h3"
                className="text-xl font-semibold text-gray-800 mb-2"
              >
                Personal Information
              </Typography>

              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>Name, email address, and phone number</li>
                <li>Profile picture and user preferences</li>
                <li>
                  Payment information (processed securely through third-party
                  providers)
                </li>
                <li>Government-issued ID for verification (if applicable)</li>
              </ul>
            </div>

            <div>
              <Typography
                variant="h3"
                className="text-xl font-semibold text-gray-800 mb-2"
              >
                Property Information
              </Typography>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>Property details, photos, and descriptions</li>
                <li>Location and pricing information</li>
                <li>Availability and booking details</li>
              </ul>
            </div>

            <div>
              <Typography
                variant="h3"
                className="text-xl font-semibold text-gray-800 mb-2"
              >
                Usage Information
              </Typography>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>IP address, browser type, and device information</li>
                <li>Pages visited and features used</li>
                <li>Search queries and preferences</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How We Use Your Information */}
        <section className="mb-8">
          <Typography
            variant="h2"
            className="text-2xl font-bold text-gray-900 mb-4"
          >
            2. How We Use Your Information
          </Typography>

          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>To provide and maintain our services</li>
            <li>To process bookings and transactions</li>
            <li>
              To communicate with you about bookings, updates, and promotions
            </li>
            <li>To verify user identities and prevent fraud</li>
            <li>To improve our platform and user experience</li>
            <li>To comply with legal obligations</li>
            <li>To send you marketing communications (with your consent)</li>
          </ul>
        </section>

        {/* Information Sharing */}
        <section className="mb-8">
          <Typography
            variant="h2"
            className="text-2xl font-bold text-gray-900 mb-4"
          >
            3. Information Sharing and Disclosure
          </Typography>

          <Typography variant="paraPrimary" className="text-gray-700 mb-3">
            We may share your information with:
          </Typography>

          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>
              <strong>Property Owners/Tenants:</strong> To facilitate bookings
              and communication
            </li>
            <li>
              <strong>Service Providers:</strong> Payment processors, hosting,
              analytics
            </li>
            <li>
              <strong>Legal Requirements:</strong> When required by law
            </li>
            <li>
              <strong>Business Transfers:</strong> During mergers or
              acquisitions
            </li>
          </ul>

          <Typography variant="paraPrimary" className="text-gray-700 mt-3">
            <strong>
              We do not sell your personal information to third parties.
            </strong>
          </Typography>
        </section>

        {/* Data Security */}
        <section className="mb-8">
          <Typography
            variant="h2"
            className="text-2xl font-bold text-gray-900 mb-4"
          >
            4. Data Security
          </Typography>

          <Typography
            variant="paraPrimary"
            className="text-gray-700 leading-relaxed"
          >
            We implement appropriate technical and organizational measures to
            protect your personal information from unauthorized access,
            disclosure, alteration, or destruction. However, no method of online
            transmission is 100% secure.
          </Typography>
        </section>

        {/* Your Rights */}
        <section className="mb-8">
          <Typography
            variant="h2"
            className="text-2xl font-bold text-gray-900 mb-4"
          >
            5. Your Rights and Choices
          </Typography>

          <Typography variant="paraPrimary" className="text-gray-700 mb-3">
            You have the right to:
          </Typography>

          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Access and update your information</li>
            <li>Delete your account</li>
            <li>Opt-out of marketing</li>
            <li>Request a copy of your data</li>
            <li>Object to processing</li>
            <li>Withdraw consent</li>
          </ul>

          <Typography variant="paraPrimary" className="text-gray-700 mt-3">
            To exercise these rights, contact us at{" "}
            <strong>privacy@rentalrooms.com</strong>
          </Typography>
        </section>

        {/* Cookies */}
        <section className="mb-8">
          <Typography
            variant="h2"
            className="text-2xl font-bold text-gray-900 mb-4"
          >
            6. Cookies and Tracking
          </Typography>

          <Typography
            variant="paraPrimary"
            className="text-gray-700 leading-relaxed mb-3"
          >
            We use cookies to enhance your experience, analyze usage, and
            deliver personalized content.
          </Typography>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <Typography variant="paraPrimary" className="text-sm text-gray-700">
              <strong>Types of cookies:</strong> Essential, Functional,
              Analytics, Marketing
            </Typography>
          </div>
        </section>

        {/* Children's Privacy */}
        <section className="mb-8">
          <Typography
            variant="h2"
            className="text-2xl font-bold text-gray-900 mb-4"
          >
            7. Children's Privacy
          </Typography>

          <Typography
            variant="paraPrimary"
            className="text-gray-700 leading-relaxed"
          >
            Our services are not intended for users under 18. If we unknowingly
            collect such data, please contact us immediately.
          </Typography>
        </section>

        {/* International Transfers */}
        <section className="mb-8">
          <Typography
            variant="h2"
            className="text-2xl font-bold text-gray-900 mb-4"
          >
            8. International Data Transfers
          </Typography>

          <Typography
            variant="paraPrimary"
            className="text-gray-700 leading-relaxed"
          >
            Your data may be processed in countries outside your own. We ensure
            proper safeguards.
          </Typography>
        </section>

        {/* Changes to Policy */}
        <section className="mb-8">
          <Typography
            variant="h2"
            className="text-2xl font-bold text-gray-900 mb-4"
          >
            9. Changes to This Privacy Policy
          </Typography>

          <Typography
            variant="paraPrimary"
            className="text-gray-700 leading-relaxed"
          >
            We may update this Privacy Policy occasionally. Continued use of our
            platform means you accept the updated terms.
          </Typography>
        </section>

        {/* Contact */}
        <section className="mb-8">
          <Typography
            variant="h2"
            className="text-2xl font-bold text-gray-900 mb-4"
          >
            10. Contact Us
          </Typography>

          <Typography
            variant="paraPrimary"
            className="text-gray-700 leading-relaxed mb-3"
          >
            For questions regarding this Privacy Policy, contact us:
          </Typography>

          <div className="bg-gray-50 p-6 rounded-lg">
            <Typography variant="paraPrimary" className="text-gray-700 block">
              <strong>Email:</strong> {COMPANY_MAIL}
            </Typography>

            <Typography variant="paraPrimary" className="text-gray-700 block">
              <strong>Phone:</strong> {PHONE_NO}
            </Typography>

            <Typography variant="paraPrimary" className="text-gray-700 block">
              <strong>Address:</strong> {ADDRESS}
            </Typography>
          </div>
        </section>

        {/* Back Button 
      <div className="text-center mt-12">
        <button
          onClick={() => window.history.back()}
          className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition font-semibold"
        >
          ← Back to Home
        </button>
      </div> */}
      </div>
    </div>
  );
}

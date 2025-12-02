"use client";

import { ADDRESS, COMPANY_MAIL, PHONE_NO } from "@/app/constant";
import BackArrow from "@/components/custom/back_arrow";
import { Typography } from "@/components/custom/typography";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-16 px-6">
      <BackArrow />
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-10">
        {/* Header */}
        <div className="text-center mb-12">
          <Typography variant="h1" as="h1" className="mb-4">
            Terms & Conditions
          </Typography>

          <Typography variant="paraPrimary">
            Last Updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </Typography>
        </div>

        {/* Introduction */}
        <section className="mb-8">
          <Typography variant="paraPrimary">
            Welcome to RentalRooms! These Terms and Conditions ("Terms") govern
            your use of our website and services. By accessing or using
            RentalRooms, you agree to be bound by these Terms. If you do not
            agree, please do not use our platform.
          </Typography>
        </section>

        {/* Definitions */}
        <section className="mb-8">
          <Typography variant="h2" as="h2">
            1. Definitions
          </Typography>

          <ul className="space-y-2 text-gray-700">
            <li>
              <strong>"Platform"</strong> refers to the RentalRooms website and
              mobile applications
            </li>
            <li>
              <strong>"User"</strong> refers to anyone who accesses or uses our
              Platform
            </li>
            <li>
              <strong>"Host"</strong> refers to property owners who list rooms
              on our Platform
            </li>
            <li>
              <strong>"Guest"</strong> refers to users who book accommodations
              through our Platform
            </li>
            <li>
              <strong>"Listing"</strong> refers to a property or room advertised
              on our Platform
            </li>
          </ul>
        </section>

        {/* Eligibility */}
        <section className="mb-8">
          <Typography variant="h2" as="h2">
            2. Eligibility
          </Typography>

          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>You must be at least 18 years old to use our services</li>
            <li>You must provide accurate and complete information</li>
            <li>You must not have been previously banned from our Platform</li>
            <li>You must comply with all applicable laws and regulations</li>
          </ul>
        </section>

        {/* User Accounts */}
        <section className="mb-8">
          <Typography variant="h2" as="h2">
            3. User Accounts
          </Typography>

          <div className="space-y-4">
            <div>
              <Typography variant="h3" as="h3" className="mb-2">
                Account Registration
              </Typography>

              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>
                  You are responsible for maintaining the confidentiality of
                  your account credentials
                </li>
                <li>
                  You must notify us immediately of any unauthorized access
                </li>
                <li>
                  You are responsible for all activities under your account
                </li>
                <li>One person or entity may maintain only one account</li>
              </ul>
            </div>

            <div>
              <Typography variant="h3" as="h3" className="mb-2">
                Account Termination
              </Typography>

              <Typography variant="paraPrimary">
                We reserve the right to suspend or terminate your account if you
                violate these Terms, engage in fraudulent activities, or for any
                other reason at our discretion.
              </Typography>
            </div>
          </div>
        </section>

        {/* For Hosts */}
        <section className="mb-8">
          <Typography variant="h2" as="h2">
            4. For Hosts (Property Owners)
          </Typography>

          <div className="space-y-4">
            <div>
              <Typography variant="h3" as="h3" className="mb-2">
                Listing Requirements
              </Typography>

              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>You must have legal authority to list the property</li>
                <li>
                  All information must be accurate, complete, and up-to-date
                </li>
                <li>Photos must accurately represent the property</li>
                <li>You must comply with all local laws and regulations</li>
                <li>
                  You must disclose any safety hazards or property limitations
                </li>
              </ul>
            </div>

            <div>
              <Typography variant="h3" as="h3" className="mb-2">
                Host Responsibilities
              </Typography>

              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>Respond to inquiries and booking requests promptly</li>
                <li>
                  Honor confirmed bookings unless exceptional circumstances
                  exist
                </li>
                <li>Maintain the property in good condition</li>
                <li>Provide accurate availability information</li>
                <li>Comply with anti-discrimination laws</li>
              </ul>
            </div>

            <div>
              <Typography variant="h3" as="h3" className="mb-2">
                Pricing and Fees
              </Typography>

              <Typography variant="paraPrimary" className="mb-2">
                Hosts set their own prices. RentalRooms may charge a service fee
                for each booking:
              </Typography>

              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>
                  Host service fee: Typically 3–5% of the booking subtotal
                </li>
                <li>Fees are deducted from your payout</li>
                <li>Taxes may apply based on your location</li>
              </ul>
            </div>
          </div>
        </section>

        {/* For Guests */}
        <section className="mb-8">
          <Typography variant="h2" as="h2">
            5. For Guests (Renters)
          </Typography>

          <div className="space-y-4">
            <div>
              <Typography variant="h3" as="h3" className="mb-2">
                Booking and Payment
              </Typography>

              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>All bookings are subject to Host approval</li>
                <li>Payment is processed through our secure system</li>
                <li>You must pay the full amount at the time of booking</li>
                <li>Guest service fee: Typically 10–15% of subtotal</li>
              </ul>
            </div>

            <div>
              <Typography variant="h3" as="h3" className="mb-2">
                Guest Responsibilities
              </Typography>

              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>Treat the property with respect and care</li>
                <li>Follow all house rules set by the Host</li>
                <li>Leave the property in the same condition</li>
                <li>Report damages immediately</li>
                <li>Do not exceed maximum occupancy</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Cancellation Policy */}
        <section className="mb-8">
          <Typography variant="h2" as="h2">
            6. Cancellation and Refund Policy
          </Typography>

          <div className="space-y-4">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
              <Typography variant="h3" as="h3" className="mb-2">
                Flexible Cancellation
              </Typography>

              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Full refund if cancelled 24 hours before check-in</li>
                <li>• 50% refund if cancelled within 24 hours</li>
                <li>• No refund after check-in</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
              <Typography variant="h3" as="h3" className="mb-2">
                Moderate Cancellation
              </Typography>

              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Full refund if cancelled 5 days before check-in</li>
                <li>• 50% refund if within 5 days</li>
                <li>• No refund after check-in</li>
              </ul>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
              <Typography variant="h3" as="h3" className="mb-2">
                Strict Cancellation
              </Typography>

              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Full refund if cancelled 14 days before</li>
                <li>• 50% refund if 7–14 days before</li>
                <li>• No refund within 7 days</li>
              </ul>
            </div>

            <Typography variant="paraPrimary">
              <strong>Note:</strong> Service fees are non-refundable except in
              cases of Host cancellation or property misrepresentation.
            </Typography>
          </div>
        </section>

        {/* Prohibited Activities */}
        <section className="mb-8">
          <Typography variant="h2" as="h2">
            7. Prohibited Activities
          </Typography>

          <Typography variant="paraPrimary" className="mb-3">
            You may not:
          </Typography>

          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Violate any laws or regulations</li>
            <li>Infringe on intellectual property rights</li>
            <li>Post false or misleading content</li>
            <li>Harass or discriminate against others</li>
            <li>Use the Platform for solicitation</li>
            <li>Attempt to evade our fees</li>
            <li>Scrape or copy Platform content</li>
            <li>Interfere with system operations</li>
            <li>Create multiple accounts to manipulate reviews</li>
          </ul>
        </section>

        {/* Liability */}
        <section className="mb-8">
          <Typography variant="h2" as="h2">
            8. Limitation of Liability
          </Typography>

          <div className="bg-gray-50 p-6 rounded-lg">
            <Typography variant="paraPrimary" className="mb-3">
              RentalRooms acts as an intermediary platform connecting Hosts and
              Guests. We are not responsible for:
            </Typography>

            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>The condition, safety, or legality of properties</li>
              <li>Accuracy of listings or user-provided details</li>
              <li>Conduct of Hosts or Guests</li>
              <li>Property damage, injury, or loss</li>
              <li>Disputes between Hosts and Guests</li>
            </ul>

            <Typography variant="paraPrimary" className="mt-4 font-semibold">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR TOTAL LIABILITY SHALL
              NOT EXCEED THE BOOKING AMOUNT PAID.
            </Typography>
          </div>
        </section>

        {/* Indemnification */}
        <section className="mb-8">
          <Typography variant="h2" as="h2">
            9. Indemnification
          </Typography>

          <Typography variant="paraPrimary">
            You agree to indemnify and hold harmless RentalRooms, its officers,
            directors, employees, and agents from any claims, damages, losses,
            liabilities, or expenses arising from your use of the Platform or
            violation of these Terms.
          </Typography>
        </section>

        {/* Dispute Resolution */}
        <section className="mb-8">
          <Typography variant="h2" as="h2">
            10. Dispute Resolution
          </Typography>

          <div className="space-y-3">
            <Typography variant="paraPrimary">
              In case of disputes, users should communicate directly. If
              unresolved:
            </Typography>

            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Contact our support team</li>
              <li>Disputes resolved via binding arbitration</li>
              <li>Governing law: India</li>
              <li>Jurisdiction: Bangalore courts</li>
            </ul>
          </div>
        </section>

        {/* Intellectual Property */}
        <section className="mb-8">
          <Typography variant="h2" as="h2">
            11. Intellectual Property
          </Typography>

          <Typography variant="paraPrimary">
            All content including logos, text, graphics, and software is the
            property of RentalRooms. You may not:
          </Typography>

          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Copy, modify, or distribute content</li>
            <li>Use trademarks or branding</li>
            <li>Reverse engineer any part of the Platform</li>
          </ul>
        </section>

        {/* Changes to Terms */}
        <section className="mb-8">
          <Typography variant="h2" as="h2">
            12. Changes to Terms
          </Typography>

          <Typography variant="paraPrimary">
            We may modify these Terms at any time. Significant changes will be
            communicated via email or Platform notifications.
          </Typography>
        </section>

        {/* Contact */}
        <section className="mb-8">
          <Typography variant="h2" as="h2">
            13. Contact Information
          </Typography>

          <Typography variant="paraSecondary" className="block">
            For questions regarding these Terms:
          </Typography>

          <div className="bg-gray-50 p-6 rounded-lg">
            <Typography variant="paraPrimary" className="block">
              <strong>Email:</strong> {COMPANY_MAIL}
            </Typography>

            <Typography variant="paraPrimary" className="block">
              <strong>Phone:</strong> {PHONE_NO}
            </Typography>

            <Typography variant="paraPrimary">
              <strong>Address:</strong> {ADDRESS}
            </Typography>
          </div>
        </section>

        {/* Acceptance */}
        <div className="bg-blue-50 border-2 border-blue-500 p-6 rounded-lg mb-8">
          <Typography variant="paraSecondary">
            By using RentalRooms, you confirm that you have read, understood,
            and agree to these Terms & Conditions.
          </Typography>
        </div>
        {/* Back Button 
        <div className="text-center mt-12">
          <button
            onClick={() => window.history.back()}
            className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition font-semibold"
          >
            ← Back to Home
          </button>
        </div>*/}
      </div>
    </div>
  );
}

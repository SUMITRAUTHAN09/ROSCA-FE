"use client";
import { COMPANY_MAIL, PHONE_NO } from "@/app/constant";
import BackArrow from "@/components/custom/back_arrow";
import { Typography } from "@/components/custom/typography";
import Link from "next/link";
import { useState } from "react";
export default function HelpCenter() {
  const [activeCategory, setActiveCategory] = useState("getting-started");
  const [searchQuery, setSearchQuery] = useState("");
  const [openFAQ, setOpenFAQ] = useState(null);

  const categories = [
    { id: "getting-started", name: "Getting Started", icon: "🚀" },
    { id: "booking", name: "Booking & Payments", icon: "💳" },
    { id: "hosting", name: "For Hosts", icon: "🏠" },
    { id: "account", name: "Account Management", icon: "👤" },
    { id: "safety", name: "Safety & Trust", icon: "🛡️" },
    { id: "technical", name: "Technical Support", icon: "⚙️" },
  ];

  const faqs = {
    "getting-started": [
      {
        q: "How do I create an account?",
        a: 'Click the "Sign Up" button in the top right corner. You can register using your email address or sign up with Google. Fill in your name, email, password, and agree to our Terms & Conditions. You\'ll receive a verification email to activate your account.',
      },
      {
        q: "How do I search for rooms?",
        a: "Use the search bar on the homepage to enter your desired location. You can filter results by price range, room type (single, double, shared), amenities (WiFi, AC, parking), and availability dates. Click on any listing to view full details.",
      },
      {
        q: "Is RentalRooms free to use?",
        a: "Creating an account and browsing listings is completely free. We charge a small service fee (10-15%) when you complete a booking. Hosts also pay a 3-5% service fee on confirmed bookings.",
      },
      {
        q: "What areas do you cover?",
        a: "We currently operate in major cities across India including Bangalore, Delhi, Mumbai, Hyderabad, Pune, and Chennai. We're constantly expanding to new locations based on demand.",
      },
    ],
    booking: [
      {
        q: "How do I book a room?",
        a: 'Find a room you like, select your check-in and check-out dates, review the total price (including fees), and click "Book Now". You\'ll need to provide payment information and may need to send a message to the host. Once the host confirms, your booking is complete.',
      },
      {
        q: "What payment methods are accepted?",
        a: "We accept credit cards (Visa, Mastercard, American Express), debit cards, UPI, net banking, and digital wallets like Paytm and Google Pay. All payments are processed securely through our encrypted payment gateway.",
      },
      {
        q: "When will I be charged?",
        a: "Your payment method is charged immediately upon booking confirmation. For long-term stays (30+ days), you may be charged monthly. Security deposits, if required, are held separately and refunded after checkout.",
      },
      {
        q: "What is the cancellation policy?",
        a: "Cancellation policies vary by listing: Flexible (cancel 24 hours before for full refund), Moderate (cancel 5 days before), or Strict (cancel 14 days before). Check the specific policy on each listing before booking. Service fees are generally non-refundable.",
      },
      {
        q: "Can I get a refund?",
        a: "Refunds depend on the cancellation policy and timing. If you cancel within the policy window, you'll receive a refund to your original payment method within 5-10 business days. In cases of property misrepresentation or host cancellation, full refunds are provided.",
      },
      {
        q: "What if the property doesn't match the listing?",
        a: "Contact us immediately if the property significantly differs from the listing. We may offer a full refund, help you find alternative accommodation, or mediate with the host. Take photos as evidence and report within 24 hours of check-in.",
      },
    ],
    hosting: [
      {
        q: "How do I list my property?",
        a: 'Click "Add New Property" from your profile. Provide details like location, room type, pricing, amenities, and upload high-quality photos. Write a clear description and set your house rules. Once submitted, our team reviews it (usually within 24 hours) before it goes live.',
      },
      {
        q: "What photos should I upload?",
        a: "Upload at least 5-10 clear, well-lit photos showing: bedroom, bathroom, common areas, kitchen (if accessible), and any special features. Include close-ups of amenities. Avoid filters and ensure photos accurately represent your space.",
      },
      {
        q: "How do I set my pricing?",
        a: "Research similar properties in your area to set competitive prices. Consider location, amenities, room size, and season. You can set monthly rates, offer discounts for long-term stays, and adjust prices based on demand.",
      },
      {
        q: "What fees do hosts pay?",
        a: "We charge a 3-5% service fee on each confirmed booking, deducted from your payout. There are no upfront costs or monthly fees. You only pay when you earn.",
      },
      {
        q: "When and how do I get paid?",
        a: "Payments are released 24 hours after the guest checks in. Funds are transferred to your registered bank account or UPI. You can track all earnings in your dashboard. Monthly bookings are paid monthly.",
      },
      {
        q: "Can I cancel a confirmed booking?",
        a: "Host cancellations should be rare and only for emergencies. Frequent cancellations may result in penalties, lower search ranking, or account suspension. If you must cancel, contact support immediately to minimize guest inconvenience.",
      },
    ],
    account: [
      {
        q: "How do I update my profile?",
        a: "Go to Settings > Profile from your dashboard. You can update your name, photo, phone number, bio, and verification documents. Changes to email require verification. Keep your profile complete for better trust.",
      },
      {
        q: "I forgot my password. What should I do?",
        a: "Click \"Forgot Password\" on the login page, enter your registered email, and we'll send a password reset link. The link is valid for 1 hour. If you don't receive it, check your spam folder or contact support.",
      },
      {
        q: "How do I verify my account?",
        a: "Verify your email by clicking the link sent during registration. For enhanced trust, upload a government ID (Aadhaar, PAN, Passport) and complete phone verification. Verified users have higher booking success rates.",
      },
      {
        q: "Can I delete my account?",
        a: "Yes, go to Settings > Account > Delete Account. Note that this action is permanent and deletes all your data, listings, and booking history. Complete or cancel all active bookings first. You can reactivate within 30 days by logging in.",
      },
      {
        q: "How do I change my notification preferences?",
        a: "Go to Settings > Notifications. You can control email, SMS, and push notifications for bookings, messages, promotions, and updates. We always send critical notifications about confirmed bookings and cancellations.",
      },
    ],
    safety: [
      {
        q: "How does RentalRooms ensure safety?",
        a: "We verify all users through email and phone. Hosts must provide property documents. Our secure payment system protects financial information. We encourage reviews and ratings for transparency. Report any suspicious activity immediately.",
      },
      {
        q: "What should I do if I feel unsafe?",
        a: "Contact local authorities first if there's immediate danger. Then report the issue to our 24/7 safety team at safety@rentalrooms.com or call +91 9876543210. We take all safety concerns seriously and will investigate promptly.",
      },
      {
        q: "How do I report a problem?",
        a: 'Use the "Report" button on any listing or user profile. Or contact support with details, photos, and evidence. We investigate all reports within 24 hours and take appropriate action including warnings, suspensions, or bans.',
      },
      {
        q: "Are background checks performed?",
        a: "We verify identity documents and contact information. However, we don't perform criminal background checks. Exercise caution, meet in public places initially, trust your instincts, and report suspicious behavior.",
      },
      {
        q: "What if there's damage to the property?",
        a: "Guests are responsible for damages beyond normal wear and tear. Hosts should document property condition before and after stays. Report damages within 48 hours with photos. We may hold security deposits to cover costs.",
      },
    ],
    technical: [
      {
        q: "The website isn't loading properly",
        a: "Try clearing your browser cache and cookies, use a different browser (Chrome, Firefox, Safari), check your internet connection, disable browser extensions, or update your browser. If problems persist, contact support with browser details and screenshots.",
      },
      {
        q: "I can't upload photos",
        a: "Ensure photos are in JPG, PNG, or JPEG format, under 5MB each, and you're uploading maximum 10 photos at once. Try resizing large images, use a stable internet connection, or try a different device. Supported dimensions: 800x600px minimum.",
      },
      {
        q: "Payment failed. What should I do?",
        a: "Verify your payment details are correct, ensure sufficient funds/credit limit, check if your bank allows online transactions, try a different payment method, or wait a few minutes and retry. Contact your bank if issues persist.",
      },
      {
        q: "I'm not receiving emails",
        a: "Check your spam/junk folder, add noreply@rentalrooms.com to your contacts, verify your email address in account settings, check email filters, or try adding an alternative email address.",
      },
      {
        q: "How do I use the mobile app?",
        a: "Download the RentalRooms app from Google Play Store or Apple App Store. Log in with your existing credentials. The app offers all website features plus push notifications, offline saved searches, and easier photo uploads. Enable location services for better search results.",
      },
    ],
  };

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const filteredFAQs = searchQuery
    ? Object.values(faqs)
        .flat()
        .filter(
          (faq) =>
            faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.a.toLowerCase().includes(searchQuery.toLowerCase())
        )
    : faqs[activeCategory];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-16 px-6">
      <BackArrow />
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Typography variant="h2" className="block">
            How Can We Help You? 🤝
          </Typography>
          <Typography variant="paraSecondary">
            Find answers to common questions or contact our support team
          </Typography>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative mt-5">
            <input
              type="text"
              placeholder="Search for help..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 pl-12 border-2 border-gray-300 rounded-full focus:outline-none focus:border-indigo-500 shadow-lg"
            />
            <span className="absolute left-4 top-5 text-2xl">🔍</span>
          </div>
        </div>

        {/* Quick Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
            <div className="text-4xl mb-3">📧</div>
            <Typography variant="h4" className="block">
              {" "}
              Email Support
            </Typography>
            <Typography
              variant="paraSecondary"
              className="block mx-auto text-center"
            >
              Get help via email
            </Typography>
            <a
              href="mailto:support@rentalrooms.com"
              className="text-indigo-600 font-semibold hover:underline"
            >
              {COMPANY_MAIL}
            </a>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
            <div className="text-4xl mb-3">📞</div>
            <Typography variant="h4" className="block">
              Phone Support
            </Typography>
            <Typography
              variant="paraPrimary"
              className="block mx-auto text-center"
            >
              Call us anytime
            </Typography>
            <a
              href={PHONE_NO}
              className="text-indigo-600 font-semibold hover:underline"
            >
              {PHONE_NO}
            </a>
            <p className="text-xs text-gray-500 mt-2">Available 24/7</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
            <div className="text-4xl mb-3">💬</div>

            <Typography variant="h4" className="block">
              Live Chat
            </Typography>

            <Typography
              variant="paraPrimary"
              className="block mx-auto text-center mb-4"
            >
              Chat with an agent
            </Typography>

            <Link href="/ChatBOOT">
              <Typography variant="buttonPrimary" className="cursor-pointer">
                Start Chat
              </Typography>
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Categories */}
          {!searchQuery && (
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-6">
                <Typography variant="h3">Categories</Typography>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition flex items-center gap-3 ${
                        activeCategory === cat.id
                          ? "bg-indigo-100 text-indigo-700 font-semibold"
                          : "hover:bg-gray-100 text-gray-700"
                      }`}
                    >
                      <span className="text-2xl">{cat.icon}</span>
                      <span>{cat.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* FAQ Section */}
          <div className={searchQuery ? "lg:col-span-4" : "lg:col-span-3"}>
            <div className="bg-white rounded-xl shadow-md p-8">
              <Typography variant="h2">
                {searchQuery
                  ? "Search Results"
                  : categories.find((c) => c.id === activeCategory)?.name}
              </Typography>

              {filteredFAQs && filteredFAQs.length > 0 ? (
                <div className="space-y-4">
                  {filteredFAQs.map((faq, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full text-left px-6 py-4 bg-gray-50 hover:bg-gray-100 transition flex justify-between items-center"
                      >
                        <span className="font-semibold text-gray-900 pr-4">
                          {faq.q}
                        </span>
                        <span className="text-2xl text-indigo-600 flex-shrink-0">
                          {openFAQ === index ? "−" : "+"}
                        </span>
                      </button>

                      {openFAQ === index && (
                        <div className="px-6 py-4 bg-white border-t border-gray-200">
                          <Typography variant="paraSecondary">
                            {faq.a}
                          </Typography>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🔍</div>
                  <Typography variant="paraSecondary">
                    No results found for "{searchQuery}"
                  </Typography>
                  <Typography variant="paraSecondary">
                    Try different keywords or contact support
                  </Typography>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 text-white text-center">
          <Typography variant="h2" className="block">
            Still Need Help?
          </Typography>
          <Typography variant="paraPrimary" className="text-white">
            Our support team is here to assist you 24/7
          </Typography>
          <div className="flex flex-wrap justify-center gap-4 mt-5">
            <button
              onClick={() =>
                (window.location.href = "mailto:support@rentalrooms.com")
              }
              className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              Contact Support
            </button>
            {/* <button
              onClick={() => window.history.back()}
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition"
            >
              Back to Home
            </button>*/}
          </div>
        </div>

        {/* Popular Topics */}
        <div className="mt-12">
          <Typography variant="h4">Popular Topics</Typography>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "🔐", title: "Account Security", link: "#" },
              { icon: "💰", title: "Payment Issues", link: "#" },
              { icon: "📝", title: "Listing Guidelines", link: "#" },
              { icon: "⭐", title: "Review System", link: "#" },
              { icon: "🏡", title: "Property Rules", link: "#" },
              { icon: "🔄", title: "Refund Process", link: "#" },
              { icon: "📸", title: "Photo Tips", link: "#" },
              { icon: "🛡️", title: "Safety Tips", link: "#" },
            ].map((topic, idx) => (
              <button
                key={idx}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition text-center"
              >
                <div className="text-3xl mb-2">{topic.icon}</div>
                <div className="text-sm font-semibold text-gray-800">
                  {topic.title}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms of Service</h1>
            <p className="text-gray-600 mb-8">Last updated: December 2024</p>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  By accessing and using Ting Fix's platform, you accept and agree to be bound by the terms and provision of this agreement. 
                  If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Service Description</h2>
                <p className="text-gray-600 leading-relaxed">
                  Ting Fix is a platform that connects customers with verified service professionals for various home and office services. 
                  We act as an intermediary and do not directly provide the services listed on our platform.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. User Responsibilities</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Provide accurate and truthful information when creating an account</li>
                  <li>Maintain the confidentiality of your account credentials</li>
                  <li>Use the platform in accordance with applicable laws and regulations</li>
                  <li>Treat service professionals and other users with respect</li>
                  <li>Pay for services as agreed upon with the service professional</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Professional Responsibilities</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Provide services professionally and competently</li>
                  <li>Maintain appropriate licenses and certifications</li>
                  <li>Complete background verification process</li>
                  <li>Respect customer property and privacy</li>
                  <li>Follow safety guidelines and best practices</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Payment Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  Payments for services are processed through our secure payment system. Service fees are agreed upon between 
                  customers and professionals. Ting Fix charges a platform fee for facilitating the connection and transaction.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Cancellation and Refunds</h2>
                <p className="text-gray-600 leading-relaxed">
                  Bookings can be cancelled up to 2 hours before the scheduled service time. Refund policies may vary 
                  depending on the timing of cancellation and service type. Please refer to our cancellation policy for detailed terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Limitation of Liability</h2>
                <p className="text-gray-600 leading-relaxed">
                  Ting Fix's liability is limited to the platform fee charged for the service. We are not liable for any 
                  damages arising from the services provided by professionals or any disputes between users and professionals.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Privacy Policy</h2>
                <p className="text-gray-600 leading-relaxed">
                  Your privacy is important to us. Please review our Privacy Policy to understand how we collect, 
                  use, and protect your personal information.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Modifications to Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  Ting Fix reserves the right to modify these terms at any time. Users will be notified of significant 
                  changes via email or platform notifications. Continued use of the platform constitutes acceptance of modified terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Contact Information</h2>
                <p className="text-gray-600 leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at legal@tingfix.com 
                  or call our support line at +91 1800-123-4567.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;

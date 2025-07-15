import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
            <p className="text-gray-600 mb-8">Last updated: December 2024</p>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Information We Collect</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We collect information you provide directly to us, such as when you create an account, book a service, 
                  or contact our support team.
                </p>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Personal Information:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
                  <li>Name, email address, and phone number</li>
                  <li>Address and location information</li>
                  <li>Payment information (processed securely)</li>
                  <li>Profile information and preferences</li>
                </ul>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Usage Information:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Device information and IP addresses</li>
                  <li>App usage patterns and preferences</li>
                  <li>Location data (when permitted)</li>
                  <li>Communication history with professionals</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>To provide, maintain, and improve our services</li>
                  <li>To process transactions and send related information</li>
                  <li>To send technical notices, updates, and support messages</li>
                  <li>To respond to your comments, questions, and customer service requests</li>
                  <li>To communicate with you about products, services, and promotions</li>
                  <li>To monitor and analyze trends, usage, and activities</li>
                  <li>To detect, investigate, and prevent fraudulent transactions</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Information Sharing</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                  except in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>With service professionals to facilitate service delivery</li>
                  <li>With payment processors to complete transactions</li>
                  <li>With service providers who assist in our operations</li>
                  <li>When required by law or to protect our rights</li>
                  <li>In connection with a merger, acquisition, or sale of assets</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Data Security</h2>
                <p className="text-gray-600 leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, 
                  and regular security assessments.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Data Retention</h2>
                <p className="text-gray-600 leading-relaxed">
                  We retain your personal information for as long as necessary to provide our services, comply with legal 
                  obligations, resolve disputes, and enforce our agreements. You may request deletion of your account 
                  and associated data at any time.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Your Rights</h2>
                <p className="text-gray-600 leading-relaxed mb-4">You have the right to:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your personal data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Request data portability</li>
                  <li>Lodge a complaint with supervisory authorities</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Cookies and Tracking</h2>
                <p className="text-gray-600 leading-relaxed">
                  We use cookies and similar tracking technologies to collect and use personal information about you. 
                  You can control cookies through your browser settings, though some features may not function properly 
                  if cookies are disabled.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Children's Privacy</h2>
                <p className="text-gray-600 leading-relaxed">
                  Our services are not intended for children under 18 years of age. We do not knowingly collect personal 
                  information from children under 18. If we learn that we have collected such information, 
                  we will take steps to delete it promptly.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Changes to Privacy Policy</h2>
                <p className="text-gray-600 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
                  the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Contact Us</h2>
                <p className="text-gray-600 leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at privacy@tingfix.com 
                  or write to us at our registered office address.
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

export default PrivacyPolicy;
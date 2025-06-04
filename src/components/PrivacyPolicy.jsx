import React from 'react'
import './PrivacyPolicy.css'
import Topbar from './Topbar'
import FooterOne from './FooterOne'

const PrivacyPolicy = () => {
  return (
    <>
    <Topbar />
    <div className="p-6 md:p-12 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-4 text-center">Privacy Policy</h1>
      <p className="text-sm text-gray-500 text-center mb-4">Effective Date: 27/05/25</p>
      <p className="text-center mb-8">By accessing or using our website and services, you agree to be bound by these terms.</p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
        <p>
          When you submit the contact form on our website, we collect the following data:
        
          <ul className="list-disc ml-6 mt-2">
            <li>Full Name</li>
            <li>Email Address</li>
            <li>WhatsApp Number</li>
            <li>Selected Service</li>
            <li>Description of your requirement</li>
          </ul>
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Refund & Cancellation Policy</h2>
        <p>
          We value your business and strive to provide the best service possible. However, we have a strict refund and cancellation policy:
        
          <ul className="list-disc ml-6 mt-2">
            <li>All payments for consultations or discovery sessions are non-refundable once scheduled.</li>
            <li>Projects cancelled within 3 business days of initiation may be eligible for a partial refund, subject to work already completed.</li>
            <li>Monthly retainer agreements can be cancelled with 15 days’ prior written notice. Fees already paid are non-refundable.</li>
          </ul>
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
        <p>
          Your data is used for:
          <ul className="list-disc ml-6 mt-2">
            <li>Responding to your inquiries or requests</li>
            <li>Providing relevant service information</li>
            <li>Improving customer support and offerings</li>
          </ul>
          <p className="mt-2">We do <strong>not</strong> sell, rent, or trade your personal data.</p>
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Data Storage & Security</h2>
        <p>
          We use <strong>Google Firebase Firestore</strong> to securely store your form submissions.
          Firebase is a secure, GDPR-compliant platform and encrypts data both in transit and at rest.
          While we take reasonable precautions, no method of transmission over the internet is 100% secure.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Your Rights</h2>
        <p>
          You have the right to:
          <ul className="list-disc ml-6 mt-2">
            <li>Request access to your data</li>
            <li>Ask for corrections</li>
            <li>Request update or modification and deletion of your data</li>
            <li>Withdraw consent at any time till 4 days</li>
          </ul>
          <p >To exercise your rights, email us at 
            <a className="mt-2" href="mailto:team@growpeakmedia.com"><strong> team@growpeakmedia.com</strong></a>
          </p>
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Third-Party Services</h2>
        <p>
          Our site may link to third-party services. We are not responsible for their privacy practices and recommend reviewing their policies separately.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Updates to This Policy</h2>
        <p>
          We may update this policy occasionally. All changes will be posted on this page with a new "Effective Date."
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy, contact us at:<br />
          📧 <a href="mailto:team@growpeakmedia.com"><strong>team@growpeakmedia.com</strong></a>
        </p>
      </section>
    </div>
    <FooterOne />
  </>
  );
};


export default PrivacyPolicy
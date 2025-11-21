'use client'

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <button 
          onClick={() => window.history.back()}
          className="mb-8 inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Refund Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              We want you to be completely satisfied with our AI-powered image editing platform. 
              This Refund Policy outlines the circumstances under which refunds may be provided 
              and the process for requesting them.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Subscription Refunds</h2>
            
            <h3 className="text-xl font-medium text-gray-900 mb-3">2.1 7-Day Money-Back Guarantee</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              New subscribers are eligible for a full refund within 7 days of their initial subscription purchase, provided:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>You have used less than 20% of your monthly credit allocation</li>
              <li>No violation of our Terms of Service has occurred</li>
              <li>The refund request is made within 7 calendar days of purchase</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mb-3">2.2 Prorated Refunds</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              In exceptional circumstances, we may provide prorated refunds for the unused portion of your subscription:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Technical issues that prevent service usage for extended periods</li>
              <li>Significant service disruptions lasting more than 48 hours</li>
              <li>Billing errors or unauthorized charges</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Credit and Usage Refunds</h2>
            
            <h3 className="text-xl font-medium text-gray-900 mb-3">3.1 Processing Credits</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Credits used for image processing are generally non-refundable. However, we may issue credit refunds for:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Technical failures resulting in unusable output</li>
              <li>System errors that consumed credits without processing</li>
              <li>Duplicate charges due to platform bugs</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mb-3">3.2 Unused Credits</h3>
            <p className="text-gray-700 leading-relaxed">
              Unused credits do not carry over between billing cycles and are not refundable upon subscription cancellation, 
              except in cases covered by our 7-day money-back guarantee.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibent text-gray-900 mb-4">4. Non-Refundable Items</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The following are not eligible for refunds:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Subscription renewals after the 7-day initial period</li>
              <li>Credits used for successful image processing</li>
              <li>Subscription downgrades (price difference is not refunded)</li>
              <li>Cancellations due to violation of Terms of Service</li>
              <li>Change of mind after the initial 7-day period</li>
              <li>Free tier usage or promotional credits</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Refund Process</h2>
            
            <h3 className="text-xl font-medium text-gray-900 mb-3">5.1 How to Request a Refund</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              To request a refund:
            </p>
            <ol className="list-decimal pl-6 text-gray-700 space-y-2 mb-4">
              <li>Contact our support team at bright@iley.app</li>
              <li>Include your account email and reason for the refund request</li>
              <li>Provide any relevant documentation (screenshots, error messages, etc.)</li>
              <li>Allow up to 5 business days for our team to review your request</li>
            </ol>

            <h3 className="text-xl font-medium text-gray-900 mb-3">5.2 Refund Timeline</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Once approved:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Credit card refunds: 5-10 business days</li>
              <li>PayPal refunds: 3-5 business days</li>
              <li>Bank transfer refunds: 7-14 business days</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Subscription Cancellation</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You can cancel your subscription at any time:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Access your account settings and click "Cancel Subscription"</li>
              <li>Your subscription will remain active until the end of the current billing period</li>
              <li>You will retain access to premium features until the period ends</li>
              <li>No future charges will occur after cancellation</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Billing Disputes</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you notice an unexpected charge:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Contact us immediately at billing@imageeditor.com</li>
              <li>We will investigate and resolve billing errors promptly</li>
              <li>Unauthorized charges will be refunded in full</li>
              <li>We may temporarily suspend account access during dispute resolution</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Technical Issues</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you experience technical problems:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Contact our technical support team for assistance</li>
              <li>We will work to resolve issues before considering refunds</li>
              <li>Service credits may be provided for extended outages</li>
              <li>Refunds may be considered if issues cannot be resolved</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Fair Usage Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              Our refund policy is designed to be fair to all users. We reserve the right to deny refund requests 
              that appear to abuse our policy, including but not limited to: repeated refund requests, 
              attempting to use the service extensively before requesting refunds, or other patterns 
              that suggest misuse of our refund policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Refund Policy from time to time. Changes will be posted on this page with 
              an updated revision date. Continued use of our service after changes constitutes acceptance 
              of the updated policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed">
              For refund requests or questions about this policy:
              <br />
              Email:bright@iley.app
              <br />
              Billing inquiries: bright@iley.app
              <br />
              
              <br />
              Address: United Kingdom
            </p>
          </section>

          <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Need Help?</h3>
            <p className="text-blue-800">
              Our customer support team is here to help! If you're experiencing issues with our service 
              or have questions about your subscription, please reach out to us before requesting a refund. 
              We're committed to resolving any concerns you may have.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
'use client'

export default function TermsPage() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms and Conditions</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing and using our AI-powered image editing platform ("Service"), you accept and agree to be bound by the terms and provision of this agreement. 
              If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our platform provides AI-powered image editing capabilities including but not limited to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Image enhancement and transformation</li>
              <li>Background removal and replacement</li>
              <li>Style transfer and artistic effects</li>
              <li>Multi-image remixing and blending</li>
              <li>Image upscaling and quality improvement</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Accounts and Registration</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To access certain features of our Service, you may be required to create an account. You agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Provide accurate, current, and complete information during registration</li>
              <li>Maintain and promptly update your account information</li>
              <li>Maintain the security of your password and account</li>
              <li>Accept responsibility for all activities under your account</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Content and Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You retain ownership of images you upload to our Service. However, by using our Service, you grant us:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>A license to process, store, and edit your images as necessary to provide the Service</li>
              <li>The right to use anonymized, aggregated data for service improvement</li>
              <li>You represent that you have the right to upload and edit the images you submit</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Prohibited Uses</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You may not use our Service to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Upload or edit images containing illegal, harmful, or offensive content</li>
              <li>Create deepfakes or misleading content of real people without consent</li>
              <li>Violate any intellectual property rights</li>
              <li>Attempt to reverse engineer or extract our AI models</li>
              <li>Use automated tools to access the Service excessively</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Subscription and Payment</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our Service offers both free and paid subscription tiers:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Free tier includes limited monthly credits</li>
              <li>Paid subscriptions provide additional credits and premium features</li>
              <li>Subscription fees are billed monthly or annually as selected</li>
              <li>All fees are non-refundable except as required by law</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Privacy and Data Protection</h2>
            <p className="text-gray-700 leading-relaxed">
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, 
              to understand our practices regarding your personal information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, 
              consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, 
              or any loss of data, use, goodwill, or other intangible losses resulting from your use of the Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Termination</h2>
            <p className="text-gray-700 leading-relaxed">
              We may terminate or suspend your account and bar access to the Service immediately, without prior notice 
              or liability, under our sole discretion, for any reason whatsoever including breach of these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to update or change our Terms at any time. We will notify users of any material 
              changes by posting the new Terms on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about these Terms and Conditions, please contact us at:
              <br />
              Email:bright@iley.app
              <br />
              Address: United Kingdom
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
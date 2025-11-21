'use client'

export default function PrivacyPage() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              This Privacy Policy describes how we collect, use, and protect your information when you use our 
              AI-powered image editing platform. We are committed to protecting your privacy and ensuring 
              the security of your personal information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-medium text-gray-900 mb-3">2.1 Account Information</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you create an account, we collect:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Email address</li>
              <li>Name (if provided)</li>
              <li>Profile picture (if uploaded)</li>
              <li>Account preferences and settings</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mb-3">2.2 Usage Data</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We automatically collect information about how you use our service:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>IP address and device information</li>
              <li>Browser type and version</li>
              <li>Pages visited and features used</li>
              <li>Time spent on the platform</li>
              <li>Error logs and performance data</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mb-3">2.3 Image Data</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you upload images for editing:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Original images you upload</li>
              <li>Edited images created by our AI</li>
              <li>Editing prompts and preferences</li>
              <li>Project metadata and settings</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use your information to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Provide and maintain our image editing services</li>
              <li>Process your images using AI technology</li>
              <li>Manage your account and subscription</li>
              <li>Send service-related communications</li>
              <li>Improve our platform and develop new features</li>
              <li>Detect and prevent fraud or abuse</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Image Privacy and Storage</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your images are important to us, and we handle them with care:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Images are processed securely using encrypted connections</li>
              <li>We do not use your images to train our AI models without explicit consent</li>
              <li>Images may be temporarily cached for performance optimization</li>
              <li>You can delete your images and projects at any time</li>
              <li>We may retain anonymized, non-identifiable data for service improvement</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Sharing and Disclosure</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information. We may share information in these situations:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>With service providers who help us operate the platform (under strict confidentiality agreements)</li>
              <li>When required by law or to protect our legal rights</li>
              <li>In case of a business merger or acquisition (with notice to users)</li>
              <li>With your explicit consent for specific purposes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement industry-standard security measures to protect your data:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>End-to-end encryption for data transmission</li>
              <li>Secure cloud storage with access controls</li>
              <li>Regular security audits and monitoring</li>
              <li>Employee training on data protection practices</li>
              <li>Incident response procedures for security breaches</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Your Rights and Choices</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have the following rights regarding your personal data:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Access and review your personal information</li>
              <li>Update or correct your account details</li>
              <li>Delete your account and associated data</li>
              <li>Export your data in a portable format</li>
              <li>Opt out of non-essential communications</li>
              <li>Restrict certain types of data processing</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Cookies and Tracking</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use cookies and similar technologies to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Remember your preferences and settings</li>
              <li>Analyze platform usage and performance</li>
              <li>Provide personalized experiences</li>
              <li>Ensure platform security</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              You can control cookies through your browser settings, though some features may not work properly if cookies are disabled.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Our service is not intended for children under 13 years of age. We do not knowingly collect 
              personal information from children under 13. If you believe we have collected information 
              from a child under 13, please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. International Data Transfers</h2>
            <p className="text-gray-700 leading-relaxed">
              Your information may be transferred to and processed in countries other than your country of residence. 
              We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any material changes 
              by posting the new Privacy Policy on this page and updating the "Last updated" date. 
              We encourage you to review this Privacy Policy periodically.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
              <br />
              Email: bright@iley.app
              <br />
              Address: United Kingdom
              <br />
              
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
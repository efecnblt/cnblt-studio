import React from 'react';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="container mx-auto px-6 py-20 max-w-4xl">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </a>

        <h1 className="font-orbitron text-4xl md:text-6xl font-bold text-white mb-4">
          Privacy Policy
        </h1>
        <p className="text-zinc-500 mb-12">Last Updated: March 2025</p>

        <div className="space-y-8 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">Introduction</h2>
            <p>
              CNBLT Studio ("we," "our," or "us") is built with a privacy-first mindset. Our applications
              are designed to be enjoyed with minimal data collection, and nearly all data stays on your device.
              We do not run player accounts, remote databases, or analytics that follow you across the web.
            </p>
            <p className="mt-4">
              This Privacy Policy explains what limited information is handled by our applications, how it is used,
              and the choices you have. By using CNBLT Studio products you agree to these practices. If you disagree
              with any part of this policy, please discontinue use of the app.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">What Data We Handle</h2>

            <h3 className="text-xl font-semibold text-orange-400 mb-3 mt-6">1. Data Stored on Your Device</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Current game state, progress, and session history</li>
              <li>Statistics such as high scores, achievements, and gameplay metrics</li>
              <li>Settings preferences (sound, vibration, themes, accessibility)</li>
              <li>Tutorial completion flags and feature unlocks</li>
            </ul>
            <p className="mt-3 text-sm text-zinc-400">
              This information never leaves your device unless you manually back it up or share it.
            </p>

            <h3 className="text-xl font-semibold text-orange-400 mb-3 mt-6">2. Information You Choose to Share</h3>
            <p>
              We only receive personal information if you proactively contact us—for example, by emailing
              support@cnblt.studio with feedback or a bug report. Any details you include in that communication
              will be used solely to respond to your request.
            </p>

            <h3 className="text-xl font-semibold text-orange-400 mb-3 mt-6">3. Optional External Services</h3>
            <p>
              Some applications may offer optional support links that open external services in your browser.
              These services operate under their own privacy policies and may collect additional information.
              We do not receive your payment details or account credentials from these services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Ensure our applications function as intended across sessions and devices</li>
              <li>Persist your scores, unlocks, and preferences between sessions</li>
              <li>Respond to questions or support requests that you send to us</li>
              <li>Monitor app stability and address defects based on voluntary feedback</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">Third-Party Services</h2>
            <p>
              App store providers (e.g., Google Play, Apple App Store) manage downloads, updates, and crash
              telemetry in line with their own privacy notices.
            </p>
            <p className="mt-4">
              Any optional payment or donation services operate under their respective privacy policies.
              We do not receive your payment credentials from these services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">Data Storage and Security</h2>
            <ul className="space-y-3">
              <li><strong className="text-orange-400">Local Storage:</strong> Your data remains on your device and is not transmitted to our servers.</li>
              <li><strong className="text-orange-400">Security Measures:</strong> We implement reasonable safeguards but cannot guarantee absolute security.</li>
              <li><strong className="text-orange-400">Data Retention:</strong> Data remains on your device until you uninstall the app or clear its storage.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">Children's Privacy</h2>
            <p>
              CNBLT Studio applications are suitable for players of all ages, including children under 13.
              Our apps do not require personal identifiers, do not include chat or social features, do not display
              ads or sell currency, and do not share data for marketing purposes. Parents can manage access to
              external links via device controls.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">Your Rights and Choices</h2>
            <ul className="space-y-3">
              <li><strong className="text-orange-400">Access and Deletion:</strong> Uninstall the app or clear its data to remove all local information. In-app "Reset Progress" options offer quick data wipes.</li>
              <li><strong className="text-orange-400">External Links:</strong> Opening external links is voluntary. You can restrict browser access via device or parental controls.</li>
              <li><strong className="text-orange-400">Communications:</strong> You choose what to include if you email us; we retain correspondence only as long as needed to resolve your request.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">International Users</h2>
            <p>
              By using CNBLT Studio applications outside your country, you consent to the transfer of information
              to jurisdictions with different data protection laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">Changes to This Privacy Policy</h2>
            <p>
              We may update this policy from time to time and will revise the "Last Updated" date. Continued use
              of our applications constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">Contact Us</h2>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
              <p><strong>Email:</strong> <a href="mailto:support@cnblt.studio" className="text-orange-400 hover:text-orange-300">support@cnblt.studio</a></p>
              <p><strong>Developer:</strong> CNBLT Studio</p>
              <p className="mt-2 text-sm text-zinc-400">We aim to respond within 30 days.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">Legal Compliance</h2>
            <p className="mb-3">This policy is designed to comply with applicable sections of:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Google Play Developer Program Policies</li>
              <li>Apple App Store Review Guidelines</li>
              <li>COPPA (Children's Online Privacy Protection Act)</li>
              <li>GDPR (General Data Protection Regulation, where applicable)</li>
              <li>CCPA (California Consumer Privacy Act, where applicable)</li>
            </ul>
          </section>

          <div className="border-t border-zinc-800 pt-8 mt-12">
            <p className="text-center text-zinc-500">
              By continuing to use CNBLT Studio applications, you acknowledge that you have read and understood this Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

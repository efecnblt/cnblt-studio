import React from 'react';
import { ArrowLeft } from 'lucide-react';

const Terms = () => {
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
          Terms of Service
        </h1>
        <p className="text-zinc-500 mb-12">Last Updated: March 2025</p>

        <div className="space-y-8 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">Agreement to Terms</h2>
            <p>
              By accessing or using any CNBLT Studio applications ("Services"), you agree to be bound by these
              Terms of Service. If you disagree with any part of these terms, please do not use our Services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">License to Use</h2>
            <p>
              CNBLT Studio grants you a limited, non-exclusive, non-transferable license to use our applications
              for personal, non-commercial purposes. You may not:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
              <li>Modify, reverse engineer, or decompile our applications</li>
              <li>Remove copyright or proprietary notices</li>
              <li>Use our Services for any illegal or unauthorized purpose</li>
              <li>Attempt to gain unauthorized access to any part of our Services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">Intellectual Property</h2>
            <p>
              All content, features, and functionality of CNBLT Studio applications are owned by CNBLT Studio
              and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">User Conduct</h2>
            <p>You agree to use our Services in a respectful manner and not to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
              <li>Harass, abuse, or harm others</li>
              <li>Distribute malware or malicious code</li>
              <li>Impersonate any person or entity</li>
              <li>Collect or store personal data about other users</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">Disclaimer of Warranties</h2>
            <p>
              Our Services are provided "as is" and "as available" without warranties of any kind, either express
              or implied. We do not guarantee that our Services will be uninterrupted, secure, or error-free.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, CNBLT Studio shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages resulting from your use of or inability to use our Services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">Changes to Services</h2>
            <p>
              We reserve the right to modify, suspend, or discontinue any part of our Services at any time without
              notice. We will not be liable to you or any third party for any modification, suspension, or
              discontinuation of our Services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">Updates to Terms</h2>
            <p>
              We may update these Terms from time to time. The "Last Updated" date will reflect the most recent
              changes. Continued use of our Services after changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with applicable laws, without regard
              to conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">Contact Information</h2>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
              <p>
                If you have any questions about these Terms, please contact us at:{' '}
                <a href="mailto:support@cnblt.studio" className="text-orange-400 hover:text-orange-300">
                  support@cnblt.studio
                </a>
              </p>
            </div>
          </section>

          <div className="border-t border-zinc-800 pt-8 mt-12">
            <p className="text-center text-zinc-500">
              By using CNBLT Studio applications, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;

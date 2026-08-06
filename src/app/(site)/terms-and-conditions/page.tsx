import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/viiv/SiteShell";

export const metadata: Metadata = {
  title: "Terms and Conditions | VIIV",
  description: "Terms governing access to and use of VIIV India’s website, admissions process, programs, and services.",
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={<h1 className="viiv-display text-[color:var(--vil-ivory)]">Terms &amp; Conditions</h1>}
        description="Please read these terms carefully before using our website or engaging with our admissions and educational services."
      />

      <section className="bg-[color:var(--vil-ivory)] py-16 md:py-24">
        <article className="viiv-container max-w-4xl text-[color:var(--text-main)]">
          <div className="rounded-[1.75rem] border border-[color:var(--border)] bg-white p-6 shadow-[0_24px_60px_-40px_rgba(31,49,73,0.35)] md:p-10">
            <p className="text-sm font-semibold text-[color:var(--vil-gold-dim)]">Effective date: 7 August 2026</p>
            <p className="mt-5 leading-7 text-[color:var(--text-muted)]">
              These Terms and Conditions (&quot;Terms&quot;) govern access to and use of <strong>viivindia.com</strong>,
              the VIIV India brand, and the admissions, campus, educational and related services offered by
              <strong> Varman Innovation Labs Private Limited</strong> (&quot;VIIV&quot;, &quot;Company&quot;, &quot;we&quot;, &quot;us&quot; or
              &quot;our&quot;). By accessing the website, submitting a form, registering, applying, paying a fee, or using
              our services, you agree to these Terms and our <Link href="/privacy-policy" className="font-semibold text-[color:var(--vil-gold-dim)] underline underline-offset-4">Privacy Policy</Link>.
            </p>

            <div className="mt-10 space-y-10 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-[color:var(--vil-navy)] [&_li]:leading-7 [&_p]:leading-7 [&_li]:text-[color:var(--text-muted)] [&_p]:text-[color:var(--text-muted)] [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
              <section>
                <h2>1. Eligibility and authority</h2>
                <p className="mt-3">You must be competent to contract under applicable Indian law. If you are under 18, a parent or lawful guardian must review and accept these Terms and consent to your use of the website and services. You confirm that information supplied by you is accurate, current and complete.</p>
              </section>

              <section>
                <h2>2. Website and services</h2>
                <p className="mt-3">The website provides information about VIIV, its programs, admissions, campus activities, events and related services. Program structures, schedules, mentors, collaborations, fees, scholarships, facilities and availability may change. Information on the website is general information and does not constitute a binding offer unless confirmed in writing by an authorised representative of the Company.</p>
              </section>

              <section>
                <h2>3. Admissions and enrolment</h2>
                <ul>
                  <li>Submitting an enquiry or application does not guarantee admission, enrolment, a scholarship, financing, academic progression, employment, revenue, funding or any other outcome.</li>
                  <li>Admission may be subject to eligibility checks, interviews, document verification, fee payment, seat availability and additional written terms communicated during the process.</li>
                  <li>You must provide authentic documents and promptly notify us of material changes. We may reject or cancel an application or enrolment where information is false, misleading or incomplete.</li>
                  <li>Any recognised degree pathway may be delivered by an independent university or educational partner and remains subject to that institution’s rules, approvals and academic requirements.</li>
                </ul>
              </section>

              <section id="payments">
                <h2>4. Fees, payments and refunds</h2>
                <p className="mt-3">Fees, taxes, instalments and payment deadlines are those confirmed to you in writing. You are responsible for using an authorised payment method and retaining receipts.</p>
                <p className="mt-3"><strong>All fees and payments are non-refundable and non-transferable.</strong> In exceptional circumstances, you may submit a written appeal for case-by-case review by the Grievance Officer at our headquarters. A review is discretionary, does not create an entitlement to a refund, and the Company’s written determination will be final, subject to applicable law.</p>
              </section>

              <section>
                <h2>5. Acceptable use</h2>
                <p className="mt-3">You must use the website and services only for lawful, personal and non-commercial purposes. You must not:</p>
                <ul>
                  <li>copy, republish, sell, sublicense, reverse engineer or commercially exploit our website, materials or services;</li>
                  <li>circumvent security, scrape or access systems through unauthorised automated means, introduce malicious code, overload infrastructure, or interfere with another user;</li>
                  <li>impersonate another person, misrepresent affiliations, infringe intellectual property or privacy rights, or upload unlawful, harmful, abusive, misleading or defamatory material; or</li>
                  <li>use our services in breach of law, these Terms, campus policies or written program rules.</li>
                </ul>
              </section>

              <section>
                <h2>6. Intellectual property</h2>
                <p className="mt-3">The website, VIIV name and marks, text, curriculum, graphics, photographs, videos, software, designs and other materials are owned by or licensed to the Company and protected by applicable intellectual-property laws. No right or licence is granted except the limited, revocable right to access the services for their intended purpose. Third-party names and marks remain the property of their respective owners.</p>
              </section>

              <section>
                <h2>7. Your submissions</h2>
                <p className="mt-3">You retain ownership of original material you submit. You grant the Company a non-exclusive, worldwide, royalty-free licence to host, reproduce and use that material only as reasonably necessary to operate, deliver and improve the services or as separately consented to by you. You warrant that you have the right to submit it. Promotional use of your name, image, testimonial, work or likeness will be subject to applicable consent requirements.</p>
              </section>

              <section>
                <h2>8. Communications</h2>
                <p className="mt-3">Where you provide your details or consent, we may contact you about your enquiry, application, program, payment, campus visit or events by telephone, email, SMS or WhatsApp. Marketing communications will be sent in accordance with your consent and applicable law. You may opt out of marketing, but we may still send necessary service or transaction communications.</p>
              </section>

              <section>
                <h2>9. Third-party services and links</h2>
                <p className="mt-3">The website may link to or integrate with independent providers, including payment, scheduling, analytics, messaging, maps, degree or educational partners. Their services and privacy practices are governed by their own terms. We do not control or endorse third-party content and are not responsible for its availability, accuracy or security.</p>
              </section>

              <section>
                <h2>10. Disclaimers</h2>
                <p className="mt-3">To the fullest extent permitted by law, the website and its content are provided &quot;as is&quot; and &quot;as available&quot;. We do not warrant uninterrupted or error-free operation or that all information will always be complete, current or suitable for a particular purpose. Venture, academic and career outcomes depend on many factors and are not guaranteed.</p>
              </section>

              <section>
                <h2>11. Limitation of liability</h2>
                <p className="mt-3">To the fullest extent permitted by law, the Company and its directors, officers, employees and agents will not be liable for indirect, incidental, special, punitive or consequential loss, including loss of profits, opportunity, goodwill or data, arising from use of the website or services. Nothing in these Terms excludes liability that cannot lawfully be excluded.</p>
              </section>

              <section>
                <h2>12. Indemnity</h2>
                <p className="mt-3">You agree to indemnify the Company and its officers, employees and agents against claims, loss, liabilities and reasonable costs arising from your unlawful use of the services, breach of these Terms, or infringement of another person’s rights, except to the extent caused by the Company.</p>
              </section>

              <section>
                <h2>13. Suspension and termination</h2>
                <p className="mt-3">We may restrict or terminate access where reasonably necessary to protect users or systems, comply with law, address non-payment or misconduct, or respond to a material breach. Provisions which by their nature should survive termination will continue to apply.</p>
              </section>

              <section>
                <h2>14. Changes</h2>
                <p className="mt-3">We may update these Terms to reflect changes in law, our services or business practices. The revised effective date will be shown above. Material changes will be communicated where required by law. Continued use after an update constitutes acceptance of the revised Terms.</p>
              </section>

              <section>
                <h2>15. Governing law and jurisdiction</h2>
                <p className="mt-3">These Terms are governed by the laws of India. Subject to applicable statutory remedies, the courts in Chennai, Tamil Nadu have exclusive jurisdiction over disputes arising from these Terms or the services.</p>
              </section>

              <section>
                <h2>16. Contact and grievance redressal</h2>
                <p className="mt-3">Questions, legal notices and exceptional refund appeals may be directed to:</p>
                <address className="mt-4 not-italic leading-7 text-[color:var(--text-muted)]">
                  <strong>Arunmozhivarman Ramachandran</strong><br />
                  Grievance Officer<br />
                  Varman Innovation Labs Private Limited (VIIV India)<br />
                  SSPDL Alpha City IT Park, No. 25, Rajiv Gandhi Salai,<br />
                  Navalur, Chennai, Tamil Nadu 600130, India<br />
                  Email: <a className="font-semibold text-[color:var(--vil-gold-dim)]" href="mailto:legal@viivindia.com">legal@viivindia.com</a><br />
                  Phone: <a className="font-semibold text-[color:var(--vil-gold-dim)]" href="tel:+919629628389">+91 96296 28389</a>
                </address>
              </section>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

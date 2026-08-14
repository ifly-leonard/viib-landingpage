import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/viiv/SiteShell";

export const metadata: Metadata = {
  title: "Privacy Policy | VIIV",
  description: "How VIIV India collects, uses, shares, retains, and protects personal data, and how individuals may exercise their rights.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Your data"
        title={<h1 className="viiv-display text-[color:var(--vil-ivory)]">Privacy Policy</h1>}
        description="A clear account of the personal data we process, why we process it, and the choices and rights available to you."
      />

      <section className="bg-[color:var(--vil-ivory)] py-16 md:py-24">
        <article className="viiv-container max-w-4xl text-[color:var(--text-main)]">
          <div className="rounded-[1.75rem] border border-[color:var(--border)] bg-white p-6 shadow-[0_24px_60px_-40px_rgba(31,49,73,0.35)] md:p-10">
            <p className="text-sm font-semibold text-[color:var(--vil-gold-dim)]">Effective date: 7 August 2026</p>
            <p className="mt-5 leading-7 text-[color:var(--text-muted)]">
              Varman Innovation Labs Private Limited operates the VIIV India brand (&quot;VIIV&quot;, &quot;we&quot;,
              &quot;us&quot; or &quot;our&quot;) and is the Data Fiduciary responsible for personal data processed through
              <strong> viivindia.com</strong>, our admissions process, campus activities, events and related services.
              This Policy should be read with our <Link href="/terms-and-conditions" className="font-semibold text-[color:var(--vil-gold-dim)] underline underline-offset-4">Terms and Conditions</Link>.
            </p>

            <div className="mt-10 space-y-10 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-[color:var(--vil-navy)] [&_h3]:font-semibold [&_h3]:text-[color:var(--vil-navy)] [&_li]:leading-7 [&_p]:leading-7 [&_li]:text-[color:var(--text-muted)] [&_p]:text-[color:var(--text-muted)] [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
              <section>
                <h2>1. Scope</h2>
                <p className="mt-3">This Policy applies when you visit our website, enquire, apply, register for an event or campus visit, communicate with us, make a payment, enrol in a program, or otherwise interact with VIIV. It is intended to support our obligations under the Digital Personal Data Protection Act, 2023 and other applicable Indian law.</p>
              </section>

              <section>
                <h2>2. Personal data we collect</h2>
                <ul>
                  <li><strong>Identity and profile data:</strong> name, age or date of birth, photograph, identifiers, educational background, application responses and documents.</li>
                  <li><strong>Contact data:</strong> telephone number, email address, postal address and parent or guardian contact details where relevant.</li>
                  <li><strong>Admissions and academic data:</strong> eligibility information, interview notes, enrolment status, attendance, performance, projects, feedback and program interactions.</li>
                  <li><strong>Payment data:</strong> transaction references, fee status and billing information. Full card, bank or UPI credentials are generally processed by payment providers and are not intended to be stored by us.</li>
                  <li><strong>Communications:</strong> enquiries, call or message details, support requests, consent preferences and correspondence through email, SMS, telephone or WhatsApp.</li>
                  <li><strong>Technical and usage data:</strong> IP address, browser, device and operating-system information, pages viewed, referral source, approximate location, timestamps, cookies and similar identifiers.</li>
                  <li><strong>Campus and event data:</strong> visit details, registrations, photographs or recordings where notice and any required consent are provided.</li>
                </ul>
                <p className="mt-3">Please do not provide personal data we have not requested. If you provide another person’s data, you confirm that you are authorised to do so and have given them the relevant notice.</p>
              </section>

              <section>
                <h2>3. How we collect data</h2>
                <p className="mt-3">We collect data directly from you through forms, applications, calls, email, WhatsApp, campus interactions and documents; automatically through website technologies; and, where lawful, from parents or guardians, educational partners, payment providers, event or referral partners and publicly available sources.</p>
              </section>

              <section>
                <h2>4. Why we process personal data</h2>
                <ul>
                  <li>respond to enquiries, verify phone numbers and arrange counselling or campus visits;</li>
                  <li>assess applications, eligibility and scholarships and administer admissions;</li>
                  <li>deliver programs, events, campus services, academic support and learner communications;</li>
                  <li>process fees, maintain transaction records and prevent fraud;</li>
                  <li>send requested information and, with valid consent where required, admissions or marketing communications;</li>
                  <li>operate, secure, troubleshoot, analyse and improve our website and services;</li>
                  <li>protect our rights and the safety of learners, staff, visitors and systems; and</li>
                  <li>meet legal, regulatory, audit, accounting and dispute-resolution obligations.</li>
                </ul>
                <p className="mt-3">We process data for the specific purposes described in the notice presented when it is collected, on the basis of your consent or another use permitted by applicable law. You may withdraw consent as described below; withdrawal does not affect processing already lawfully completed.</p>
              </section>

              <section>
                <h2>5. Cookies, analytics and advertising</h2>
                <p className="mt-3">Our website may use essential technologies for security and functionality, Google reCAPTCHA to prevent abuse, Google Analytics to understand website use, and Meta Pixel to measure advertising where these services are enabled. These providers may receive technical and usage data and set cookies or similar identifiers under their own policies. Browser controls can limit cookies, although parts of the website may not function correctly. Where applicable law requires consent for non-essential technologies, we will seek it before using them.</p>
              </section>

              <section>
                <h2>6. Communications and consent choices</h2>
                <p className="mt-3">We may contact you about a requested service or active application using the details you provide. You can withdraw marketing consent by using an unsubscribe method in the message or contacting us at <a className="font-semibold text-[color:var(--vil-gold-dim)]" href="mailto:contact@viivindia.com">contact@viivindia.com</a>. Withdrawal may not stop necessary service, safety, payment or legal communications.</p>
              </section>

              <section>
                <h2>7. Children and guardians</h2>
                <p className="mt-3">Our programs may involve applicants under 18. We seek verifiable consent from a parent or lawful guardian before processing a child’s personal data where required by law. We do not knowingly undertake processing likely to cause a detrimental effect on a child or use a child’s data for tracking, behavioural monitoring or targeted advertising contrary to applicable law. A parent or guardian may contact us to exercise applicable rights on the child’s behalf.</p>
              </section>

              <section>
                <h2>8. How we share personal data</h2>
                <p className="mt-3">We disclose only what is reasonably necessary to:</p>
                <ul>
                  <li>authorised employees, faculty, mentors and contractors who need it to perform their duties;</li>
                  <li>universities, educational or program partners involved in eligibility, enrolment or delivery;</li>
                  <li>hosting, cloud, CRM, communications, scheduling, analytics, security, payment and professional-service providers acting under appropriate obligations;</li>
                  <li>government, regulatory, law-enforcement or judicial authorities where required by law or a valid process; and</li>
                  <li>a successor in a merger, restructuring, financing or transfer of business, subject to applicable safeguards.</li>
                </ul>
                <p className="mt-3">We do not sell personal data. We require processors acting for us to use data only for instructed purposes and protect it appropriately.</p>
              </section>

              <section>
                <h2>9. Processing outside India</h2>
                <p className="mt-3">Some service providers may process data in locations outside India. Where this occurs, we take reasonable steps to use permitted locations and contractual, organisational and technical safeguards consistent with applicable Indian law and government restrictions.</p>
              </section>

              <section>
                <h2>10. Retention</h2>
                <p className="mt-3">We retain personal data only for as long as necessary for the disclosed purpose, an active relationship, grievance or dispute handling, and applicable legal, tax, accounting or regulatory requirements. When the purpose and required retention period end, we erase or anonymise the data. Retention periods may differ by record type; you may contact us for information relevant to your data.</p>
              </section>

              <section>
                <h2>11. Security</h2>
                <p className="mt-3">We use reasonable technical and organisational safeguards designed to prevent unauthorised access, use, alteration, disclosure or loss, including access controls and security reviews appropriate to the nature of the data. No system is completely secure. If a personal-data breach occurs, we will investigate, mitigate and notify affected individuals and authorities where required by law.</p>
              </section>

              <section>
                <h2>12. Your rights</h2>
                <p className="mt-3">Subject to applicable law and verification, you may:</p>
                <ul>
                  <li>request a summary of personal data being processed and processing activities;</li>
                  <li>request correction, completion or updating of inaccurate or incomplete data;</li>
                  <li>request erasure where retention is no longer necessary or legally required;</li>
                  <li>withdraw consent for consent-based processing;</li>
                  <li>raise a grievance and, after exhausting our grievance process, use remedies available under applicable law; and</li>
                  <li>nominate another individual to exercise rights in the event of death or incapacity, as permitted by law.</li>
                </ul>
                <p className="mt-3">Send a request from your registered email address to <a className="font-semibold text-[color:var(--vil-gold-dim)]" href="mailto:contact@viivindia.com">contact@viivindia.com</a>, describing the right you wish to exercise. We may request proportionate information to verify identity and protect your data. We will respond within the period required by applicable law.</p>
              </section>

              <section>
                <h2>13. Your responsibilities</h2>
                <p className="mt-3">You must provide authentic information, avoid impersonation, not suppress material information, and not make a false or frivolous grievance. Please keep your contact details current and protect any credentials or verification codes associated with our services.</p>
              </section>

              <section>
                <h2>14. Third-party websites</h2>
                <p className="mt-3">Links to third-party websites or services are provided for convenience. Their privacy practices are independent of VIIV, and you should review their notices before providing data.</p>
              </section>

              <section>
                <h2>15. Changes to this Policy</h2>
                <p className="mt-3">We may update this Policy to reflect changes in law, technology or our services. We will post the updated version and effective date here and provide additional notice or seek fresh consent where required.</p>
              </section>

              <section>
                <h2>16. Contact and Grievance Officer</h2>
                <p className="mt-3">For privacy questions, consent withdrawal or rights requests, email <a className="font-semibold text-[color:var(--vil-gold-dim)]" href="mailto:contact@viivindia.com">contact@viivindia.com</a>. You may raise a grievance with:</p>
                <address className="mt-4 not-italic leading-7 text-[color:var(--text-muted)]">
                  <strong>Arunmozhivarman Ramachandran</strong><br />
                  Grievance Officer<br />
                  Varman Innovation Labs Private Limited (VIIV India)<br />
                  SSPDL Alpha City IT Park, No. 25, Rajiv Gandhi Salai,<br />
                  Navalur, Chennai, Tamil Nadu 600130, India<br />
                  Email: <a className="font-semibold text-[color:var(--vil-gold-dim)]" href="mailto:contact@viivindia.com">contact@viivindia.com</a><br />
                  Phone: <a className="font-semibold text-[color:var(--vil-gold-dim)]" href="tel:+918925991788">+91 89259 91788</a>
                </address>
              </section>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

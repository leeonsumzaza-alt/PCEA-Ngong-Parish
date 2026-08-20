import "./PrivacyPolicy.css";

function PrivacyPolicy() {
  return (
    <main className="legal-page">

      {/* HERO */}
      <section className="legal-hero">
        <div className="container">
          <span className="legal-hero-tag">
            PCEA NGONG PARISH
          </span>

          <h1>Privacy Policy</h1>

          <p>
            Your privacy matters to us. Learn how PCEA Ngong Parish
            collects, uses and protects information submitted through
            our website.
          </p>
        </div>
      </section>


      {/* CONTENT */}
      <section className="legal-content">
        <div className="container">

          <div className="legal-document">

            <div className="legal-intro">
              <h2>PCEA Ngong Parish Church – Privacy Policy</h2>

              <p className="effective-date">
                <strong>Effective Date:</strong> 19 August 2026
              </p>
            </div>


            <p>
              PCEA Ngong Parish Church (“we,” “our,” or “the Parish”)
              respects your privacy and is committed to protecting the
              personal information of visitors to our website, members,
              congregants, parents, children, volunteers, partners, and
              other users.
            </p>

            <p>
              This Privacy Policy explains how information provided
              through the PCEA Ngong Parish website is collected, used,
              protected, and managed. The policy applies to the Parish
              website and its online services.
            </p>


            <LegalSection
              number="1"
              title="Information We Collect"
            >
              <p>
                We may collect information that you voluntarily provide
                through the website, including your name, email address,
                telephone number, church/ministry information, prayer
                requests, event registrations, donations or fundraising
                information, and messages submitted through online forms.
              </p>

              <p>
                We may also collect limited technical information, such
                as IP address, browser type, device information and
                website usage data, where necessary for website security
                and functionality.
              </p>
            </LegalSection>


            <LegalSection
              number="2"
              title="How We Use Your Information"
            >
              <p>
                Information collected may be used to:
              </p>

              <ul>
                <li>Respond to enquiries, prayer requests and messages;</li>
                <li>
                  Communicate information about church services,
                  ministries, programmes and events;
                </li>
                <li>
                  Process registrations, donations and fundraising
                  activities;
                </li>
                <li>
                  Support church administration and pastoral or ministry
                  activities;
                </li>
                <li>
                  Improve website functionality, security and user
                  experience; and
                </li>
                <li>
                  Comply with applicable legal and regulatory
                  requirements.
                </li>
              </ul>

              <p>
                We will not use personal information for purposes that
                are incompatible with the purpose for which it was
                collected without appropriate notice or consent.
              </p>
            </LegalSection>


            <LegalSection
              number="3"
              title="Children’s Privacy"
            >
              <p>
                PCEA Ngong Parish provides programmes and activities for
                children. We are committed to protecting children's
                personal information.
              </p>

              <p>
                Where information relating to children is collected for
                church-school activities, parental or guardian consent
                should be obtained where appropriate. We do not knowingly
                seek to collect unnecessary personal information from
                children through the website.
              </p>
            </LegalSection>


            <LegalSection
              number="4"
              title="Sharing of Information"
            >
              <p>
                We do not sell, rent, or trade personal information.
                Information may be shared with authorized Parish
                personnel, service providers or other parties where
                reasonably necessary to provide requested services,
                administer church activities, process transactions,
                maintain the website, protect security, or comply with
                the law.
              </p>
            </LegalSection>


            <LegalSection
              number="5"
              title="Data Security"
            >
              <p>
                We take reasonable administrative, technical and
                organizational measures to protect personal information
                against unauthorised access, alteration, disclosure,
                loss or misuse.
              </p>

              <p>
                However, no internet-based system can be guaranteed to
                be completely secure.
              </p>
            </LegalSection>


            <LegalSection
              number="6"
              title="Your Privacy Rights"
            >
              <p>
                Subject to applicable Kenyan law, individuals may have
                rights to access, correct, update, object to certain
                processing of, or request deletion of their personal
                information.
              </p>

              <p>
                Requests concerning personal information may be directed
                to the Parish through the contact details provided on
                the website.
              </p>
            </LegalSection>


            <LegalSection
              number="7"
              title="Cookies and Third-Party Services"
            >
              <p>
                The website may use cookies or similar technologies to
                improve functionality, security, and user experience.
              </p>

              <p>
                Third-party services integrated into the website may have
                their own privacy policies. Users are encouraged to
                review those policies where applicable.
              </p>
            </LegalSection>


            <LegalSection
              number="8"
              title="Changes to This Policy"
            >
              <p>
                PCEA Ngong Parish may update this Privacy Policy
                periodically to reflect changes in church activities,
                technology, legal requirements, or website services.
              </p>

              <p>
                Any revised policy will be published on this webpage
                with an updated effective date.
              </p>
            </LegalSection>


            <LegalSection
              number="9"
              title="Contact Us"
            >
              <p>
                For questions, concerns or requests relating to this
                Privacy Policy or the handling of personal information,
                please contact PCEA Ngong Parish Church through the
                contact information provided on the Parish website.
              </p>
            </LegalSection>


            <div className="legal-closing">
              <p>
                PCEA Ngong Parish Church is committed to respecting
                privacy, protecting personal information, and maintaining
                the trust of our congregation and the wider community.
              </p>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}


/* Reusable Section */

function LegalSection({ number, title, children }) {
  return (
    <section className="legal-section">

      <div className="legal-section-heading">
        <span>{number}</span>

        <h2>{title}</h2>
      </div>

      {children}

    </section>
  );
}


export default PrivacyPolicy;
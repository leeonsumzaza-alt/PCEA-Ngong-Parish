import "./Terms.css";

function Terms() {
  return (
    <main className="legal-page">

      {/* HERO */}
      <section className="legal-hero">
        <div className="container">

          <span className="legal-hero-tag">
            PCEA NGONG PARISH
          </span>

          <h1>Terms of Use</h1>

          <p>
            Please read these terms carefully before using the
            PCEA Ngong Parish website.
          </p>

        </div>
      </section>


      {/* CONTENT */}
      <section className="legal-content">

        <div className="container">

          <div className="legal-document">

            <div className="legal-intro">

              <h2>
                PCEA Ngong Parish Church – Website Terms and Conditions
              </h2>

              <p className="effective-date">
                <strong>Effective Date:</strong> 19 August 2026
              </p>

            </div>


            <p>
              Welcome to the PCEA Ngong Parish Church website. By
              accessing or using this website, you agree to comply with
              these Terms and Conditions. If you do not agree with any
              part of these terms, please discontinue use of the website.
            </p>


            <LegalSection
              number="1"
              title="Purpose of the Website"
            >
              <p>
                The website is provided by PCEA Ngong Parish Church to
                provide information about the Parish, church services,
                ministries, programs, events, announcements, Christian
                resources, fundraising activities, and other activities
                of the church.
              </p>

              <p>
                The website is intended primarily for information,
                communication and community engagement.
              </p>
            </LegalSection>


            <LegalSection
              number="2"
              title="Acceptable Use"
            >
              <p>
                Users agree to use the website responsibly and lawfully.
                You must not use the website to:
              </p>

              <ul>
                <li>
                  Submit false, misleading, abusive or unlawful
                  information;
                </li>

                <li>
                  Attempt to gain unauthorised access to the website or
                  its systems;
                </li>

                <li>
                  Introduce viruses, malware or other harmful material;
                </li>

                <li>
                  Interfere with the operation or security of the
                  website;
                </li>

                <li>
                  Use the website to harass, threaten or impersonate
                  another person; or
                </li>

                <li>
                  Use information obtained from the website for unlawful
                  or unauthorised purposes.
                </li>
              </ul>
            </LegalSection>


            <LegalSection
              number="3"
              title="Church Information and Content"
            >
              <p>
                The information published on the website is provided for
                general information and may occasionally change because
                of changes to church programmes, service times, events,
                venues or other circumstances.
              </p>

              <p>
                While the Parish makes reasonable efforts to keep
                information accurate and current, it does not guarantee
                that every item will always be complete, accurate or up
                to date.
              </p>
            </LegalSection>


            <LegalSection
              number="4"
              title="Intellectual Property"
            >
              <p>
                Unless otherwise indicated, photographs, logos, graphics,
                written materials, videos, announcements and other
                content published by PCEA Ngong Parish are owned by or
                used with permission by the Parish or relevant copyright
                holders.
              </p>

              <p>
                Such materials may not be reproduced, modified,
                distributed or commercially exploited without appropriate
                permission.
              </p>

              <p>
                Users may share links to the Parish website for
                legitimate, non-commercial purposes provided that the
                content is not misrepresented.
              </p>
            </LegalSection>


            <LegalSection
              number="5"
              title="Donations and Fundraising"
            >
              <p>
                Where the website provides information or facilities
                relating to church donations, fundraising or other
                financial contributions, users are responsible for
                ensuring that information submitted is accurate.
              </p>

              <p>
                Donations and contributions are intended for the purposes
                communicated by the Parish.
              </p>

              <p>
                Where third-party payment platforms are used, their own
                terms and conditions may also apply.
              </p>
            </LegalSection>


            <LegalSection
              number="6"
              title="Events and Programmes"
            >
              <p>
                Information concerning church services, children's
                programmes, conferences, fundraising activities and other
                events may be subject to change.
              </p>

              <p>
                The Parish reserves the right to modify, postpone or
                cancel an event where circumstances require it.
              </p>
            </LegalSection>


            <LegalSection
              number="7"
              title="External Links"
            >
              <p>
                The website may contain links to third-party websites or
                services.
              </p>

              <p>
                These links are provided for convenience and information.
                PCEA Ngong Parish does not necessarily endorse or control
                the content, security, availability, or privacy practices
                of external websites and is not responsible for their
                content or activities.
              </p>
            </LegalSection>


            <LegalSection
              number="8"
              title="Privacy"
            >
              <p>
                Your use of the website is also subject to the PCEA
                Ngong Parish Privacy Policy, which explains how personal
                information submitted through the website may be
                collected, used and protected.
              </p>
            </LegalSection>


            <LegalSection
              number="9"
              title="Disclaimer"
            >
              <p>
                The website is provided on an “as available” basis.
              </p>

              <p>
                To the extent permitted by applicable law, PCEA Ngong
                Parish does not guarantee uninterrupted availability or
                that the website will always be free from errors,
                security vulnerabilities or technical interruptions.
              </p>
            </LegalSection>


            <LegalSection
              number="10"
              title="Changes to These Terms"
            >
              <p>
                PCEA Ngong Parish may revise these Terms and Conditions
                from time to time to reflect changes in church
                activities, website services, technology or applicable
                requirements.
              </p>

              <p>
                Updated terms will be published on this webpage, and
                continued use of the website after changes are published
                constitutes acceptance of the revised terms.
              </p>
            </LegalSection>


            <LegalSection
              number="11"
              title="Contact"
            >
              <p>
                Questions concerning these Terms and Conditions may be
                directed to PCEA Ngong Parish Church through the contact
                details published on the Parish website.
              </p>
            </LegalSection>


            <div className="legal-closing">
              <p>
                By using the PCEA Ngong Parish website, you acknowledge
                that you have read, understood, and agreed to these Terms
                and Conditions.
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


export default Terms;
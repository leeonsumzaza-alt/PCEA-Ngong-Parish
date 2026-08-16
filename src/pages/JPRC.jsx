import "./JPRC.css";

import {
  FaHandsHelping,
  FaUsers,
  FaPrayingHands,
  FaLeaf,
  FaBalanceScale,
} from "react-icons/fa";

import jprcBanner from "../assets/images/Hero/jprc-banner.jpg";

function JPRC() {
  const activities = [
    {
      icon: <FaBalanceScale />,
      title: "Justice",
      text:
        "Promoting fairness, equality and respect for every person through Christian values and responsible action.",
    },
    {
      icon: <FaHandsHelping />,
      title: "Community Engagement",
      text:
        "Working with communities to address social challenges, support vulnerable people and encourage positive change.",
    },
    {
      icon: <FaPrayingHands />,
      title: "Peace & Reconciliation",
      text:
        "Encouraging peaceful relationships, forgiveness and reconciliation within the church and wider community.",
    },
    {
      icon: <FaUsers />,
      title: "Social Responsibility",
      text:
        "Encouraging members of the church to take responsibility for the wellbeing and development of society.",
    },
    {
      icon: <FaLeaf />,
      title: "Care for Creation",
      text:
        "Promoting responsible stewardship of God's creation and encouraging environmental care and sustainability.",
    },
    {
      icon: <FaHandsHelping />,
      title: "Practical Service",
      text:
        "Demonstrating Christ's love through compassion, assistance and practical support for people in need.",
    },
  ];

  return (
    <>
      {/* ================= JPRC HERO ================= */}

      <section
        className="about-hero"
        style={{
          backgroundImage: `url(${jprcBanner})`,
        }}
      >
        <div className="about-hero-overlay">
          <div className="container">
            <div
              className="about-hero-content"
              data-aos="fade-up"
            >
              <span className="hero-breadcrumb">
                HOME / JPRC
              </span>

              <h1>
                Justice, Peace,
                <span> Reconciliation & Creation</span>
              </h1>

              <div className="hero-divider"></div>

              <p>
                Promoting justice, peace and reconciliation while caring
                responsibly for God's creation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTRODUCTION ================= */}

      <section className="jprc-intro">
        <div className="container">
          <div className="text-center">
            <span className="section-tag">
              ABOUT JPRC
            </span>

            <h2 className="intro-title" >
              Serving God Through Justice and Peace
            </h2>

            <p className="intro-text">
              The Justice, Peace, Reconciliation and Creation (JPRC)
              Ministry of PCEA Ngong Parish promotes Christian values
              that encourage peaceful relationships, social responsibility
              and care for God's creation.
            </p>

            <p className="intro-text">
              Through education, community engagement, reconciliation
              and practical service, the ministry seeks to be a positive
              influence in the church and the wider community.
            </p>
          </div>
        </div>
      </section>

      {/* ================= LEADERSHIP ================= */}

      <section className="jprc-leadership">
        <div className="container">

          <div className="section-title text-center">
            <span className="section-tag">
              JPRC LEADERSHIP
            </span>

            <h2>
              Our Leadership
            </h2>

            <p>
              The JPRC Ministry is guided by dedicated leaders who provide
              spiritual direction and coordinate the ministry's activities.
            </p>
          </div>

          <div className="row g-4 justify-content-center">

            {/* Elder in Charge */}

            <div className="col-lg-5 col-md-6">
              <div className="jprc-official-card">

                <div className="official-photo">
                  <img
                    src="/images/placeholder.jpg"
                    alt="JPRC Elder in Charge"
                  />
                </div>

                <div className="official-info">
                  <span>
                    Patron Elder
                  </span>

                  <h3>
                    MBURU MWAURA
                  </h3>

                  <p>
                    Provides spiritual guidance and oversight to the
                    JPRC Ministry.
                  </p>
                </div>

              </div>
            </div>

            {/* Chairperson */}

            <div className="col-lg-5 col-md-6">
              <div className="jprc-official-card">

                <div className="official-photo">
                  <img
                    src="/images/placeholder.jpg"
                    alt="JPRC Chairperson"
                  />
                </div>

                <div className="official-info">
                  <span>
                    CHAIRPERSON
                  </span>

                  <h3>
                    SARAH MUREI
                  </h3>

                  <p>
                    Coordinates the activities and administration of
                    the JPRC Ministry.
                  </p>
                </div>

              </div>
            </div>

          </div>

          {/* ================= OFFICIALS ================= */}

          <div className="officials-list-section">

            <h3>
              JPRC Ministry Officials
            </h3>

            <ul className="officials-list">

              <li>
                <span>Chairperson</span>
                <strong>Sarah Murei</strong>
              </li>

              <li>
                <span>Vice Chairperson</span>
                <strong>Edwin Mungai Kihara</strong>
              </li>

              <li>
                <span>Secretary</span>
                <strong>Ecramercy Wangui Mwaura</strong>
              </li>

              <li>
                <span>Vice Secretary</span>
                <strong>Richard Muchira Gichuki</strong>
              </li>

              <li>
                <span>Treasurer</span>
                <strong>Ann Wanjiku Kinyanjui</strong>
              </li>

            </ul>

          </div>

          {/* ================= COMMITTEE ================= */}

          <div className="officials-list-section">

            <h3>
              JPRC Committee Members
            </h3>

            <ul className="officials-list committee-list">

              <li>
                <strong>Christine Makena</strong>
              </li>

              <li>
                <strong>Josephine Njue</strong>
              </li>

              <li>
                <strong>Minneh Mungai</strong>
              </li>

              <li>
                <strong>Monicah Muiruri</strong>
              </li>

              <li>
                <strong>Samuel Muriithi Ndereba</strong>
              </li>

              <li>
                <strong>Eunice Njoki</strong>
              </li>

              <li>
                <strong>Florence Mukuna</strong>
              </li>

              <li>
                <strong>John Kasuku</strong>
              </li>

              <li>
                <strong>Lucy Muthuri</strong>
              </li>

              <li>
                <strong>Gina Kaimba</strong>
              </li>

              <li>
                <strong>Milkah Justin</strong>
              </li>

              <li>
                <strong>Salaon Kashorda</strong>
              </li>

              <li>
                <strong>Faith Ndiga Mukui</strong>
              </li>

            </ul>

          </div>

        </div>
      </section>

      {/* ================= ACTIVITIES ================= */}

      <section className="jprc-values">
        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              OUR ACTIVITIES
            </span>

            <h2>
              Making a Difference
            </h2>

            <p>
              Through practical action and Christian values, JPRC seeks
              to promote peaceful and responsible communities.
            </p>

          </div>

          <div className="row g-4">

            {activities.map((item, index) => (
              <div
                className="col-lg-4 col-md-6"
                key={index}
              >

                <div className="value-card">

                  <div className="value-icon">
                    {item.icon}
                  </div>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.text}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= MESSAGE ================= */}

      <section className="jprc-message">

        <div className="container text-center">

          <span className="section-tag">
            OUR CALLING
          </span>

          <h2>
            Called to Be Peacemakers
          </h2>

          <p>
            The JPRC Ministry continues to serve as a witness of
            Christ's love by promoting justice, reconciliation,
            peace and responsible care for God's creation.
          </p>

        </div>

      </section>
    </>
  );
}

export default JPRC;
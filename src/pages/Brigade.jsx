import "./Brigade.css";
import {
  FaBible,
  FaUsers,
  FaHandsHelping,
  FaPrayingHands,
  FaChild,
  FaHeart,
} from "react-icons/fa";

import brigadeBanner from "../assets/images/Hero/brigade-banner.jpg";


function Brigade() {

  const activities = [
    {
      icon: <FaBible />,
      title: "Bible Teaching",
      text:
        "The Brigade encourages young people to grow spiritually through Bible study, devotion and Christian teaching."
    },
    {
      icon: <FaUsers />,
      title: "Leadership Development",
      text:
        "Members are trained to become responsible leaders who serve God, the church and society."
    },
    {
      icon: <FaHandsHelping />,
      title: "Community Service",
      text:
        "The Brigade participates in acts of service, helping others and showing Christ's love through action."
    }
  ];


  return (
    <>

     {/* ================= BRIGADE HERO ================= */}

<section
  className="about-hero"
  style={{
    backgroundImage:`url(${brigadeBanner})`,
  }}
>

  <div className="about-hero-overlay">

    <div className="container">

      <div
        className="about-hero-content"
        data-aos="fade-up"
      >

        <span className="hero-breadcrumb">
          HOME / BRIGADE
        </span>


        <h1>
          PCEA
          <span> Brigade</span>
        </h1>


        <div className="hero-divider"></div>


        <p>
          Training young people in discipline,
          faith, leadership and Christian service.
        </p>


      </div>

    </div>

  </div>

</section>



      {/* INTRODUCTION */}

      <section className="brigade-intro">

        <div className="container">


          <div className="text-center">


            <span className="section-tag">
              ABOUT BRIGADE
            </span>


            <h2 className="intro-title">
              Nurturing Young People for Christ
            </h2>


            <p className="intro-text">

              The PCEA Boys & Girls Brigade is a ministry dedicated to
              guiding young people in their spiritual growth, character
              development and service to God and the community.

              Through Christian teaching, discipline and fellowship,
              members are equipped to become responsible and faithful
              servants.

            </p>


          </div>


        </div>

      </section>

      {/* ================= BRIGADE OFFICIAL LEADERSHIP ================= */}

<section className="brigade-official-leaders">

  <div className="container">

    <div className="section-title text-center">

      <span className="section-tag">
        BRIGADE LEADERSHIP
      </span>

      <h2>
        Our Leadership
      </h2>

      <p>
        The Brigade is guided by dedicated leaders who provide
        spiritual direction, mentorship and coordination.
      </p>

    </div>


    <div className="row g-4 justify-content-center">


      {/* Elder */}

      <div className="col-lg-5 col-md-6">

        <div className="brigade-official-card">

          <div className="brigade-official-icon">
            <FaPrayingHands />
          </div>

          <div className="brigade-official-content">

            <span>
              Elder in Charge
            </span>

            <h3>
              Name Coming Soon
            </h3>

            <p>
              Provides spiritual oversight and guidance to the
              Brigade while supporting the spiritual growth of
              its members.
            </p>

          </div>

        </div>

      </div>


      {/* Chairperson */}

      <div className="col-lg-5 col-md-6">

        <div className="brigade-official-card">

          <div className="brigade-official-icon">
            <FaUsers />
          </div>

          <div className="brigade-official-content">

            <span>
              Chairperson
            </span>

            <h3>
              Name Coming Soon
            </h3>

            <p>
              Coordinates Brigade activities and works with the
              leadership team to ensure effective ministry and
              service.
            </p>

          </div>

        </div>

      </div>


    </div>

  </div>

</section>

{/* ================= BRIGADE OFFICIALS ================= */}

<section className="brigade-officials">

  <div className="container">

    <div className="section-title text-center">

      <span className="section-tag">
        BRIGADE TEAM
      </span>

      <h2>
        Brigade Officials
      </h2>

      <p>
        Our officials work together to guide, organize and support
        the activities of the Brigade.
      </p>

    </div>


    <div className="officials-list">

      <div className="official-item">
        <span>01</span>
        <h4>Chairperson</h4>
      </div>

      <div className="official-item">
        <span>02</span>
        <h4>Vice Chairperson</h4>
      </div>

      <div className="official-item">
        <span>03</span>
        <h4>Secretary</h4>
      </div>

      <div className="official-item">
        <span>04</span>
        <h4>Assistant Secretary</h4>
      </div>

      <div className="official-item">
        <span>05</span>
        <h4>Treasurer</h4>
      </div>

      <div className="official-item">
        <span>06</span>
        <h4>Brigade Leader</h4>
      </div>

      <div className="official-item">
        <span>07</span>
        <h4>Boys' Coordinator</h4>
      </div>

      <div className="official-item">
        <span>08</span>
        <h4>Girls' Coordinator</h4>
      </div>

    </div>

  </div>

</section>

{/* ================= BRIGADE MOTTOS ================= */}

<section className="brigade-mottos">

  <div className="container">

    <div className="section-title text-center">

      <span className="section-tag">
        OUR MOTTO
      </span>

      <h2>
        Boys & Girls Brigade
      </h2>

    </div>


    <div className="row g-4 justify-content-center">


      {/* Boys */}

      <div className="col-lg-5 col-md-6">

        <div className="motto-card boys-motto">

          <div className="motto-icon">
            <FaChild />
          </div>

          <span>
            BOYS BRIGADE
          </span>

          <h3>
            Surely I Come Quickly
          </h3>

          <p>
            A reminder to live faithfully and remain prepared
            for the coming of Christ.
          </p>

        </div>

      </div>


      {/* Girls */}

      <div className="col-lg-5 col-md-6">

        <div className="motto-card girls-motto">

          <div className="motto-icon">
            <FaHeart />
          </div>

          <span>
            GIRLS BRIGADE
          </span>

          <h3>
            Seek, Serve and Save
          </h3>

          <p>
            Encouraging girls to seek Christ, serve others and
            share the love of God with those around them.
          </p>

        </div>

      </div>


    </div>

  </div>

</section>




      {/* ACTIVITIES */}


      <section className="brigade-section">


        <div className="container">


          <div className="section-title text-center">


            <span className="section-tag">
              OUR ACTIVITIES
            </span>


            <h2>
              What We Do
            </h2>


          </div>



          <div className="row g-4">


            {activities.map((item,index)=>(

              <div 
                className="col-lg-4 col-md-6"
                key={index}
              >


                <div className="brigade-card">


                  <div className="brigade-icon">

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
    </>
  );
}


export default Brigade;
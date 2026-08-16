import "./Brigade.css";
import {
  FaBible,
  FaUsers,
  FaHandsHelping,
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

      {/* ================= BRIGADE LEADERSHIP ================= */}

<section className="leaders-section">

  <div className="container">

    <div className="section-title text-center">
      <span className="section-tag">
        LEADERSHIP
      </span>

      <h2>Boys & Girls Brigade Leadership</h2>

      <p>
        The Boys & Girls Brigade is guided by dedicated
        leaders who provide spiritual direction and servant leadership.
      </p>
    </div>

    <div className="row g-4">

      <div className="col-lg-6">
        <div className="official-card">

          <div className="official-image">
            <img
              src="/images/placeholder.jpg"
              alt="Brigade Elder"
            />
          </div>

          <div className="official-content">
            <span>Elder in Charge</span>
            <h3>MARTIN RIANTO TIAMPATI</h3>

            <p>
              Provides spiritual oversight and mentors the men of the
              fellowship.
            </p>
          </div>

        </div>
      </div>

      <div className="col-lg-6">
        <div className="official-card">

          <div className="official-image">
            <img
              src="/images/placeholder.jpg"
              alt="Chairman"
            />
          </div>

          <div className="official-content">
            <span>Chairman</span>
            <h3>DAVID GITHINJI MURAGE</h3>

            <p>
              Coordinates the activities and programs of the fellowship.
            </p>
          </div>

        </div>
      </div>

    </div>

  </div>

</section>

{/* ================= OFFICIALS ================= */}

<section className="teachers-section">

<div className="container">

<h2>Boys & Girls Brigade Officials</h2>

<p>
Our elected officials coordinate the ministry and help lead different
programs throughout the year.
</p>

<div className="teacher-list">

<ul>

<li>Chairperson - David Githinji Murage</li>

<li>Vice Chairperson - Grace Naomi Wagikuyu</li>

<li>Secretary - Immaculate Salaon Kashorda</li>

<li>Vice Secretary - Evans Karatu Maina</li>

<li>Treasurer - Sally Jepkosgei Yator</li>

<li>Boys Captain - Kenneth Gitonga Murungi</li>

<li>Girls Captain - Alice Wamunyu Ndonga</li>

</ul>

</div>

</div>

</section>

{/* ================= COMMITTEE MEMBERS================= */}

<section className="teachers-section">

<div className="container">

<h2>Commitee Members</h2>

<div className="teacher-list">

<ul>

<li>Florence Wanjiru Mukuna</li>

<li>Masharen Kikanae</li>

<li>Lucy Wanjiku Mwangi</li>

<li>Esther Kainda Mutwerandu</li>

<li>Felister Gathoni Mungai</li>

</ul>

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
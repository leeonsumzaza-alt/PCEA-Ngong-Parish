import "./JPRC.css";

import {
  FaHandsHelping,
  FaUsers,
  FaPrayingHands,
} from "react-icons/fa";

import jprcBanner from "../assets/images/Hero/jprc-banner.jpg";


function JPRC() {

  const activities = [

    {
      icon:<FaUsers />,
      title:"Community Engagement",
      text:
      "Working with communities to address social challenges and encourage positive change."
    },


    {
      icon:<FaHandsHelping />,
      title:"Social Support",
      text:
      "Supporting vulnerable members of society through compassion and practical assistance."
    },


    {
      icon:<FaPrayingHands />,
      title:"Faith-Based Action",
      text:
      "Applying Christian principles in promoting justice, peace and responsible living."
    }

  ];







return (

<>





{/* ================= JPRC HERO ================= */}

<section
  className="about-hero"
  style={{
    backgroundImage:`url(${jprcBanner})`,
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
          Justice,
          <span> Peace & Reconciliation</span>
        </h1>


        <div className="hero-divider"></div>


        <p>
          Promoting peace, justice and reconciliation
          through Christian values and community service.
        </p>


      </div>

    </div>

  </div>

</section>

{/* INTRO */}



<section className="jprc-intro">


<div className="container">


<div className="text-center">


<span className="section-tag">

ABOUT JPRC

</span>




<h2 className="intro-title">

Serving God Through Justice And Peace

</h2>





<p className="intro-text">


The Justice, Peace, Reconciliation and Creation (JPRC)
Ministry of PCEA Ngong Parish promotes Christian values
that encourage peaceful relationships, social responsibility
and care for God's creation.

Through education, engagement and service, the ministry
seeks to be a positive influence in the church and community.


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
              Serving The  Ministry
            </h2>

            <p>
              Our leadership provides spiritual direction and coordination
              for the JPRC Ministry of PCEA Ngong Parish.
            </p>

          </div>


          {/* Officials With Photos */}

          <div className="row g-4 justify-content-center">

            <div className="col-lg-5 col-md-6">

              <div className="music-official-card">

                <div className="official-photo">

                  <img
                    src="/images/placeholder.jpg"
                    alt="Elder in Charge"
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
                    Provides spiritual guidance and oversight to the Music
                    Ministry.
                  </p>

                </div>

              </div>

            </div>


            <div className="col-lg-5 col-md-6">

              <div className="music-official-card">

                <div className="official-photo">

                  <img
                    src="/images/placeholder.jpg"
                    alt="JPRC Ministry Chairperson"
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
                    Coordinates the activities and administration of the
                    Music Ministry.
                  </p>

                </div>

              </div>

            </div>

          </div>


          {/* Officials List */}

          <div className="officials-list-section">

            <h3>
              JPRC Ministry Officials
            </h3>

            <ul className="officials-list">

              <li>
                <span>Chairman</span>
                <strong>Sarah Murei</strong>
              </li>

              <li>
                <span>Vice Chairman</span>
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

        </div>

        <div className="officials-list-section">

            <h3>
              JPRC Committee Members
            </h3>

            <ul className="officials-list">

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

      </section>

{/* ACTIVITIES */}

<section className="jprc-values">


<div className="container">


<div className="section-title text-center">


<span className="section-tag">

OUR ACTIVITIES

</span>




<h2>

Making A Difference

</h2>


</div>






<div className="row g-4">



{

activities.map((item,index)=>(



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



))


}



</div>



</div>


</section>

{/* MESSAGE */}




<section className="jprc-message">


<div className="container text-center">


<h2>

Called To Be Peacemakers

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
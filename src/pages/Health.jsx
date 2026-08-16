import "./Health.css";

import {
  FaHeartbeat,
  FaUserMd,
  FaHandsHelping,
  FaUsers,
  FaPrayingHands,
  FaHeart,
} from "react-icons/fa";

import healthBanner from "../assets/images/Hero/health-banner.jpg";


function Health() {


  const services = [

    {
      icon:<FaHeartbeat />,
      title:"Health Awareness",
      text:
      "Creating awareness on healthy living, prevention of diseases and promoting wellbeing within the church community."
    },


    {
      icon:<FaUserMd />,
      title:"Medical Support",
      text:
      "Supporting members through medical guidance, health programmes and connections to healthcare services."
    },


    {
      icon:<FaHandsHelping />,
      title:"Community Care",
      text:
      "Extending compassion and support to those in need through health-related outreach initiatives."
    }

  ];






  const values = [

    {
      icon:<FaHeart />,
      title:"Compassion",
      text:
      "Following Christ's example by caring for people's physical, emotional and spiritual needs."
    },


    {
      icon:<FaUsers />,
      title:"Community",
      text:
      "Working together to promote healthier families and a stronger church community."
    },


    {
      icon:<FaPrayingHands />,
      title:"Faith & Care",
      text:
      "Combining prayer, faith and practical support in serving God's people."
    }

  ];






return (

<>


{/* ================= HEALTH MINISTRY HERO ================= */}

<section
  className="about-hero"
  style={{
    backgroundImage:`url(${healthBanner})`,
  }}
>

  <div className="about-hero-overlay">

    <div className="container">

      <div
        className="about-hero-content"
        data-aos="fade-up"
      >

        <span className="hero-breadcrumb">
          HOME / HEALTH MINISTRY
        </span>


        <h1>
          Health
          <span> Ministry</span>
        </h1>


        <div className="hero-divider"></div>


        <p>
          Serving the community through compassion,
          care and Christ-centred health initiatives.
        </p>


      </div>

    </div>

  </div>

</section>








{/* INTRODUCTION */}



<section className="health-intro">


<div className="container">


<div className="text-center">


<span className="section-tag">

ABOUT HEALTH MINISTRY

</span>





<h2 className="intro-title">

Caring For The Whole Person

</h2>





<p className="intro-text">


The Health Ministry of PCEA Ngong Parish is dedicated
to promoting physical, emotional and spiritual wellbeing
among members and the wider community.

Through health education, support programmes and
compassionate service, the ministry demonstrates
God's love by caring for others.


</p>



</div>


</div>


</section>

{/* ================= HEALTH LEADERSHIP ================= */}

<section className="education-leadership">

  <div className="container">

    <div className="section-title text-center">

      <span className="section-tag">
        HEALTH LEADERSHIP
      </span>

      <h2>
        Our Leadership
      </h2>

      <p>
        The Health Ministry is guided by dedicated leaders
        committed to teaching God's Word and nurturing spiritual growth.
      </p>

    </div>


    <div className="row g-4 justify-content-center">

      {/* Leader */}

      <div className="col-lg-5 col-md-6">

        <div className="education-leader-card">

          <img
            // src={christianEducationLeader}
            alt="Health Patron"
          />

          <div className="education-leader-content">

            <span>
              Health Patron
            </span>

            <h3>
              ANTHONY NYAMU
            </h3>

          </div>

        </div>

      </div>


      {/* Chairman */}

      <div className="col-lg-5 col-md-6">

        <div className="education-leader-card">

          <img
            // src={christianEducationPatron}
            alt="Health Committee Chairman"
          />

          <div className="education-leader-content">

            <span>
              Chairman
            </span>

            <h3>
              FESTUS NGUMO MWANGI
            </h3>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

{/* ================= OFFICIALS ================= */}

<section className="education-officials">

  <div className="container">

    <div className="section-title text-center">

      <span className="section-tag">
        OUR TEAM
      </span>

      <h2>
        Health Officials
      </h2>

    </div>


    <div className="officials-list">

      <div className="education-official-item">
        <span>01</span>

        <div>
          <h4>Chairman</h4>
          <p>Festus Ngumo Mwangi</p>
        </div>
      </div>


      <div className="education-official-item">
        <span>02</span>

        <div>
          <h4>Vice Chairman</h4>
          <p>Joe Gathage Mwangi</p>
        </div>
      </div>


      <div className="education-official-item">
        <span>03</span>

        <div>
          <h4>Secretary</h4>
          <p>Rahab Watiri Kaime</p>
        </div>
      </div>


      <div className="education-official-item">
        <span>04</span>

        <div>
          <h4>Treasurer</h4>
          <p>Jane Nyai Mutwerandu</p>
        </div>
      </div>

    </div>

  </div>

</section>

{/* ================= COMMITTEE MEMBERS ================= */}

<section className="education-officials">

  <div className="container">

    <div className="section-title text-center">

      <span className="section-tag">
        OUR TEAM
      </span>

      <h2>
        Committee Members
      </h2>

    </div>


    <div className="officials-list">

      <div className="education-official-item">
        <span>01</span>

        <div>
          <p></p>
        </div>
      </div>


      <div className="education-official-item">
        <span>02</span>

        <div>
          <p></p>
        </div>
      </div>


      <div className="education-official-item">
        <span>03</span>

        <div>
          <p></p>
        </div>
      </div>


      <div className="education-official-item">
        <span>04</span>

        <div>
          <p></p>
        </div>
      </div>


      <div className="education-official-item">
        <span>05</span>

        <div>
          <p></p>
        </div>
      </div>

      <div className="education-official-item">
        <span>06</span>

        <div>
          <p></p>
        </div>
      </div>

      <div className="education-official-item">
        <span>07</span>

        <div>
          <p></p>
        </div>
      </div>

      <div className="education-official-item">
        <span>08</span>

        <div>
          <p></p>
        </div>
      </div>

      <div className="education-official-item">
        <span>09</span>

        <div>
          <p></p>
        </div>
      </div>

      <div className="education-official-item">
        <span>10</span>

        <div>
          <p></p>
        </div>
      </div>

    </div>

  </div>

</section>

{/* SERVICES */}

<section className="health-section">


<div className="container">


<div className="section-title text-center">


<span className="section-tag">

OUR SERVICES

</span>

<h2>

What We Do

</h2>
</div>

<div className="row g-4">

{

services.map((item,index)=>(


<div

className="col-lg-4 col-md-6"

key={index}

>



<div className="health-card">


<div className="health-icon">

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









{/* VALUES */}



<section className="health-values">


<div className="container">



<div className="section-title text-center">


<span className="section-tag">

OUR VALUES

</span>




<h2>

Serving With Love And Compassion

</h2>



</div>







<div className="row g-4">


{

values.map((item,index)=>(



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




<section className="health-message">


<div className="container text-center">


<h2>

Caring For God's People

</h2>




<p>


The Health Ministry serves as a reminder that caring
for others is an important expression of Christ's love.
Together we promote healthier lives and stronger communities.


</p>



</div>


</section>





</>

);


}


export default Health;
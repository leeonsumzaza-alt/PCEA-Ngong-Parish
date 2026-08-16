import "./Sports.css";

import {
  FaFutbol,
  FaRunning,
  FaUsers,
  FaHandshake,
  FaHeart,
  FaPrayingHands,
} from "react-icons/fa";

import sportsBanner from "../assets/images/Hero/sports-banner.jpg";


function Sports() {


const activities = [

{
icon:<FaFutbol />,
title:"Sports Activities",
text:
"Organising sporting activities that promote fellowship, teamwork and healthy competition among members."
},


{
icon:<FaRunning />,
title:"Fitness & Wellness",
text:
"Encouraging physical wellbeing through exercise, recreation and active lifestyles."
},


{
icon:<FaUsers />,
title:"Fellowship",
text:
"Creating opportunities for members to connect, build friendships and grow together."
}

];





const values = [

{
icon:<FaHandshake />,
title:"Teamwork",
text:
"Building unity and cooperation through shared goals and activities."
},


{
icon:<FaHeart />,
title:"Brotherhood & Fellowship",
text:
"Strengthening relationships through friendship and Christian fellowship."
},


{
icon:<FaPrayingHands />,
title:"Faith & Discipline",
text:
"Promoting discipline, respect and Christian values both on and off the field."
}

];





return (

<>


{/* ================= SPORTS MINISTRY HERO ================= */}

<section
  className="about-hero"
  style={{
    backgroundImage:`url(${sportsBanner})`,
  }}
>

  <div className="about-hero-overlay">

    <div className="container">

      <div
        className="about-hero-content"
        data-aos="fade-up"
      >

        <span className="hero-breadcrumb">
          HOME / SPORTS MINISTRY
        </span>


        <h1>
          Sports
          <span> Ministry</span>
        </h1>


        <div className="hero-divider"></div>


        <p>
          Building fellowship, teamwork and healthy living
          through sports while glorifying God.
        </p>


      </div>

    </div>

  </div>

</section>








{/* INTRO */}


<section className="sports-intro">

<div className="container">

<div className="text-center">


<span className="section-tag">
ABOUT SPORTS MINISTRY
</span>


<h2 className="intro-title">
Building Fellowship Through Sports
</h2>


<p className="intro-text">

The Sports Ministry of PCEA Ngong Parish uses sports
as a tool to promote unity, friendship and healthy living.

Through games and recreational activities, the ministry
creates opportunities for members to connect while
demonstrating Christian values.

</p>


</div>

</div>

</section>

{/* ================= SPORTS LEADERSHIP ================= */}

<section className="education-leadership">

  <div className="container">

    <div className="section-title text-center">

      <span className="section-tag">
        SPORTS LEADERSHIP
      </span>

      <h2>
        Our Leadership
      </h2>

      <p>
        The Sports Ministry is guided by dedicated leaders
        committed to teaching God's Word and nurturing spiritual growth.
      </p>

    </div>


    <div className="row g-4 justify-content-center">

      {/* Leader */}

      <div className="col-lg-5 col-md-6">

        <div className="education-leader-card">

          <img
            // src={christianEducationLeader}
            alt="Christian Education Leader"
          />

          <div className="education-leader-content">

            <span>
              Sports Patron
            </span>

            <h3>
              SALAASH LEWETT
            </h3>

          </div>

        </div>

      </div>


      {/* Chairman */}

      <div className="col-lg-5 col-md-6">

        <div className="education-leader-card">

          <img
            // src={christianEducationPatron}
            alt="Christian Education Chairman"
          />

          <div className="education-leader-content">

            <span>
              Chairman
            </span>

            <h3>
              SAMUEL MUREITHI NDEREBA
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
        Sports Officials
      </h2>

    </div>


    <div className="officials-list">

      <div className="education-official-item">
        <span>01</span>

        <div>
          <h4>Chairman</h4>
          <p>Samuel Mureithi Ndereba</p>
        </div>
      </div>


      <div className="education-official-item">
        <span>02</span>

        <div>
          <h4>Vice Chairman</h4>
          <p>Daniel King'ori</p>
        </div>
      </div>


      <div className="education-official-item">
        <span>03</span>

        <div>
          <h4>Secretary</h4>
          <p>Milka Nyambura Mwicigi</p>
        </div>
      </div>


      <div className="education-official-item">
        <span>04</span>

        <div>
          <h4>Vice Secretary</h4>
          <p>Jane Wangui Macharia</p>
        </div>
      </div>


      <div className="education-official-item">
        <span>05</span>

        <div>
          <h4>Treasurer</h4>
          <p>Anisia Gacheri Riungu</p>
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
          <p>Joseph Mumira Njoroge</p>
        </div>
      </div>


      <div className="education-official-item">
        <span>02</span>

        <div>
          <p>Joram Kuria</p>
        </div>
      </div>


      <div className="education-official-item">
        <span>03</span>

        <div>
          <p>David Kanene</p>
        </div>
      </div>


      <div className="education-official-item">
        <span>04</span>

        <div>
          <p>Joseph Njoroge</p>
        </div>
      </div>


      <div className="education-official-item">
        <span>05</span>

        <div>
          <p>David Nderitu Mutiria</p>
        </div>
      </div>

      <div className="education-official-item">
        <span>06</span>

        <div>
          <p>Hezron Ngatia Miano</p>
        </div>
      </div>

      <div className="education-official-item">
        <span>07</span>

        <div>
          <p>James King'ori Kago</p>
        </div>
      </div>

      <div className="education-official-item">
        <span>08</span>

        <div>
          <p>David Gitahi Nderitu</p>
        </div>
      </div>

      <div className="education-official-item">
        <span>09</span>

        <div>
          <p>Anthony Ndonga Muriu</p>
        </div>
      </div>

      <div className="education-official-item">
        <span>10</span>

        <div>
          <p>Alphaeas Kagondu Muigai</p>
        </div>
      </div>

    </div>

  </div>

</section>

{/* ACTIVITIES */}



<section className="sports-section">

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


{
activities.map((item,index)=>(

<div
className="col-lg-4 col-md-6"
key={index}
>


<div className="sports-card">


<div className="sports-icon">
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



<section className="sports-values">

<div className="container">


<div className="section-title text-center">


<span className="section-tag">
OUR VALUES
</span>


<h2>
Growing Together Through Sports
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



<section className="sports-message">

<div className="container text-center">


<h2>
Serving Christ Through Sports
</h2>


<p>

The Sports Ministry encourages members to use
their talents, build relationships and glorify God
through teamwork and fellowship.

</p>


</div>

</section>



</>

);

}


export default Sports;
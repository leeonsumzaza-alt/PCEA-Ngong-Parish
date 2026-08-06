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









{/* TEAM */}



<section className="sports-team">

<div className="container">


<div className="section-title text-center">


<span className="section-tag">
SPORTS LEADERSHIP
</span>


<h2>
Serving Through Sports
</h2>


</div>




<div className="row g-4 justify-content-center">


<div className="col-lg-4 col-md-6">


<div className="leader-card">


<img
src="https://via.placeholder.com/400x500"
alt="Sports Coordinator"
/>


<div className="leader-content">

<span>
Sports Coordinator
</span>


<h3>
Name Here
</h3>

</div>


</div>


</div>



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
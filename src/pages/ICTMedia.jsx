import "./ICTMedia.css";

import {
  FaCamera,
  FaVideo,
  FaLaptop,
  FaGlobe,
  FaUsers,
  FaLightbulb,
  FaHandsHelping,
} from "react-icons/fa";

// import ictMediaBanner from "../assets/images/Hero/ict-media-banner.jpg";


function ICTMedia() {


  const services = [

    {
      icon:<FaCamera />,
      title:"Photography & Videography",
      text:
      "Capturing church services, events and special moments through quality photography and video production."
    },


    {
      icon:<FaVideo />,
      title:"Live Streaming",
      text:
      "Supporting online worship through livestreaming services and making church programmes accessible digitally."
    },


    {
      icon:<FaLaptop />,
      title:"Digital Support",
      text:
      "Managing digital platforms, technical support and technology solutions that support church activities."
    },


    {
      icon:<FaGlobe />,
      title:"Online Presence",
      text:
      "Sharing the work of the church through websites, social media and digital communication platforms."
    }


  ];





  const values = [

    {
      icon:<FaLightbulb />,
      title:"Creativity",
      text:
      "Using creativity and innovation to communicate God's message effectively through media."
    },


    {
      icon:<FaUsers />,
      title:"Teamwork",
      text:
      "Working together to support ministries, services and church programmes."
    },


    {
      icon:<FaHandsHelping />,
      title:"Service",
      text:
      "Serving the church by using technology and media skills for God's glory."
    }

  ];







return (

<>





{/* HERO */}

<section

className="page-hero"

style={{
// backgroundImage:`url(${ictMediaBanner})`
}}

>


<div className="overlay">


<div className="container">


<div className="hero-content">



<div className="hero-breadcrumb">

HOME / MINISTRIES / ICT & MEDIA

</div>




<h1>

ICT & Media Ministry

</h1>



<div className="hero-line"></div>




<p>

Using technology and creativity to connect,
communicate and serve the church.

</p>




</div>


</div>


</div>


</section>









{/* INTRODUCTION */}



<section className="ict-intro">


<div className="container">



<div className="text-center">


<span className="section-tag">

ABOUT ICT & MEDIA

</span>




<h2 className="intro-title">

Connecting The Church Through Technology

</h2>




<p className="intro-text">


The ICT & Media Ministry supports PCEA Ngong Parish
through technology, communication and creative media.

The ministry helps document church activities,
support worship services, manage digital platforms
and share the Gospel through modern communication tools.


</p>



</div>


</div>


</section>









{/* SERVICES */}




<section className="ict-section">


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

className="col-lg-3 col-md-6"

key={index}

>


<div className="ict-card">


<div className="ict-icon">

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



<section className="ict-values">


<div className="container">


<div className="section-title text-center">


<span className="section-tag">

OUR VALUES

</span>




<h2>

Serving Through Technology

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




<section className="ict-team">



<div className="container">



<div className="section-title text-center">



<span className="section-tag">

ICT & MEDIA TEAM

</span>




<h2>

Serving Behind The Scenes

</h2>



</div>






<div className="row g-4 justify-content-center">





<div className="col-lg-4 col-md-6">



<div className="leader-card">


<img

src="https://via.placeholder.com/400x500"

alt="ICT Coordinator"

/>




<div className="leader-content">


<span>

ICT Coordinator

</span>



<h3>

Name Here

</h3>



</div>



</div>



</div>









<div className="col-lg-4 col-md-6">



<div className="leader-card">


<img

src="https://via.placeholder.com/400x500"

alt="Media Team Leader"

/>




<div className="leader-content">


<span>

Media Team Leader

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





<section className="ict-message">


<div className="container text-center">



<h2>

Sharing God's Message Through Media

</h2>




<p>


Through technology, creativity and teamwork,
the ICT & Media Ministry helps the church reach
more people and communicate the Gospel effectively.


</p>




</div>


</section>





</>


);

}



export default ICTMedia;
import "./CSR.css";

import {
  FaHandsHelping,
  FaHeart,
  FaUsers,
  FaHome,
  FaPrayingHands,
  FaHandHoldingHeart,
} from "react-icons/fa";

import csrBanner from "../assets/images/Hero/csr-banner.jpg";



function CSR() {


const services = [

{
icon:<FaHandsHelping />,
title:"Community Outreach",
text:
"Serving the community through outreach programmes that respond to social needs and challenges."
},


{
icon:<FaHandHoldingHeart />,
title:"Helping The Vulnerable",
text:
"Supporting vulnerable individuals and families through compassion, care and practical assistance."
},


{
icon:<FaHome />,
title:"Social Support",
text:
"Working together to strengthen families and promote a caring and supportive community."
}

];





const values = [

{
icon:<FaHeart />,
title:"Compassion",
text:
"Following Christ's example by showing love and care to those around us."
},


{
icon:<FaUsers />,
title:"Unity",
text:
"Building stronger communities through cooperation and shared responsibility."
},


{
icon:<FaPrayingHands />,
title:"Faith In Action",
text:
"Demonstrating God's love through service and commitment to others."
}

];






return (

<>


{/* ================= COMMUNITY SERVICE MINISTRY HERO ================= */}

<section
  className="about-hero"
  style={{
    backgroundImage:`url(${csrBanner})`,
  }}
>

  <div className="about-hero-overlay">

    <div className="container">

      <div
        className="about-hero-content"
        data-aos="fade-up"
      >

        <span className="hero-breadcrumb">
          HOME / COMMUNITY SERVICE MINISTRY
        </span>


        <h1>
          Community Service
          <span> Ministry</span>
        </h1>


        <div className="hero-divider"></div>


        <p>
          Serving God's people through compassion,
          care and practical support to our community.
        </p>


      </div>

    </div>

  </div>

</section>









{/* INTRO */}



<section className="csr-intro">


<div className="container">


<div className="text-center">


<span className="section-tag">

ABOUT COMMUNITY SERVICE

</span>




<h2 className="intro-title">

Serving The Community With Christ's Love

</h2>




<p className="intro-text">


The Community Service Ministry of PCEA Ngong Parish
is committed to demonstrating God's love through
practical service, outreach and support.

The ministry reaches out to individuals, families and
communities by responding to social needs and promoting
care, dignity and hope.


</p>



</div>


</div>


</section>









{/* SERVICES */}



<section className="csr-section">


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



<div className="csr-card">


<div className="csr-icon">

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



<section className="csr-values">


<div className="container">


<div className="section-title text-center">


<span className="section-tag">

OUR VALUES

</span>




<h2>

Serving With Love And Purpose

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









{/* LEADERSHIP */}





<section className="csr-team">


<div className="container">


<div className="section-title text-center">


<span className="section-tag">

CSR LEADERSHIP

</span>




<h2>

Serving Through Community Action

</h2>



</div>






<div className="row g-4 justify-content-center">


<div className="col-lg-4 col-md-6">


<div className="leader-card">


<img

src="https://via.placeholder.com/400x500"

alt="CSR Coordinator"

/>



<div className="leader-content">


<span>

CSR Coordinator

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



<section className="csr-message">


<div className="container text-center">


<h2>

Called To Serve Others

</h2>



<p>

Through community service, we share Christ's love
by serving others, supporting those in need and
creating a positive impact in society.

</p>



</div>


</section>




</>

);

}



export default CSR;
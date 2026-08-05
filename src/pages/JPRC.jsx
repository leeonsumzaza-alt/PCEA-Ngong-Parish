import "./JPRC.css";

import {
  FaBalanceScale,
  FaHandshake,
  FaGlobeAfrica,
  FaHandsHelping,
  FaUsers,
  FaPrayingHands,
} from "react-icons/fa";

// import jprcBanner from "../assets/images/Hero/jprc-banner.jpg";


function JPRC() {


  const focusAreas = [

    {
      icon:<FaBalanceScale />,
      title:"Justice",
      text:
      "Promoting fairness, equality and standing for what is right according to Christian values."
    },


    {
      icon:<FaHandshake />,
      title:"Peace & Reconciliation",
      text:
      "Encouraging unity, forgiveness and peaceful relationships within the church and community."
    },


    {
      icon:<FaGlobeAfrica />,
      title:"Creation Care",
      text:
      "Promoting responsible stewardship of God's creation through environmental awareness and action."
    }

  ];





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





{/* HERO */}


<section

className="page-hero"

style={{
// backgroundImage:`url(${jprcBanner})`
}}

>


<div className="overlay">


<div className="container">


<div className="hero-content">


<div className="hero-breadcrumb">

HOME / MINISTRIES / JPRC

</div>




<h1>

Justice, Peace, Reconciliation & Creation

</h1>




<div className="hero-line"></div>




<p>

Promoting justice, peace, reconciliation
and care for God's creation.

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









{/* FOCUS AREAS */}




<section className="jprc-section">


<div className="container">


<div className="section-title text-center">


<span className="section-tag">

OUR FOCUS

</span>




<h2>

Justice, Peace And Creation

</h2>


</div>






<div className="row g-4">


{

focusAreas.map((item,index)=>(


<div

className="col-lg-4 col-md-6"

key={index}

>


<div className="jprc-card">


<div className="jprc-icon">

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









{/* LEADERSHIP */}





<section className="jprc-team">


<div className="container">


<div className="section-title text-center">


<span className="section-tag">

JPRC LEADERSHIP

</span>




<h2>

Serving The Community

</h2>



</div>





<div className="row g-4 justify-content-center">





<div className="col-lg-4 col-md-6">


<div className="leader-card">


<img

src="https://via.placeholder.com/400x500"

alt="JPRC Coordinator"

/>




<div className="leader-content">


<span>

JPRC Coordinator

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

alt="JPRC Team Member"

/>



<div className="leader-content">


<span>

JPRC Team Member

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
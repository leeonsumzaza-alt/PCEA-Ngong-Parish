import "./Evangelism.css";

import {
  FaBible,
  FaHandsHelping,
  FaPrayingHands,
  FaUsers,
  FaHeart,
  FaGlobeAfrica,
} from "react-icons/fa";

import evangelismBanner from "../assets/images/Hero/evangelism-banner.jpg";


function Evangelism() {


  const activities = [

    {
      icon:<FaBible />,
      title:"Bible Outreach",
      text:
      "Sharing God's Word through teaching, discipleship and encouraging people to grow in their faith."
    },


    {
      icon:<FaGlobeAfrica />,
      title:"Mission Work",
      text:
      "Taking the message of Christ beyond the church through missions, outreach programmes and evangelistic activities."
    },


    {
      icon:<FaHandsHelping />,
      title:"Community Outreach",
      text:
      "Serving the community through compassion, support and practical expressions of God's love."
    }

  ];



  const values = [

    {
      icon:<FaPrayingHands />,
      title:"Prayer",
      text:
      "Evangelism begins with prayer and dependence on God for transformation and spiritual growth."
    },


    {
      icon:<FaUsers />,
      title:"Discipleship",
      text:
      "Helping believers grow deeper in their relationship with Christ and encouraging others to follow Him."
    },


    {
      icon:<FaHeart />,
      title:"Love And Service",
      text:
      "Sharing Christ's love through kindness, care and service to people around us."
    }

  ];




  return (

    <>


{/* ================= EVANGELISM HERO ================= */}

<section
  className="about-hero"
  style={{
    backgroundImage:`url(${evangelismBanner})`,
  }}
>

  <div className="about-hero-overlay">

    <div className="container">

      <div
        className="about-hero-content"
        data-aos="fade-up"
      >

        <span className="hero-breadcrumb">
          HOME / EVANGELISM
        </span>


        <h1>
          Evangelism
          <span> Ministry</span>
        </h1>


        <div className="hero-divider"></div>


        <p>
          Sharing the love of Christ and spreading
          the Gospel through faith, outreach and service.
        </p>


      </div>

    </div>

  </div>

</section>






{/* INTRODUCTION */}


<section className="evangelism-intro">


<div className="container">


<div className="text-center">


<span className="section-tag">
ABOUT EVANGELISM
</span>


<h2 className="intro-title">
Reaching People With The Gospel Of Christ
</h2>


<p className="intro-text">

The Evangelism Ministry of PCEA Ngong Parish is committed
to sharing the message of Jesus Christ within the church,
the community and beyond.

Through outreach, discipleship and acts of service,
we seek to bring people closer to God and encourage
spiritual transformation.

</p>


</div>


</div>


</section>








{/* ACTIVITIES */}



<section className="evangelism-section">


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


<div className="evangelism-card">


<div className="evangelism-icon">

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



<section className="evangelism-values">


<div className="container">


<div className="section-title text-center">


<span className="section-tag">
OUR VALUES
</span>


<h2>
Living As Witnesses For Christ
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



<section className="evangelism-leaders">


<div className="container">


<div className="section-title text-center">


<span className="section-tag">
EVANGELISM LEADERSHIP
</span>


<h2>
Serving Through Outreach
</h2>


</div>





<div className="row g-4 justify-content-center">



<div className="col-lg-4 col-md-6">


<div className="leader-card">


<img
src="https://via.placeholder.com/400x500"
alt="Evangelism Coordinator"
/>


<div className="leader-content">


<span>
Evangelism Coordinator
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
alt="Evangelism Team Member"
/>


<div className="leader-content">


<span>
Evangelism Team Member
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



<section className="evangelism-message">


<div className="container text-center">


<h2>
Called To Share Christ
</h2>


<p>

As a ministry, we believe every believer has a role
in sharing the Gospel. Together we serve, reach out
and proclaim the love of Jesus Christ.

</p>


</div>


</section>





</>

  );

}



export default Evangelism;
import "./Brigade.css";
import {
  FaBible,
  FaUsers,
  FaHandsHelping,
  FaPrayingHands,
  FaChild,
  FaHeart,
} from "react-icons/fa";

// import brigadeBanner from "../assets/images/Hero/brigade-banner.jpg";


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


  const values = [
    {
      icon: <FaPrayingHands />,
      title: "Faith",
      text:
        "Building a strong relationship with God through prayer, worship and the teaching of His Word."
    },
    {
      icon: <FaChild />,
      title: "Discipline",
      text:
        "Developing character, responsibility and respect through Christian discipline."
    },
    {
      icon: <FaHeart />,
      title: "Service",
      text:
        "Encouraging young people to serve God and others with love and humility."
    }
  ];


  return (
    <>

      {/* HERO */}

      <section
        className="page-hero"
        style={{
        //   backgroundImage: `url(${brigadeBanner})`,
        }}
      >

        <div className="overlay">

          <div className="container">

            <div className="hero-content">

              <div className="hero-breadcrumb">
                HOME / MINISTRIES / BRIGADE
              </div>


              <h1>
                PCEA Boys & Girls Brigade
              </h1>


              <div className="hero-line"></div>


              <p>
                Building young people through faith,
                discipline, leadership and service.
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





      {/* VALUES */}


      <section className="brigade-values">


        <div className="container">


          <div className="section-title text-center">


            <span className="section-tag">
              OUR VALUES
            </span>


            <h2>
              Growing In Faith And Character
            </h2>


          </div>



          <div className="row g-4">


            {values.map((item,index)=>(

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


            ))}


          </div>


        </div>


      </section>






      {/* LEADERSHIP */}


      <section className="brigade-leaders">


        <div className="container">


          <div className="section-title text-center">


            <span className="section-tag">
              BRIGADE LEADERSHIP
            </span>


            <h2>
              Serving The Brigade
            </h2>


          </div>




          <div className="row g-4 justify-content-center">


            <div className="col-lg-4 col-md-6">


              <div className="leader-card">


                <img
                  src="https://via.placeholder.com/400x500"
                  alt="Brigade Patron"
                />


                <div className="leader-content">


                  <span>
                    Brigade Patron
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
                  alt="Brigade Leader"
                />


                <div className="leader-content">


                  <span>
                    Brigade Leader
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






      {/* CLOSING MESSAGE */}


      <section className="brigade-message">


        <div className="container text-center">


          <h2>
            Building Future Leaders For Christ
          </h2>


          <p>

            The PCEA Boys & Girls Brigade continues to inspire young
            people to grow in faith, serve others and become responsible
            leaders in the church and society.

          </p>


        </div>


      </section>


    </>
  );
}


export default Brigade;
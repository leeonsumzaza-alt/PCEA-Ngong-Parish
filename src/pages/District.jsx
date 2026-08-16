import "./District.css";
import { useParams } from "react-router-dom";

function District() {
  const { districtName } = useParams();

  const districts = {
    district1: {
      name: "District 1",
      description:
        "Serving Christ and strengthening the church through worship, fellowship, evangelism and community service.",

      hero:
        "/images/Districts/district1/hero.jpg",

      elder:
        "/images/Districts/district1/elder.jpg",

      elderName: "LEONARD NJUNGE NDUGIRE",

      deacons: [
        "EUNICE WAMBUI CHEGE",
        "MILLICENT NAISIMOI KISHUIYAN",
        "JOHN KAGENI KIMANI",
        "CHARLES NYAMU THAIRU",
        "JOSEPH KAMAU",
        "ANN ROSE NJERI MUHUYU"
      ],

      gallery: [
        "/images/Districts/district1/photo1.jpg",
        "/images/Districts/district1/photo2.jpg",
        "/images/Districts/district1/photo3.jpg",
      ],

      activities: [
        "Sunday worship services",
        "Evangelism and outreach",
        "Community service",
        "Youth activities",
        "Women's Guild activities",
        "Men's Fellowship activities",
      ],
    },

    district2: {
      name: "District 2",
      description:
        "Serving God and the community through faith, fellowship and Christian service.",

      hero:
        "/images/Districts/district2/hero.jpg",

      elder:
        "/images/Districts/district2/elder.jpg",

      elderName: "VIRGINIA WANJIRU MACHARIA",

      deacons: [
        "JOSEPH NDUNG’U MWAURA",
        "SARAH NJOKI WAINAINA",
        "ELIZABETH NYAWIRA NGIGE",
        "MILKAH NYAMBURA MWICHIGI",
        "MAXWELL YANGA NEPURKO",
      ],

      gallery: [
        "/images/Districts/district2/photo1.jpg",
        "/images/Districts/district2/photo2.jpg",
        "/images/Districts/district2/photo3.jpg",
      ],

      activities: [
        "Worship",
        "Bible study",
        "Evangelism",
        "Community outreach",
      ],
    },

    district3: {
      name: "District 3",
      description:
        "Serving God and the community through faith, fellowship and Christian service.",

      hero:
        "/images/Districts/district3/hero.jpg",

      elder:
        "/images/Districts/district3/elder.jpg",

      elderName: "GRISHON NGUGI GIKONYO",

      deacons: [
        "ERIC MUTWIRI MUTEGI ",
        "JOYCE WAIRIMU NGIGE",
        "PETER SARUNI PARMALES",
        "GRACE WAITHIRA KIMANI",
        "FAITH WARIARA MUHIA",
      ],

      gallery: [
        "/images/Districts/district3/photo1.jpg",
        "/images/Districts/district3/photo2.jpg",
        "/images/Districts/district3/photo3.jpg",
      ],

      activities: [
        "Worship",
        "Bible study",
        "Evangelism",
        "Community outreach",
      ],
    },

    district4: {
      name: "District 4",
      description:
        "Serving God and the community through faith, fellowship and Christian service.",

      hero:
        "/images/Districts/district4/hero.jpg",

      elder:
        "/images/Districts/district4/elder.jpg",

      elderName: "STEPHEN MUNYIRI MWANGI",

      deacons: [
        "EVELYNE CHEMUTAI MWIRIGI",
        "TABITHA WAMBUI MBUGUA",
        "ESTHER NJERI MUGO ",
        "GLADYS WAIRIMU MATHENGE",
        "ABEL NYAKUNDI ONDIGI ",
      ],

      gallery: [
        "/images/Districts/district4/photo1.jpg",
        "/images/Districts/district4/photo2.jpg",
        "/images/Districts/district4/photo3.jpg",
      ],

      activities: [
        "Worship",
        "Bible study",
        "Evangelism",
        "Community outreach",
      ],
    },

    district5: {
      name: "District 5",
      description:
        "Serving God and the community through faith, fellowship and Christian service.",

      hero:
        "/images/Districts/district5/hero.jpg",

      elder:
        "/images/Districts/district5/elder.jpg",

      elderName: "ELIZABETH WANJIKU GATHOGO ",

      deacons: [
        "ISAAC KIMANI WARUINGI",
        "MARGARET NYAGUTHII MACHARIA ",
        "MARY WANJERI NJOGU",
        "MARY NYAMBURA NGUGI",
        "SHEM MWANGI MAINA",
      ],

      gallery: [
        "/images/Districts/district5/photo1.jpg",
        "/images/Districts/district5/photo2.jpg",
        "/images/Districts/district5/photo3.jpg",
      ],

      activities: [
        "Worship",
        "Bible study",
        "Evangelism",
        "Community outreach",
      ],
    },

    district6: {
      name: "District 6",
      description:
        "Serving God and the community through faith, fellowship and Christian service.",

      hero:
        "/images/Districts/district6/hero.jpg",

      elder:
        "/images/Districts/district6/elder.jpg",

      elderName: "JOHN KIARIE MWIHANDI",

      deacons: [
        "RUTH WANJIRA THAIRU",
        "ERASTUS MWANGI GITURWA",
        "BEATRICE NAITORE GATUGUTA ",
        "DIVON GITURWA MWANGI ",
        "ERIC GITONGA MUTWIRI",
      ],

      gallery: [
        "/images/Districts/district6/photo1.jpg",
        "/images/Districts/district6/photo2.jpg",
        "/images/Districts/district6/photo3.jpg",
      ],

      activities: [
        "Worship",
        "Bible study",
        "Evangelism",
        "Community outreach",
      ],
    },

    district7: {
      name: "District 7",
      description:
        "Serving God and the community through faith, fellowship and Christian service.",

      hero:
        "/images/Districts/district7/hero.jpg",

      elder:
        "/images/Districts/district7/elder.jpg",

      elderName: "NICHOLAS THEURI KARUGI",

      deacons: [
        "PATRICK MUNYINGI MAINA",
        "ANISIA GACERI MBURUGU",
        "NAOMI GAKENIA IRUNGU",
        "DAVID KANENE GITAU",
        "GRACE GAKERE",
      ],

      gallery: [
        "/images/Districts/district7/photo1.jpg",
        "/images/Districts/district7/photo2.jpg",
        "/images/Districts/district7/photo3.jpg",
      ],

      activities: [
        "Worship",
        "Bible study",
        "Evangelism",
        "Community outreach",
      ],
    },

    district8: {
      name: "District 8",
      description:
        "Serving God and the community through faith, fellowship and Christian service.",

      hero:
        "/images/Districts/district8/hero.jpg",

      elder:
        "/images/Districts/district8/elder.jpg",

      elderName: "ALICE NUNGARI GICHANE",

      deacons: [
        "JANE WOTHAYA KING’ORI",
        "ANN NDIKO KARUITHIE",
        "JOYCE TIRINDI NG’ANG’A",
        "JAMES KING’ORI KAGO",
      ],

      gallery: [
        "/images/Districts/district8/photo1.jpg",
        "/images/Districts/district8/photo2.jpg",
        "/images/Districts/district8/photo3.jpg",
      ],

      activities: [
        "Worship",
        "Bible study",
        "Evangelism",
        "Community outreach",
      ],
    },

    district9: {
      name: "District 9",
      description:
        "Serving God and the community through faith, fellowship and Christian service.",

      hero:
        "/images/Districts/district9/hero.jpg",

      elder:
        "/images/Districts/district9/elder.jpg",

      elderName: "JACK NDUNGU NJUGUNA",

      deacons: [
        "DIANA MBEYU GICHANGI ",
        "SARAH NJERI WAMUNYU",
        "ELIJAH MUIGAI KAMAU",
        "PETER GATHARA KIMANI",
        "MIRIAM NDUTA KINYANJUI ",
      ],

      gallery: [
        "/images/Districts/district9/photo1.jpg",
        "/images/Districts/district9/photo2.jpg",
        "/images/Districts/district9/photo3.jpg",
      ],

      activities: [
        "Worship",
        "Bible study",
        "Evangelism",
        "Community outreach",
      ],
    },

    district10: {
      name: "District 10",
      description:
        "Serving God and the community through faith, fellowship and Christian service.",

      hero:
        "/images/Districts/district10/hero.jpg",

      elder:
        "/images/Districts/district10/elder.jpg",

      elderName: "MARTIN RIANTO TIAMPATI",

      deacons: [
        "CHRISTINE MAKENA MURIITHI",
        "EDWIN MUNGAI KIHARA",
        "RAYCHELLE MBERE MUCHIRI",
        "EUNICE WANJIKU MUHORO",
      ],

      gallery: [
        "/images/Districts/district10/photo1.jpg",
        "/images/Districts/district10/photo2.jpg",
        "/images/Districts/district10/photo3.jpg",
      ],

      activities: [
        "Worship",
        "Bible study",
        "Evangelism",
        "Community outreach",
      ],
    },

    district11: {
      name: "District 11",
      description:
        "Serving God and the community through faith, fellowship and Christian service.",

      hero:
        "/images/Districts/district11/hero.jpg",

      elder:
        "/images/Districts/district11/elder.jpg",

      elderName: "EDWARD KAGWI GITURWA ",

      deacons: [
        "MARY NDUNGE SANKALE",
        "LYDIA MUTHONI MUCHAI",
        "VERONICAH NJOKI GITARI ",
        "KELVIN SITONIK LEDAMA",
        "DANIEL KING’ORI K ",
      ],

      gallery: [
        "/images/Districts/district11/photo1.jpg",
        "/images/Districts/district11/photo2.jpg",
        "/images/Districts/district11/photo3.jpg",
      ],

      activities: [
        "Worship",
        "Bible study",
        "Evangelism",
        "Community outreach",
      ],
    },

    district12: {
      name: "District 12",
      description:
        "Serving God and the community through faith, fellowship and Christian service.",

      hero:
        "/images/Districts/district12/hero.jpg",

      elder:
        "/images/Districts/district12/elder.jpg",

      elderName: "MARGARET WAIRIMU GITAHI",

      deacons: [
        "CATHERINE WANJIKU NYAMU ",
        "WINNIE WAHU NG’ANG’A",
        "SUSAN WANJIKU NGUMO ",
        "FAITH NDIGA MUKUI ",
      ],

      gallery: [
        "/images/Districts/district12/photo1.jpg",
        "/images/Districts/district12/photo2.jpg",
        "/images/Districts/district12/photo3.jpg",
      ],

      activities: [
        "Worship",
        "Bible study",
        "Evangelism",
        "Community outreach",
      ],
    },

    district13: {
      name: "District 13",
      description:
        "Serving God and the community through faith, fellowship and Christian service.",

      hero:
        "/images/Districts/district13/hero.jpg",

      elder:
        "/images/Districts/district13/elder.jpg",

      elderName: "ANTHONY NG’ANG’A GITHIRE",

      deacons: [
        "TABITHA WANJIKU NGENE ",
        "LEAH WAMBUI WANJA ",
        "CAROLINE KANYORA NDURU ",
        "CAFU KAHUNYO KITTI",
      ],

      gallery: [
        "/images/Districts/district13/photo1.jpg",
        "/images/Districts/district13/photo2.jpg",
        "/images/Districts/district13/photo3.jpg",
      ],

      activities: [
        "Worship",
        "Bible study",
        "Evangelism",
        "Community outreach",
      ],
    },

    district14: {
      name: "District 14",
      description:
        "Serving God and the community through faith, fellowship and Christian service.",

      hero:
        "/images/Districts/district14/hero.jpg",

      elder:
        "/images/Districts/district14/elder.jpg",

      elderName: "ANTONY NYAMU MAHINGE",

      deacons: [
        "TIMOTHY MAINA GITHINJI",
        "MARTHA WARUE MUCHIRA",
        "ESTHER KAINDA MUTWERANDU ",
        "MARYJANE WANJIRU MOSIANY",
      ],

      gallery: [
        "/images/Districts/district14/photo1.jpg",
        "/images/Districts/district14/photo2.jpg",
        "/images/Districts/district14/photo3.jpg",
      ],

      activities: [
        "Worship",
        "Bible study",
        "Evangelism",
        "Community outreach",
      ],
    },

    district15: {
      name: "District 15",
      description:
        "Serving God and the community through faith, fellowship and Christian service.",

      hero:
        "/images/Districts/district15/hero.jpg",

      elder:
        "/images/Districts/district15/elder.jpg",

      elderName: "FLORENCE NYAMBURA THEURI",

      deacons: [
        "JOSEPH NJOROGE WANG’URU",
        "ECRAMERCY WANGUI MWAURA",
        "RUFUS GACHINGIRI NDAINI",
        "MARGARET NJERI KIHORO",
        "JOYCE WAIRIMU MUCHENE",
      ],

      gallery: [
        "/images/Districts/district15/photo1.jpg",
        "/images/Districts/district15/photo2.jpg",
        "/images/Districts/district15/photo3.jpg",
      ],

      activities: [
        "Worship",
        "Bible study",
        "Evangelism",
        "Community outreach",
      ],
    },

    district16: {
      name: "District 16",
      description:
        "Serving God and the community through faith, fellowship and Christian service.",

      hero:
        "/images/Districts/district16/hero.jpg",

      elder:
        "/images/Districts/district16/elder.jpg",

      elderName: "PAUL MBURU MWAURA",

      deacons: [
        "SAMUEL GITHINJI NDUKUIYU",
        "ALPHAEUS MUNGAI KAGONDU ",
        "BESSY GATWIRI MUGAMBI",
        "JANE WANGUI MACHARIA",
        "HEZRON MIANO NGATIA",
      ],

      gallery: [
        "/images/Districts/district16/photo1.jpg",
        "/images/Districts/district16/photo2.jpg",
        "/images/Districts/district16/photo3.jpg",
      ],

      activities: [
        "Worship",
        "Bible study",
        "Evangelism",
        "Community outreach",
      ],
    },

    district17: {
      name: "District 17",
      description:
        "Serving God and the community through faith, fellowship and Christian service.",

      hero:
        "/images/Districts/district17/hero.jpg",

      elder:
        "/images/Districts/district17/elder.jpg",

      elderName: "SALAASH LEWETT",

      deacons: [
        "CAROLINE WANJIRU MAINA",
        "ISAAC MUGENDI MBIUKI",
        "ELIZABETH WAHITO WATURI",
        "JACKLINE NYAMBURA KIMANI ",
      ],

      gallery: [
        "/images/Districts/district17/photo1.jpg",
        "/images/Districts/district17/photo2.jpg",
        "/images/Districts/district17/photo3.jpg",
      ],

      activities: [
        "Worship",
        "Bible study",
        "Evangelism",
        "Community outreach",
      ],
    },

    district18: {
      name: "District 18",
      description:
        "Serving God and the community through faith, fellowship and Christian service.",

      hero:
        "/images/Districts/district18/hero.jpg",

      elder:
        "/images/Districts/district18/elder.jpg",

      elderName: "PETER KANYARA KAMERI",

      deacons: [
        "DAVID MUTIRIA NDERITU",
        "SERAH NJERI KAMAU ",
        "RACHAEL WAITHIRA NGURE",
        "SHEIPHAH SHEUDA AYIEKO",
      ],

      gallery: [
        "/images/Districts/district18/photo1.jpg",
        "/images/Districts/district18/photo2.jpg",
        "/images/Districts/district18/photo3.jpg",
      ],

      activities: [
        "Worship",
        "Bible study",
        "Evangelism",
        "Community outreach",
      ],
    },

    district19: {
      name: "District 19",
      description:
        "Serving God and the community through faith, fellowship and Christian service.",

      hero:
        "/images/Districts/district19/hero.jpg",

      elder:
        "/images/Districts/district19/elder.jpg",

      elderName: "ROSALINE WANJIKU GATHAGE",

      deacons: [
        "MARY WAMBUI KIGOI ",
        "MAGDALENE WARUGURU MURAGE",
        "LUCY WAMBUI MAINA",
        "IRENE NJERI NJOROGE",
        "DERICKSON NG’ANG’A MUNGAI ",
      ],

      gallery: [
        "/images/Districts/district19/photo1.jpg",
        "/images/Districts/district19/photo2.jpg",
        "/images/Districts/district19/photo3.jpg",
      ],

      activities: [
        "Worship",
        "Bible study",
        "Evangelism",
        "Community outreach",
      ],
    },

    district20: {
      name: "District 20",
      description:
        "Serving God and the community through faith, fellowship and Christian service.",

      hero:
        "/images/Districts/district20/hero.jpg",

      elder:
        "/images/Districts/district20/elder.jpg",

      elderName: "CATHERINE WANJIRU MUTEMBEI",

      deacons: [
        "MARGARET MUKAMI WAMALWA ",
        "MARY NJOKI WAMBUGU",
        "MONICAH WAMBUI WAMBUGU",
        "WINNIE AKINYI OMOLLO",
      ],

      gallery: [
        "/images/Districts/district20/photo1.jpg",
        "/images/Districts/district20/photo2.jpg",
        "/images/Districts/district20/photo3.jpg",
      ],

      activities: [
        "Worship",
        "Bible study",
        "Evangelism",
        "Community outreach",
      ],
    },



  };

  const district = districts[districtName];

  if (!district) {
    return (
      <section className="district-not-found">
        <div className="container text-center">
          <h2>District Not Found</h2>
          <p>
            The district you are looking for could not be found.
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* ================= HERO ================= */}

      <section
        className="about-hero"
        style={{
          backgroundImage: `url(${district.hero})`,
        }}
      >
        <div className="about-hero-overlay">

          <div className="container">

            <div
              className="about-hero-content"
              data-aos="fade-up"
            >

              <span className="hero-breadcrumb">
                HOME / DISTRICTS / {district.name.toUpperCase()}
              </span>

              <h1>
                {district.name}
              </h1>

              <div className="hero-divider"></div>

              <p>
                {district.description}
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* ================= ABOUT ================= */}

      <section className="district-intro">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              ABOUT THE DISTRICT
            </span>

            <h2>
              Welcome to {district.name}
            </h2>

            <p>
              {district.description}
            </p>

          </div>

        </div>

      </section>


      {/* ================= ELDER ================= */}

      <section className="district-leader">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              DISTRICT LEADERSHIP
            </span>

            <h2>
              Elder In Charge
            </h2>

          </div>

          <div className="row justify-content-center">

            <div className="col-lg-5 col-md-7">

              <div className="district-leader-card">

                <img
                  src={district.elder}
                  alt={district.elderName}
                />

                <div className="district-leader-content">

                  <span>
                    Elder In Charge
                  </span>

                  <h3>
                    {district.elderName}
                  </h3>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= DEACONS ================= */}

      <section className="district-deacons">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              DISTRICT LEADERSHIP
            </span>

            <h2>
              District Deacons
            </h2>

          </div>

          <div className="row g-4">

            {district.deacons.map((deacon, index) => (

              <div
                className="col-lg-3 col-md-6"
                key={index}
              >

                <div className="deacon-card">

                  <div className="deacon-number">
                    {index + 1}
                  </div>

                  <h3>
                    {deacon}
                  </h3>

                  <p>
                    District Deacon
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= ACTIVITIES ================= */}

      <section className="district-activities">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              DISTRICT MINISTRY
            </span>

            <h2>
              Our Activities
            </h2>

          </div>

          <div className="row g-4">

            {district.activities.map((activity, index) => (

              <div
                className="col-lg-4 col-md-6"
                key={index}
              >

                <div className="activity-card">

                  <h3>
                    {activity}
                  </h3>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= GALLERY ================= */}

      <section className="district-gallery">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              DISTRICT GALLERY
            </span>

            <h2>
              Life in {district.name}
            </h2>

          </div>

          <div className="row g-4">

            {district.gallery.map((image, index) => (

              <div
                className="col-lg-4 col-md-6"
                key={index}
              >

                <div className="district-gallery-card">

                  <img
                    src={image}
                    alt={`${district.name} ${index + 1}`}
                  />

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="district-cta">

        <div className="container text-center">

          <span className="section-tag">
            PCEA
          </span>

          <h2>
            Serving Christ Together
          </h2>

          <p>
            Together we worship, serve, evangelize and
            build the church for the glory of God.
          </p>

        </div>

      </section>

    </>
  );
}

export default District;
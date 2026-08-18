import { FaMobileAlt, FaHeart } from "react-icons/fa";
import "./GivingMarquee.css";

function GivingMarquee() {
  return (
    <section className="giving-marquee">

      {/* Giving Label */}
      <div className="giving-label">
        <FaHeart />
        <span>GIVING</span>
      </div>

      {/* Scrolling Payment Information */}
      <div className="marquee-window">

        <div className="marquee-track">

          <div className="marquee-item">
            <FaMobileAlt />
            <strong>Tithes & Offerings</strong>

            <span className="separator">•</span>

            <span>Paybill: 123456</span>

            <span className="separator">•</span>

            <span>Account: PCEA NGONG PARISH</span>
          </div>

          <div className="marquee-item">
            <FaMobileAlt />
            <strong>Tithes & Offerings</strong>

            <span className="separator">•</span>

            <span>Paybill: 123456</span>

            <span className="separator">•</span>

            <span>Account: PCEA NGONG PARISH</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default GivingMarquee;
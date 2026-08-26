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
            <strong>Offerings</strong>

            <span className="separator">•</span>

            <span>Paybill: 247247</span>

            <span className="separator">•</span>

            <span>Account: 621621</span>
          </div>

          <div className="marquee-item">
            <FaMobileAlt />
            <strong>Development</strong>

            <span className="separator">•</span>

            <span>Paybill: 400200</span>

            <span className="separator">•</span>

            <span>Account: 40058268</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default GivingMarquee;
import "./BibleVerse.css";
import { useMemo } from "react";
import { FaQuoteLeft } from "react-icons/fa";


const verses = [
  {
    text: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to Him, and He will make your paths straight.",
    reference: "Proverbs 3:5–6",
  },
  {
    text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.",
    reference: "Jeremiah 29:11",
  },
  {
    text: "I can do all things through Christ who strengthens me.",
    reference: "Philippians 4:13",
  },
  {
    text: "The Lord is my shepherd; I shall not want.",
    reference: "Psalm 23:1",
  },
  {
    text: "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.",
    reference: "Joshua 1:9",
  },
  {
    text: "Let all that you do be done in love.",
    reference: "1 Corinthians 16:14",
  },
];


function BibleVerse() {

  const verse = useMemo(() => {
    return verses[Math.floor(Math.random() * verses.length)];
  }, []);


  return (
    <section className="bible-verse" data-aos="fade-up">

      <div className="verse-overlay">

        <div className="container">

          <div className="verse-content">

            <span className="section-tag">
              WEEKLY SCRIPTURE
            </span>


            <div className="quote-icon">
              <FaQuoteLeft />
            </div>


            <h2>
              "{verse.text}"
            </h2>


            <div className="verse-line"></div>


            <p className="verse-reference">
              {verse.reference} (NIV)
            </p>


          </div>

        </div>

      </div>

    </section>
  );
}


export default BibleVerse;
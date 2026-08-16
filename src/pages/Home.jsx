import Hero from "../components/Hero/Hero";
import Welcome from "../components/Welcome/Welcome";
import Services from "../components/Services/Services";
import Visit from "../components/Visit/Visit";
import BibleVerse from "../components/BibleVerse/BibleVerse";
import UpcomingEvents from "../components/UpcomingEvents/UpComingEvents";
import Theme2026 from "../components/Theme2026/Theme2026";

function Home() {
  return (
    <>
      <Hero />

      <Welcome />

      <Theme2026 />

      <Services />

      <Visit />

      <UpcomingEvents/>

      <BibleVerse />
    </>
  );
}

export default Home;
import Hero from "../components/Hero/Hero";
import Welcome from "../components/Welcome/Welcome";
import Services from "../components/Services/Services";
import Visit from "../components/Visit/Visit";
import BibleVerse from "../components/BibleVerse/BibleVerse";
import UpcomingEvents from "../components/UpcomingEvents/UpComingEvents";

function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <Services />
      <UpcomingEvents />
      <Visit/>
      <BibleVerse />
    </>
  );
}

export default Home;
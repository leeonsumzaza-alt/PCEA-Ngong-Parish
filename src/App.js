import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import TopBar from "./components/TopBar/TopBar";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Leadership from "./pages/Leadership";
import Sermons from "./pages/Sermons";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ChurchSchool from "./pages/ChurchSchool";
import WomenGuild from "./pages/WomenGuild";
import MensMinistry from "./pages/MenMinistry";
import ChristianEducation from "./pages/ChristianEducation";
import Youth from "./pages/Youth";
import Calendar from "./pages/Calendar";
import News from "./pages/News";
import ChoirMinistry from "./pages/ChoirMinistry";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import BackToTop from "./components/BackToTop/BackToTop";
import Brigade from "./pages/Brigade";
import Evangelism from "./pages/Evangelism";
import ICTMedia from "./pages/ICTMedia";
import JPRC from "./pages/JPRC";
import Health from "./pages/Health";
import Sports from "./pages/Sports";
import CSR from "./pages/CSR";



function App() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
      offset: 80,
      delay: 50,
    });

    window.scrollTo(0, 0);
  }, []);

  return (
    <BrowserRouter>
      <ScrollProgress />
      <TopBar />
      <Navbar />
      <BackToTop />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/sermons" element={<Sermons />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/church-school" element={<ChurchSchool />} />
          <Route path="/womans-guild" element={<WomenGuild />} />
          <Route path="/mens-ministry" element={<MensMinistry />} />
          <Route path="/christian-education" element={<ChristianEducation />} />
          <Route path="/youth" element={<Youth />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/news" element={<News />} />
          <Route path="/brigade" element={<Brigade />} />
          <Route path="/evangelism" element={<Evangelism />} />
          <Route path="/ict-media" element={<ICTMedia />} />
          <Route path="/jprc" element={<JPRC />} />
          <Route path="/health" element={<Health />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/csr" element={<CSR />} />
          <Route 
 path="/choir-ministry" 
 element={<ChoirMinistry />} 
/>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
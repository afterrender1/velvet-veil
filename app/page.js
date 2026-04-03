import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Intro from "./components/ui/Intro";
import ServicesHighlight from "./components/ServicesHighlight";
import MeetTheTeam from "./components/MeetTheTeam";
import Faq from "./components/Faq";
import Footer from "./components/Footer";



export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Intro/> */}
      <ServicesHighlight />
      <MeetTheTeam />
      <Faq/>
      <Footer/>

    </>
  );
}

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Intro from "./components/ui/Intro";
import ServicesHighlight from "./components/ServicesHighlight";



export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Intro/> */}
      <ServicesHighlight/>

    </>
  );
}

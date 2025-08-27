import { Hero } from "./components/Hero";
// import Navbar from "./components/navBar";
import { About } from "./components/About";
import { GetInvolved } from "./components/GetInvolved";
import { Community } from "./components/Community";
import { Questions } from "./components/Questions";
import { Team } from "./components/Team";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
    <Hero />
    <About />
    <GetInvolved />
    <Community />
    <Questions />
    <Team />
    <Contact />
    <Footer />
    </>
  );
}

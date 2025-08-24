import Image from "next/image";
import styles from "./page.module.css";
import { Hero } from "./components/Hero";
import Navbar from "./components/navBar";
import { About } from "./components/About";
import { GetInvolved } from "./components/GetInvolved";
import { Community } from "./components/Community";
import { Questions } from "./components/Questions";
import { Team } from "./components/Team";

export default function Home() {
  return (
    <>
    <Hero />
    <About />
    <GetInvolved />
    <Community />
    <Questions />
    <Team />
    </>
  );
}

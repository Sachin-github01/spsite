import styles from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Intro from "@/components/Intro/Intro";

export default function Home() {
  return (
    <>
      <Navbar />
      <Intro />
    </>
  );
}

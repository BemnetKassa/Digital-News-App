import Image from "next/image";
import styles from "./page.module.css";
import Hero from "../sections/Hero";
import Posts from "../sections/posts";

export default function Home() {
  return (
   <main id="main">
      <Hero />
      <Posts />
      
   </main>
  );
}

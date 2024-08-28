import Image from "next/image";
import styles from "./page.module.css";

import Container from "@/_components/container"
import ButtonCard from "@/_components/buttoncard";
import Display from "@/_components/display";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Calculator&nbsp;
        </p>
        </div>
        <Container>
          <Display value="0"></Display>
          <ButtonCard></ButtonCard>
        </Container>
        
    </main>
  );
}

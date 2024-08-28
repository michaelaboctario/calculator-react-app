import Image from "next/image";
import styles from "./page.module.css";

import Container from "../_components/container";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Calculator&nbsp;
        </p>
        </div>
        <Container/>
    </main>
  );
}

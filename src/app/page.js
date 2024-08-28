import Image from "next/image";
import styles from "./page.module.css";

import Container from "@/_components/container"
import ButtonCard from "@/_components/buttoncard";
import Display from "@/_components/display";
import Button from "@/_components/button";

const btnSymbols = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "=", ""],
];

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
          <ButtonCard>
          {
            btnSymbols.flat().map((btn, i) => {
              return (
                <Button
                  key={i}
                  className={btn === "=" ? "button-two" : ""}
                  value={btn}
                  /* onClick={() => {
                    console.log(`${btn} clicked!`);
                  }} */
                />
              );
            })
          }
          </ButtonCard>
        </Container>
        
    </main>
  );
}

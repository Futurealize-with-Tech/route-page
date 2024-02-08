import Container from "@/components/container/Container";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles['all']}>
      <Container text="卒業メンターの方" url="https://life-is-tech.com" />
      <Container text="それ以外の方" url="https://futurealize-with.tech" />
    </div>
  );
}

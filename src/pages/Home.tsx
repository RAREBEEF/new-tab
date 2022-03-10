import Header from "../components/Header";
import Nav from "../components/Nav";
import Search from "../components/Search";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Nav />
      <Header />
      <Search />
    </div>
  );
}

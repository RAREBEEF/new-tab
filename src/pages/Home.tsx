import { useEffect, useState } from "react";
import Bookmarks from "../components/Bookmarks";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Search from "../components/Search";
import styles from "./Home.module.scss";
import BookmarkModal from "../components/BookmarkModal";
import Clock from "../components/Clock";

export default function Home() {
  const [bookmarkModalActive, setBookmarkModalActive] = useState(false);

  const [time, setTime] = useState([0, ""]);

  useEffect(() => {
    const timeUpdate = setInterval(() => {
      const date = new Date();
      setTime([
        date.getHours() < 10 ? `0${date.getHours()}` : date.getHours(),
        date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes(),
        date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds(),
        date.getFullYear(),
        date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1,
        date.getDate() < 10 ? `0${date.getDate()}` : date.getDate(),
        date.getDay(),
      ]);
    }, 100);

    return () => {
      clearInterval(timeUpdate);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Nav />
      <Header time={time[0]} />
      <Clock time={time} />
      <Search />
      <Bookmarks setBookmarkModalActive={setBookmarkModalActive} />
      {bookmarkModalActive && (
        <BookmarkModal setBookmarkModalActive={setBookmarkModalActive} />
      )}
    </div>
  );
}

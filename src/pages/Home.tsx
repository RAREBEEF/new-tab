import { useState } from "react";
import Bookmarks from "../components/Bookmarks";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Search from "../components/Search";
import styles from "./Home.module.scss";
import BookmarkModal from "../components/BookmarkModal";

export default function Home() {
  const [bookmarkModalActive, setBookmarkModalActive] = useState(false);

  return (
    <div className={styles.container}>
      <Nav />
      <Header />
      <Search />
      <Bookmarks setBookmarkModalActive={setBookmarkModalActive} />
      {bookmarkModalActive && (
        <BookmarkModal setBookmarkModalActive={setBookmarkModalActive} />
      )}
    </div>
  );
}

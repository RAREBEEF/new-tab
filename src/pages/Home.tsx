import { useState } from "react";
// import Bookmarks from "../components/Bookmarks";
// import Header from "../components/Header";
import Nav from "../components/Nav";
// import Search from "../components/Search";
import styles from "./Home.module.scss";
import BookmarkModal from "../components/BookmarkModal";
import Widget from "../components/Widget";

export default function Home() {
  const [bookmarkModalActive, setBookmarkModalActive] = useState(false);
  const [settingModalActive, setSettingModalActive] = useState(false);

  return (
    <div className={styles.container}>
      {/* <Header isBlur={(bookmarkModalActive || settingModalActive) && true} />
      <Search isBlur={(bookmarkModalActive || settingModalActive) && true} />
      <Bookmarks
        setBookmarkModalActive={setBookmarkModalActive}
        isBlur={(bookmarkModalActive || settingModalActive) && true}
      /> */}
      <Widget
        isBlur={(bookmarkModalActive || settingModalActive) && true}
        setBookmarkModalActive={setBookmarkModalActive}
      />
      {bookmarkModalActive && (
        <BookmarkModal setBookmarkModalActive={setBookmarkModalActive} />
      )}
      <Nav
        settingModalActive={settingModalActive}
        setSettingModalActive={setSettingModalActive}
      />
    </div>
  );
}

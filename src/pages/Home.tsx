import { useState } from "react";
import Nav from "../components/Nav";
import styles from "./Home.module.scss";
import BookmarkModal from "../components/BookmarkModal";
import Widget from "../components/Widget";

export default function Home() {
  const [bookmarkModalActive, setBookmarkModalActive] = useState(false);
  const [settingModalActive, setSettingModalActive] = useState(false);

  return (
    <div className={styles.container}>
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

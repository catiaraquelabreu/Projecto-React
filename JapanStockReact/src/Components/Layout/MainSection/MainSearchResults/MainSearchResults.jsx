import React from "react";
import { useLocation } from "react-router-dom";
import NormalGrid from "../../Grid/NormalGrid/NormalGrid";
import styles from "./styles.module.scss";

function MainSearchResults() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("q");
  const category = queryParams.get("category");

  return (
    <div className={styles.div}>
      <NormalGrid searchQuery={searchQuery} category={category} />
      <div className={styles.map}></div>
    </div>
  );
}

export default MainSearchResults;

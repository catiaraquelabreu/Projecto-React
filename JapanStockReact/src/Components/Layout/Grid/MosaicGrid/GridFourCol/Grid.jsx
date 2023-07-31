import React, { useEffect, useState } from "react";
import InfoBox from "../../../../Features/InfoBox/InfoBox";
import { createClient } from "pexels";
import styles from "./styles.module.scss";

function Grid({ info }, prop) {
  const [photos, setPhotos] = useState([]);
  const client = createClient(
    "lipp6EwAzKTRaeYRpkClzZl43I9Y9MvqkSUJGyYWV691aQtXTOCnWmoo"
  );
  const fetchPhotos = async () => {
    try {
      const response = await client.photos.search({ query: "Japan cities" });
      setPhotos(response.photos);
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  };
  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <>
      <div className={styles.content}>
        {photos.map((photo, index) => {
          return index === 4 && info ? (
            <div key="info-box" className={styles[`image-${index + 1}`]}>
              <InfoBox />
            </div>
          ) : (
            <div className={styles[`image-${index + 1}`]} key={photo.id}>
              <img src={photo.src.portrait} alt={`Photo ${index}`} />
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Grid;

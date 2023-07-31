import React, { useEffect, useState } from "react";
import { createClient } from "pexels";
import styles from "./styles.module.scss";

function GridTwoCol(prop) {
  const [photos, setPhotos] = useState([]);
  const client = createClient(
    "lipp6EwAzKTRaeYRpkClzZl43I9Y9MvqkSUJGyYWV691aQtXTOCnWmoo"
  );
  const fetchPhotos = async () => {
    try {
      const response = await client.photos.search({ query: "Japan city" }); //conforme o que pesquisar diferentes cidades
      setPhotos(response.photos.slice(0, 8));
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  };
  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div className={styles.contentGrid}>
      {photos.map((photo, index) => {
        return (
          <div className={styles[`image-${index + 1}`]} key={photo.id}>
            <img src={photo.src.landscape} alt={`Photo ${index}`} />
          </div>
        );
      })}
    </div>
  );
}
export default GridTwoCol;

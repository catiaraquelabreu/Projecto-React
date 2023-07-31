import React, { useEffect, useState } from "react";
import { createClient } from "pexels";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const usePexelsClient = () => {
  const client = createClient(
    "lipp6EwAzKTRaeYRpkClzZl43I9Y9MvqkSUJGyYWV691aQtXTOCnWmoo"
  );
  return client;
};

const usePexelsPhotos = (searchQuery, category) => {
  const [photos, setPhotos] = useState([]);
  const [videos, setVideos] = useState([]);
  const client = usePexelsClient();

  const fetchMedia = async () => {
    try {
      let photosResponse, videosResponse;

      if (category === "All") {
        photosResponse = await client.photos.search({
          query: searchQuery,
          per_page: 4,
        });
        videosResponse = await client.videos.search({
          query: searchQuery,
          per_page: 4,
          orientation: "landscape",
        });
      } else if (category === "Photos") {
        photosResponse = await client.photos.search({
          query: searchQuery,
          media_type: "photo",
          orientation: "landscape",
          per_page: 8,
        });
      } else if (category === "Videos") {
        videosResponse = await client.videos.search({
          query: searchQuery,
          per_page: 8,
          orientation: "landscape",
        });
      }

      if (photosResponse) {
        const photos = photosResponse.photos.map((photo) => ({
          ...photo,
          type: "photo",
        }));
        setPhotos(photos);
      }

      if (videosResponse) {
        const videos = videosResponse.videos.map((video) => ({
          ...video,
          type: "video",
        }));
        setVideos(videos);
      }
    } catch (error) {
      console.error("Error fetching media:", error);
    }
  };

  useEffect(() => {
    fetchMedia();
  }, [searchQuery, category]);

  return { photos, videos };
};

function NormalGrid({ searchQuery, category, setSelectedMedia }) {
  const { photos, videos } = usePexelsPhotos(searchQuery, category);
  const media = [...photos, ...videos];

  return (
    <Link to={`/product`}>
      <div className={styles.contentGrid}>
        {media.map((item, index) => {
          const gridItemClassName =
            item.type === "video"
              ? styles[`video-${index + 1}`]
              : styles[`image-${index + 1}`];

          return (
            <div
              key={item.id}
              className={gridItemClassName}
              onClick={() => setSelectedMedia(item)}
              style={{ cursor: "pointer" }}>
              {item.type === "video" ? (
                <video controls>
                  <source src={item.video_files?.[1]?.link} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img src={item.src?.landscape} alt={`Media ${index}`} />
              )}
            </div>
          );
        })}
      </div>
    </Link>
  );
}

export default NormalGrid;

import { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

export const VideoJS = (props) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const { options, onReady } = props;

  useEffect(() => {
    console.log("VideoJS useEffect triggered");

    // Only initialize the player once
    if (!playerRef.current) {
      const videoElement = document.createElement("video");
      videoElement.classList.add("video-js", "vjs-big-play-centered");
      videoRef.current.appendChild(videoElement);

      // Initialize Video.js player
      const player = (playerRef.current = videojs(videoElement, options, () => {
        console.log("Video.js player is ready");
        if (onReady) {
          onReady(player); // Pass player to onReady callback
        }
      }));
    } else {
      // If player already exists, update its source and settings
      const player = playerRef.current;
      if (options.autoplay !== undefined) {
        player.autoplay(options.autoplay);
      }
      if (options.sources) {
        player.src(options.sources);
      }
    }

    // Do not dispose of the player on cleanup
    return () => {
      // No disposal of player here, it remains active
      console.log("Video.js player remains");
    };
  }, [options, onReady]);

  return <div ref={videoRef}></div>;
};

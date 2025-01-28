import React, { useRef } from "react";
import { VideoJS } from "../VideoJS"; // Import the VideoJS component

function HeaderVideo() {
  const playerRef = useRef(null);

  const videoJsOptions = {
    autoplay: true, // Ensure the video will autoplay
    controls: false,
    responsive: true,
    loop: true,
    fluid: true,
    sources: [
      {
        src: "src/assets/Fashion Show Clip.mp4", // Update with the correct path
        type: "video/mp4",
      },
    ],
  };

  const handlePlayerReady = (player) => {
    console.log("Player is ready");
    playerRef.current = player;

    // Handle player events
    player.on("waiting", () => {
      console.log("Player is waiting");
    });

    player.on("dispose", () => {
      console.log("Player will dispose");
    });
  };

  return <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />;
}

export default HeaderVideo;

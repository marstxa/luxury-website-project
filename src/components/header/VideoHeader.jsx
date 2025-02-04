import React from "react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";

function Video() {
  const videoOptions = {
    type: "video",
    sources: [
      {
        src: "/videos/FashionShowClip.mp4",
        type: "video/mp4",
      },
    ],
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      <Plyr
        source={videoOptions}
        options={{
          autoplay: true,
          muted: true,
          loop: { active: true },
          controls: [], // No controls
          keyboard: { focused: false, global: false },
          clickToPlay: false,
          hideControls: true,
          fullscreen: { enabled: false },
        }}
      />
    </div>
  );
}

export default Video;


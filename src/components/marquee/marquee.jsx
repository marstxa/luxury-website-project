import React from "react";
import Marquee from "react-fast-marquee";
import { PiDotOutlineFill } from "react-icons/pi";

const MarqueeComponent = () => {
  return (
    <div className="absolute overflow-hidden text-[153px] max-w-screen top-5/12 z-1">
      <Marquee speed={150} gradient={false} direction="right">
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          <span>Trending</span>
          <PiDotOutlineFill />
          <span>Fashion</span>
          <PiDotOutlineFill />
          <span>Styles</span>
          <PiDotOutlineFill />
          <span>Exclusivity</span>
          <PiDotOutlineFill />
          <span>Elegance</span>
          <PiDotOutlineFill />
          <span>Luxury</span>
          <PiDotOutlineFill />
          <span>Couture</span>
          <PiDotOutlineFill />
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeComponent;

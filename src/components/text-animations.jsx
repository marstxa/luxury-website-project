import { useEffect } from 'react';
import Textify from 'textify.js/dist/Textify.min.css';

new Textify(
  {
    el: ".animation-0",
    animation: {
      stagger: 0.025,
      duration: 0.7,
      ease: "expo.inOut",
      animateProps: { opacity: 0, scale: 0 },
    },
  },
  gsap
);

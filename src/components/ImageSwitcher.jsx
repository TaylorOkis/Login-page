import { useEffect, useState } from "react";
import "./ImageSwitcher.css";
import LoginArt from "../assets/Login Art.png";
import LoginArt1 from "../assets/Login Art-1.png";
import LoginArt2 from "../assets/Login Art-2.png";
import LoginArt3 from "../assets/Login Art-3.png";
import LoginArt4 from "../assets/Login Art-4.png";

const images = [
  `${LoginArt}`,
  `${LoginArt1}`,
  `${LoginArt2}`,
  `${LoginArt3}`,
  `${LoginArt4}`,
];

export default function ImageSwitcher() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 20000);

    return () => clearInterval(timer);
  }, []);

  return (
    <img
      key={currentIndex}
      src={images[currentIndex]}
      alt="SlideShow"
      className="fade-image"
    />
  );
}

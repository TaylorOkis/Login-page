import { useEffect, useState } from "react";
import "./ImageSwitcher.css";
import LoginImage from "../assets/Login Art.png";

const images = [
  "src/assets/Login Art.png",
  "src/assets/Login Art-1.png",
  "src/assets/Login Art-2.png",
  "src/assets/Login Art-3.png",
  "src/assets/Login Art-4.png",
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

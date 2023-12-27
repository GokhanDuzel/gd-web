import { useState } from "react";
import "./ImageSlider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft, faCircleRight } from "@fortawesome/free-solid-svg-icons";

const ImageSlider = ({ images }) => {
  const [currentImg, setCurrentImg] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrentImg(currentImg === length - 1 ? 0 : currentImg + 1);
  };

  const prevSlide = () => {
    setCurrentImg(currentImg === 0 ? length - 1 : currentImg - 1);
  };

  console.log(currentImg);

  if (!Array.isArray(images) || length <= 0) {
    return null;
  }

  return (
    <div className="slider">
      <FontAwesomeIcon
        className="left-arrow"
        icon={faCircleLeft}
        onClick={prevSlide}
      />
      <FontAwesomeIcon
        className="right-arrow"
        icon={faCircleRight}
        onClick={nextSlide}
      />
      {images.map((image, index) => {
        return (
          <div
            className={index === currentImg ? "slide active" : "slide"}
            key={index}
          >
            {" "}
            {index === currentImg && (
              <img className="image" src={image} alt="project" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ImageSlider;

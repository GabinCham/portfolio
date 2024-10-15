import React, { useState } from "react";
import Carousel from "react-simply-carousel";
import "../styles/Brands.css";

export default function Brands() {
    const [activeSlide, setActiveSlide] = useState(0);

    const images = [
      { src: "assets/brands_carousel/peugeot.svg", width: 37, height: 60 },
      { src: "assets/brands_carousel/citroen.svg", width: 40, height: 60 },
      { src: "assets/brands_carousel/dyson.svg", width: 60, height: 60 },
      { src: "assets/brands_carousel/opel.svg", width: 60, height: 60 },
      { src: "assets/brands_carousel/jeep.svg", width: 60, height: 24 },
      { src: "assets/brands_carousel/ds.svg", width: 60, height: 37 },
      { src: "assets/brands_carousel/stellantis.svg", width: 60, height: 60 },
      { src: "assets/brands_carousel/wam.svg", width: 50, height: 60 },
    ];
  
    return (
        <div className="brands">
            <h2>In Monocle we trust</h2>
            <div className="carousel-container">
              <div className="carousel-overlay-left"></div>
                <Carousel
                    autoplay
                    activeSlideIndex={activeSlide}
                    onRequestChange={setActiveSlide}
                    itemsToShow={7}
                    delay={100}
                    speed={5000}
                >
                    {images.map((image, index) => (
                        <div
                            style={{
                                background: "transparent",
                                width: image.width,
                                height: image.height,
                                border: "none",
                                textAlign: "center",
                            }}
                            key={index}
                        >
                            <img
                                src={process.env.PUBLIC_URL + `/${image.src}`}
                                alt={`Image ${index}`}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                }}
                            />
                        </div>
                    ))}
                </Carousel>
                <div className="carousel-overlay-right"></div>
            </div>
        </div>
    );
}

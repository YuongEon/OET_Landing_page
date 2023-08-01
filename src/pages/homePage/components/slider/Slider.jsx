import React, { useEffect, useRef, useState } from "react";
import styles from "./slider.module.css";
import carouselData from "./data";
import { motion } from "framer-motion";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lineWidth, setLineWidth] = useState(20);

  const sliderRef = useRef(null);

  const currentIndexRef = useRef(currentIndex);
  currentIndexRef.current = currentIndex;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev >= carouselData.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setLineWidth(carouselData[currentIndex].width);
  }, [currentIndex]);

  const handleClick = (width, index) => {
    setLineWidth(width);
    setCurrentIndex(index);
  };

  return (
    <div className={styles.slider}>
      <div className={styles.slider_content + " relative"}>
        <div className={styles.bg + " flex"}>
          <div className={styles.label}></div>
          <div
            className={styles.inner}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {carouselData.map((data, index) => (
              <img
                key={index}
                src={data.image}
                alt=""
                className="inline-flex"
              />
            ))}
          </div>
        </div>
        <div className={styles.content + " absolute flex md_content z-[2]"}>
          {carouselData.map((data, index) => (
            <motion.div
              initial={{ opacity: 0, translateY: "50px" }}
              whileInView={{ opacity: 1, translateY: "0px" }}
              transition={{ duration: 0.4 }}
              viewport={{ once: false }}
              className={`${styles.content_title} ${styles.flex_cols_2} ${
                currentIndex === index ? styles.show : ""
              } flex`}
              key={index}
            >
              {data.carousel_title}
            </motion.div>
          ))}
          {carouselData.map((data, index) => (
            <motion.div
              initial={{ opacity: 0, translateX: "100px" }}
              whileInView={{ opacity: 1, translateX: "0px" }}
              transition={{ duration: 0.4 }}
              viewport={{ once: false }}
              className={`${styles.content_sub} ${
                currentIndex === index ? styles.show : ""
              }`}
              key={index}
            >
              {data.carousel_sub}
            </motion.div>
          ))}
        </div>
      </div>
      <div className={styles.slider_loading + " relative z-[2]"}>
        <div
          className={styles.loading_line}
          style={{ width: `${lineWidth}%` }}
          ref={sliderRef}
        ></div>
        <div className={styles.slider_btns_change_content + " text-white"}>
          {carouselData.map((data, index) => (
            <button
              key={index}
              className={`${styles.slider_btn_change_content} ${
                currentIndex === index ? styles.selected : ""
              }`}
              onClick={() => handleClick(data.width, index)}
            >
              {currentIndex === index ? (
                data.thumb_content
              ) : (
                <img
                  src={data.thumbnail}
                  alt=""
                  className={styles.btn_thumbnail_img}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;

import React, { useRef } from "react";
import styles from "./section4.module.css";
import { arrowLeft, arrowRight } from "../../../../assets/images";
import { newsData } from "./data";
import { nanoid } from "nanoid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { motion } from "framer-motion";

const Section4 = () => {
  const swiperRef = useRef(null);
  const scrollbarRef = React.useRef(null);
  const navigationRef = React.useRef(null);

  const handlePrevButtonClick = () => {
    const swiper = swiperRef.current.swiper;
    swiper.slidePrev();
  };

  const handleNextButtonClick = () => {
    const swiper = swiperRef.current.swiper;
    swiper.slideNext();
  };

  const handleSwiperInit = (swiper) => {
    const scrollbarEl = scrollbarRef.current;


    scrollbarEl.style.top = "calc(100% - 6px)";
    scrollbarEl.style.right = "0px";
    if(window.innerWidth <=1024){
      scrollbarEl.style.width = "100%";
    } else {
      scrollbarEl.style.width = "84%";
    }
    scrollbarEl.style.marginLeft = "auto";
  };

  return (
    <section className={styles.section}>
      <div className="md_content">
        <div className={styles.section_top}>
          <motion.div
            initial={{ opacity: 0, translateX: "-100px" }}
            whileInView={{ opacity: 1, translateX: "0px" }}
            transition={{ duration: 0.6 }}
            className={styles.title}
          >
            <h3>News</h3>
            <h2>Latest News</h2>
          </motion.div>
          <motion.button
            initial={{ opacity: 0, translateX: "100px" }}
            whileInView={{ opacity: 1, translateX: "0px" }}
            transition={{ duration: 1 }}
            className={styles.title}
          >
            See more
          </motion.button>
        </div>

        <div className={styles.section_content}>
          <motion.div
            initial={{ opacity: 0, translateX: "100px" }}
            whileInView={{ opacity: 1, translateX: "0px" }}
            transition={{ duration: 1 }}
            className={styles.card_list}
          >
            <Swiper
              breakpoints={{
                1441: {
                  width: 1441,
                  slidesPerView: 4.6,
                },
                1300: {
                  width: 1300,
                  slidesPerView: 4.2,
                },
                1280: {
                  width: 1280,
                  slidesPerView: 3.8,
                },
                1024: {
                  width: 1024,
                  slidesPerView: 3.4,
                },
                820: {
                  width: 820,
                  slidesPerView: 2.6,
                },
                375: {
                  width: 375,
                  slidesPerView: 1.3,
                },
              }}
              ref={swiperRef}
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={4}
              onInit={handleSwiperInit}
              scrollbar={{
                el: ".swiper-scrollbar",
                hide: false,
                draggable: true,
                dragSize: 500,
              }}
            >
              {newsData.map((item, index) => {
                const key = nanoid();
                return (
                  <SwiperSlide>
                    <div className={styles.card} key={key}>
                      <div className={styles.img_block}>
                        <img src={item.imgUrl} alt="" />
                      </div>
                      <div>
                        <p>
                          <span>{item.date}</span> / <span>{item.tag}</span>
                        </p>
                        <p>{item.content}</p>
                        <button>See more +</button>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <div className={styles.btn_list} ref={navigationRef}>
                <button onClick={handlePrevButtonClick}>
                  <img src={arrowLeft} alt="" />
                </button>
                <button onClick={handleNextButtonClick}>
                  <img src={arrowRight} alt="" />
                </button>
              </div>

              <div
                className="swiper-scrollbar my-custom-scrollbar"
                ref={scrollbarRef}
              >
                <div className="swiper-scrollbar-drag"></div>
              </div>
            </Swiper>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Section4;

import React, { useEffect, useState } from "react";
import styles from "./section3.module.css";
import {
  bg1,
  serviceImg1,
  serviceImg2,
  serviceImg3,
  serviceImg4,
  serviceImg5,
  serviceImg6,
  serviceImg7,
  serviceImg8,
} from "../../../../assets/images";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { serviceData } from "./data";
import { nanoid } from "nanoid";

const Section3 = () => {
  const [windowBreakNav, setWindowBreakNav] = useState(
    window.innerWidth <= 820
  );
  useEffect(() => {
    const handleResize = () => {
      setWindowBreakNav(window.innerWidth <= 820);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section
      className={styles.section}
      style={{
        backgroundImage: `url(${bg1})`
      }}
    >
      <div className="md_content">
        {windowBreakNav === false ? (
          <div
            className="flex md:flex-col md:gap-2"
            style={{ flexDirection: "column" }}
          >
            <div
              className="flex md:items-end md:gap-2"
              style={{ alignItems: "flex-end" }}
            >
              <motion.div
                initial={{ opacity: 0, translateX: "-100px" }}
                whileInView={{ opacity: 1, translateX: "0px" }}
                transition={{ duration: 0.6 }}
                className={styles.title}
              >
                <h3>Our Comprehensive Service</h3>
                <h2>Empowring Sustainability</h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, translateX: "-100px" }}
                whileInView={{ opacity: 1, translateX: "0px" }}
                transition={{ duration: 1 }}
                whileHover={{ scale: 1.2, zIndex: 10 }}
                className="relative"
              >
                <img src={serviceImg1} alt=""/>
                <p className={styles.card_content}>
                  Project Management and Engineering Services
                </p>
                <div
                  className="absolute flex justify-center items-center"
                  style={{ inset: 0 }}
                >
                  <button>+</button>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, translateX: "100px" }}
                whileInView={{ opacity: 1, translateX: "0px" }}
                transition={{ duration: 1.2 }}
                whileHover={{ scale: 1.2, zIndex: 10 }}
                className="relative"
              >
                <img
                  src={serviceImg2}
                  alt=""
                  style={{
                    maxHeight: "220px",
                    width: "360px",
                    objectFit: "cover",
                  }}
                />
                <p className={styles.card_content}>
                  Onshore Construction and Fabrication
                </p>
                <div
                  className="absolute flex justify-center items-center"
                  style={{ inset: 0 }}
                >
                  <button>+</button>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, translateX: "100px" }}
                whileInView={{ opacity: 1, translateX: "0px" }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.2, zIndex: 10 }}
                className="relative"
              >
                <img src={serviceImg3} alt="" />
                <p className={styles.card_content}>
                  Operations and Maintenance Services{" "}
                </p>
                <div
                  className="absolute flex justify-center items-center"
                  style={{ inset: 0 }}
                >
                  <button>+</button>
                </div>
              </motion.div>
            </div>
            <div className="flex md:gap-2">
              <div>
                <motion.div
                  initial={{ opacity: 0, translateX: "-100px" }}
                  whileInView={{ opacity: 1, translateX: "0px" }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ scale: 1.2, zIndex: 10 }}
                  className="relative"
                >
                  <img src={serviceImg4} alt="" />
                  <p className={styles.card_content}>
                    Onshore Construction and Fabrication
                  </p>
                  <div
                    className="absolute flex justify-center items-center"
                    style={{ inset: 0 }}
                  >
                    <button>+</button>
                  </div>
                </motion.div>
              </div>
              <div className="flex flex-col md:gap-2 ">
                <div className="flex md:gap-2 h-[260px]">
                  <motion.div
                    initial={{ opacity: 0, translateX: "-100px" }}
                    whileInView={{ opacity: 1, translateX: "0px" }}
                    transition={{ duration: 0.6 }}
                    whileHover={{ scale: 1.2, zIndex: 10 }}
                    className="relative h-full"
                  >
                    <img src={serviceImg5} alt="" className="h-full" />
                    <p className={styles.card_content}>
                      Removal and Decommissioning Services
                    </p>
                    <div
                      className="absolute flex justify-center items-center"
                      style={{ inset: 0 }}
                    >
                      <button>+</button>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, translateX: "100px" }}
                    whileInView={{ opacity: 1, translateX: "0px" }}
                    transition={{ duration: 0.6 }}
                    whileHover={{ scale: 1.2, zIndex: 10 }}
                    className="relative h-full"
                  >
                    <img src={serviceImg6} alt="" className="h-full" />
                    <p className={styles.card_content}>
                      Submarine Cable Installation
                    </p>
                    <div
                      className="absolute flex justify-center items-center"
                      style={{ inset: 0 }}
                    >
                      <button>+</button>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, translateX: "100px" }}
                    whileInView={{ opacity: 1, translateX: "0px" }}
                    transition={{ duration: 0.6 }}
                    whileHover={{ scale: 1.2, zIndex: 10 }}
                    className="relative h-full"
                  >
                    <img src={serviceImg7} alt="" className="h-full" />
                  </motion.div>
                  <div className={styles.text_rotate}>
                    <p>Building for green energy</p>
                  </div>
                </div>
                <div className="flex md:gap-2">
                  <motion.div
                    initial={{ opacity: 0, translateX: "-100px" }}
                    whileInView={{ opacity: 1, translateX: "0px" }}
                    transition={{ duration: 0.6 }}
                    whileHover={{ scale: 1.2, zIndex: 10 }}
                    className={styles.card_custom}
                  >
                    <h4>
                      10<span>+</span>
                    </h4>
                    <p>Engineers work in OEI</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, translateX: "100px" }}
                    whileInView={{ opacity: 1, translateX: "0px" }}
                    transition={{ duration: 0.6 }}
                    whileHover={{ scale: 1.2, zIndex: 10 }}
                    className="relative"
                  >
                    <img src={serviceImg8} alt="" />
                    <p className={styles.card_content}>
                      Personnel and Technician Services
                    </p>
                    <div
                      className="absolute flex justify-center items-center"
                      style={{ inset: 0 }}
                    >
                      <button>+</button>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, translateX: "100px" }}
                    whileInView={{ opacity: 1, translateX: "0px" }}
                    transition={{ duration: 0.6 }}
                    className={styles.btn}
                  >
                    <button>See more</button>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <motion.div
              initial={{ opacity: 0, translateX: "-100px" }}
              whileInView={{ opacity: 1, translateX: "0px" }}
              transition={{ duration: 0.6 }}
              className={styles.title}
            >
              <h3>Our Comprehensive Service</h3>
              <h2>Empowring Sustainability</h2>
            </motion.div>
            <Swiper
              breakpoints={{
                375: {
                  width: 375,
                  slidesPerView: 1.3,
                },
              }}
              spaceBetween={50}
              slidesPerView={4}
            >
              {serviceData.map((item, index) => {
                const key = nanoid();
                return (
                  <SwiperSlide>
                    <div key={key} className={styles.swiper_card + " relative"}>
                      <img src={serviceImg8} alt="" />
                      <p className={styles.card_content}>
                        Personnel and Technician Services
                      </p>
                      <div
                        className="absolute flex justify-center items-center"
                        style={{ inset: 0 }}
                      >
                        <button>+</button>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        )}
      </div>
      <div className={styles.running_text}>
        <p>
          Building For <span>Green</span> Energy
        </p>
        <p>
          Building For <span>Green</span> Energy
        </p>
      </div>
    </section>
  );
};

export default Section3;

import React, { useState } from "react";
import styles from "./section2.module.css";
import { arrowLeft, arrowRight } from "../../../../assets/images";
import { memberData, companyValueData } from "./data";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { motion } from "framer-motion";

const Section2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [counterOn, setCounterOn] = useState(false);

  const formatTextWithPlus = (text) => {
    return (
      <h4 className={styles.textFormatted}>
        <CountUp start={0} end={Number(text)} duration={6} delay={1} />
        <span>+</span>
      </h4>
    );
  };

  const handleChangeIndex = (index) => {
    setCurrentIndex(index);
  };

  const handleUpdateIndex = (index) => {
    if (index < 0) {
      index = memberData.length - 1;
    } else if (index >= memberData.length) {
      index = 0;
    }

    setCurrentIndex(index);
  };

  const handleScrollTrigger = (isVisible) => {
    if (isVisible) {
      setCounterOn(true);
    } else {
      setCounterOn(false);
    }
  };

  return (
    <ScrollTrigger
      onEnter={() => handleScrollTrigger(true)}
      onExit={() => handleScrollTrigger(false)}
    >
      <section className={styles.section}>
        <div className="md_content flex flex-col md:gap-y-10 ">
          <div className="flex xl:flex-row lg:flex-row min-[330px]:flex-col ">
            <motion.div
              initial={{ opacity: 0, translateX: "-100px" }}
              whileInView={{ opacity: 1, translateX: "0px" }}
              transition={{ duration: 0.6 }}
              className="grow flex flex-col "
            >
              <h4 className="xl:text-xl lg:text-lg font-bold">We are</h4>
              <h3 className="text-white lg:text-3xl">A Member Of</h3>

              <div className={styles.content}>
                <div
                  className={styles.inner  }
                  style={{ transform: `translateY(-${currentIndex * 100}px)` }}
                >
                  {memberData.map((item, index) => (
                    <div key={index}>
                      <p className="text-lg md:font-normal md:w-full">
                        {item.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className={
                  styles.arrow_btn +
                  " flex xl:justify-start xl:items-center lg:justify_start lg:items-center gap-2 max-[1023px]:hidden"
                }
              >
                <button onClick={() => handleUpdateIndex(currentIndex - 1)}>
                  <img src={arrowLeft} alt="" />
                </button>
                <button onClick={() => handleUpdateIndex(currentIndex + 1)}>
                  <img src={arrowRight} alt="" />
                </button>
              </div>
            </motion.div>

            <div
              className={
                styles.member +
                " flex md:justify-center md:items-center md:gap-x-6"
              }
            >
              {memberData.map((item, index) => (
                <motion.button
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.1 }}
                  onClick={() => handleChangeIndex(index)}
                  key={index}
                  className={`${
                    currentIndex === index
                      ? styles.memberActive
                      : styles.memberNotActive
                  }`}
                >
                  {currentIndex === index ? (
                    <img src={item.imgActive} alt="" className={styles.imgActive}/>
                  ) : (
                    <img src={item.imgNotActive} alt="" className={styles.imgNotActive}/>
                  )}
                </motion.button>
              ))}
            </div>
          </div>
          <div>
            <p className="lg:text-2xl xl:text-3xl md:font-bold lg:w-[800px] md:w-full">
              Company value reflects its ability to generate future profits,
              management, and market position.
            </p>
          </div>
          <div className={styles.number_count + " grid grid-flow-col justify-stretch"}>
            {companyValueData.map((item, index) => (
              <div key={index}>
                {formatTextWithPlus(String(item.value))}
                <p className="uppercase xl:text-base lg:text-sm  md:font-normal">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollTrigger>
  );
};

export default Section2;

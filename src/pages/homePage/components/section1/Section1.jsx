import React, { forwardRef } from "react";
import styles from "./section1.module.css";
import {
  about1,
  about2,
  about3,
  about4,
  layoutIcon1,
  layoutIcon3,
} from "../../../../assets/images";
import { motion } from "framer-motion";

const Section1 = () => {
  // 68px
  return (
    <section className={styles.section}>
      <div className="md_content flex sml:flex-col lg:flex-row relative">
        <motion.div
          initial={{ opacity: 0, translateX: "-100px" }}
          whileInView={{ opacity: 1, translateX: "0px" }}
          transition={{ duration: 1 }}

          className="md:w-[521px] md:mr-[50px] sml:mb-14"
        >
          <h3 className={styles.title + " md:mb-4"}>ABOUT US</h3>
          <div>
            <h3>
              <span>Offshore Energy</span>
            </h3>
            <h3>
              <span>Installation</span>
            </h3>
            <h3>
              OIE is your gateway to renewable energy and <span>Oil</span> &{" "}
              <span>Gas</span> solutions.
            </h3>
          </div>
          <button
            className={
              styles.btn + " md:text-white md:text-lg md:font-bold md:mt-8"
            }
          >
            See more
          </button>
        </motion.div>
        <div className="flex">
          <div>
            <div className="flex md:justify-between">
              <motion.div
                initial={{ opacity: 0.7, translateX: "-50px" }}
                whileInView={{ opacity: 1, translateX: "0px" }}
                transition={{ duration: 1, delay: 0 }}
                
                className={`${styles.el1}`}
              >
                <img src={about1} alt="" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0.7, translateX: "-30%" }}
                whileInView={{ opacity: 1, translateX: "0%" }}
                transition={{ duration: 1, delay: 0 }}
                
                className={`md:ml-3`}
              >
                <img src={about2} alt="" />
              </motion.div>
            </div>
            <div className="flex md:justify-between">
              <motion.div
                initial={{ translateX: "-150px" }}
                whileInView={{ translateX: "0px" }}
                transition={{ duration: 1, delay: 0.1 }}
                
                className={styles.block_radius_bottom_right}
              ></motion.div>
              <motion.div
                initial={{ opacity: 0.7, translateX: "-30%" }}
                whileInView={{ opacity: 1, translateX: "0%" }}
                transition={{ duration: 1, delay: 0 }}
                style={{ transform: "translateX(0)" }}
                
                className="md:mt-3"
              >
                <img src={about3} alt="" />
              </motion.div>
            </div>
          </div>
          <div className="flex md:flex-col md:justify-between">
            <motion.div
              initial={{ opacity: 0.7, translateX: "80px" }}
              whileInView={{ opacity: 1, translateX: "0px" }}
              transition={{ duration: 1, delay: 0 }}
              
            >
              <motion.div
                initial={{ translateX: "50px" }}
                whileInView={{ translateX: "0px" }}
                transition={{ duration: 1, delay: 0 }}
                
                className={styles.block_radius_top_left}
              ></motion.div>
            </motion.div>
            <motion.div
              initial={{ translateX: "100px" }}
              whileInView={{ translateX: "0px" }}
              transition={{ duration: 1, delay: 0 }}
              
              className="md:ml-3 md:mt-10"
            >
              <img src={about4} alt="" />
            </motion.div>
            <motion.div
              initial={{ translateX: "50px" }}
              whileInView={{ translateX: "0px" }}
              transition={{ duration: 1, delay: 0.1 }}
              
              className={styles.block_radius_bottom_left + " md:ml-3"}
            ></motion.div>
          </div>
        </div>
      </div>
      <div className={styles.icon_bg}>
        <motion.div initial={{rotate: "80deg"}} whileInView={{rotate: "0deg"}} transition={{duration: 1}} className={styles.icon_bg_wrap}>
          <img src={layoutIcon3} alt="" />
        </motion.div>
      </div>
      <div className={styles.running_text}>
        <p>
          offshore <span>Energy</span> installation
        </p>
        <p>
          offshore <span>Energy</span> installation
        </p>
      </div>
    </section>
  );
};

export default Section1;

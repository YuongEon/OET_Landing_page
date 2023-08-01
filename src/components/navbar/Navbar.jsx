import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import { closeIcon, logo, menuMobileIcon } from "../../assets/images";
import { menuData } from "./data";
import { nanoid } from "nanoid";
import { motion } from "framer-motion";

const Navbar = () => {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [currentIndexSub, setCurrentIndexSub] = useState(0);
  const windowBreakNav = window.innerWidth <= 820;
  const handleMenuItemHover = (index) => {
    setCurrentIndex(index);
    console.log(index);
  };

  useEffect(() => {
    if(!windowBreakNav){
      const handleScroll = () => {
        setCurrentIndex(-1);
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <>
      {!windowBreakNav && (
        <nav
          className={`${styles.navbar} ${
            currentIndex !== -1 ? styles.active : ""
          }  pt-3 z-10`}
        >
          <div className="md_content md:gap-2.5">
            <div
              className="md:flex md:justify-between mb-2.5 md:items-center"
              onMouseEnter={() => handleMenuItemHover(-1)}
            >
              <div className={styles.img_block}>
                <img src={logo} alt="logo" />
              </div>
              <a
                href="tel:+009875466"
                className={styles.contact_btn + " block"}
              >
                <button className="md:text-sm text-white md:font-semibold">
                  +00 9875466
                </button>
              </a>
            </div>
            <div>
              <ul
                className={
                  styles.menu +
                  " md:grid md:grid-flow-col md:justify-stretch text-white md:gap-x-6 md:text-lg md:font-bold"
                }
              >
                {menuData.map((item, index) => {
                  const key = nanoid();
                  return (
                    <li
                      onMouseEnter={() => handleMenuItemHover(index)}
                      className={styles.menu_items + " pb-3 z-10"}
                      key={key}
                    >
                      {item.title}
                    </li>
                  );
                })}
              </ul>
            </div>
            {currentIndex !== -1 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className={styles.mega_menu}
              >
                <div className={styles.mega_menu_wrap + " md_content flex"}>
                  <div className={styles.sub_menu}>
                    <ul>
                      {menuData[currentIndex].mega_menu.map((item, index) => {
                        const key = nanoid();
                        return (
                          <li
                            key={key}
                            onClick={() => setCurrentIndexSub(index)}
                          >
                            {item.title}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className={styles.show_content_block}>
                    <div className={styles.img_blog}>
                      <img
                        src={
                          menuData[currentIndex].mega_menu[currentIndexSub]
                            .imgUrl
                        }
                        alt=""
                      />
                    </div>
                    <div className={styles.content}>
                      <h3>
                        {
                          menuData[currentIndex].mega_menu[currentIndexSub]
                            .title
                        }
                      </h3>
                      <p>
                        {
                          menuData[currentIndex].mega_menu[currentIndexSub]
                            .content
                        }
                      </p>
                      <button>See More +</button>
                    </div>
                  </div>
                </div>
                <div></div>
              </motion.div>
            )}
          </div>
        </nav>
      )}
      {windowBreakNav && (
        <nav
          className={`${styles.navbar} ${
            currentIndex !== -1 ? styles.active : ""
          }  pt-3 z-10 w-full h-full pb-4`}
        >
          <div className="md_content md:gap-2.5">
            <div
              className="sml:flex sml:justify-between sml-2.5 sml:items-center"
              onMouseEnter={() => handleMenuItemHover(-1)}
            >
              <div className={styles.img_block}>
                <img src={logo} alt="logo" />
              </div>
              <div>
                {currentIndex === -1 ? (
                  <button onClick={() => setCurrentIndex(0)}>
                    <img src={menuMobileIcon} alt="" />
                  </button>
                ) : (
                  <button onClick={() => setCurrentIndex(-1)}>
                    <img src={closeIcon} alt=""/>
                  </button>
                )}
              </div>
            </div>
            <div></div>
            {currentIndex !== -1 && (
              <motion.div
                initial={{ translateX: 100 }}
                animate={{ translateX: 0 }}
                exit={{ translateX: 100 }}
                transition={{ duration: 0.3 }}
                className={styles.mobile_menu}
              >
                <div className={styles.mobile_menu_wrap + " md_content flex"}>
                  <ul>
                    {menuData.map((item, index) => {
                      const key = nanoid()
                      return (
                        <li key={key}>{item.title}</li>
                      )
                    })}
                  </ul>
                </div>
                <div></div>
              </motion.div>
            )}
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;

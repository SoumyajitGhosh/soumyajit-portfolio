import { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
// import { urlFor, client } from '../../client';
import { projects } from "../../constants";
import "./Work.scss";

type Tags = {
  name: string;
  color: string;
};
type Project = {
  name: string;
  description: string;
  tags: Tags[];
  image: string;
  deploy_link?: string;
  source_code_link: string;
};

// Utility function to check if the device is mobile
const isMobileDevice = () => {
  return window.innerWidth <= 768; // Change the width as per your requirement
};

const Work = () => {
  const [works, setWorks] = useState<Project[]>([]);
  const [page, setPage] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(isMobileDevice());

  useEffect(() => {
    setWorks(projects);

    // Add a resize event listener to handle screen size changes
    const handleResize = () => {
      setIsMobile(isMobileDevice());
    };
    window.addEventListener("resize", handleResize);

    // Clean up event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Adjust worksPerPage based on device type
  const worksPerPage = isMobile ? 1 : 3;

  // Calculate the displayed works based on the current page
  const displayedWorks = works.slice(
    page * worksPerPage,
    page * worksPerPage + worksPerPage
  );

  return (
    <>
      <h2 className="head-text">
        Personal <span>Projects</span> Section
      </h2>

      <motion.div
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {displayedWorks.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={work.image} alt={work.name} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                {work.deploy_link ? (
                  <a href={work.deploy_link} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                ) : null}
                <a
                  href={work.source_code_link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="work-tags">
              {work.tags.map((tag, idx) => (
                <p key={idx} className={`${tag.color}`}>
                  #{tag.name}
                </p>
              ))}
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.name}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
      <div
        className="app__navigation"
        style={{ display: "flex", flexDirection: "row" }}
      >
        {Array.from(
          { length: Math.ceil(works.length / worksPerPage) },
          (_, index) => (
            <div
              onClick={() => setPage(index)}
              key={`section-${index}`}
              className={`app__navigation-dot ${
                page === index ? "active" : ""
              }`}
              style={{
                backgroundColor: page === index ? "#313BAC" : "#C4C4C4",
                cursor: "pointer",
              }}
            ></div>
          )
        )}
      </div>
    </>
  );
};

export default AppWrap({
  Component: MotionWrap(Work, "app__works"),
  idName: "work",
  classNames: "app__primarybg",
});

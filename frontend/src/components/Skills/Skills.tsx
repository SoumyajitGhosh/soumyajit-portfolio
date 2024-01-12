import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
// import { urlFor, client } from '../../client';
import { techExperiences, technologies } from "../../constants";
import "./Skills.scss";

type Experiences = {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
};

type Technologies = {
  name: string;
  icon: string;
};

const Skills = () => {
  const [experiences, setExperiences] = useState<Experiences[]>([]);
  const [skills, setSkills] = useState<Technologies[]>([]);

  useEffect(() => {
    setExperiences(techExperiences);
    setSkills(technologies);
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                // style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        {/* <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.date}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.date}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experiences.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.title}
                      key={work.title}
                    >
                      <h4 className="bold-text">{work.title}</h4>
                      <p className="p-text">{work.company_name}</p>
                    </motion.div>
                    
                    <ReactTooltip
                      id={work.title}
                      effect="solid"
                      // effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {"work.points"}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div> */}
        
      </div>
    </>
  );
};

export default AppWrap({
  Component: MotionWrap(Skills, "app__skills"),
  idName: "skills",
  classNames: "app__whitebg",
});

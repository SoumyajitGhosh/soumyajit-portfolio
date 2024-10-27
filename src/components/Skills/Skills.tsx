import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { AppWrap, MotionWrap } from "../../wrapper";
// import { urlFor, client } from '../../client';
import { techExperiences, technologies } from "../../constants";
import "./Skills.scss";
import "react-vertical-timeline-component/style.min.css";

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
        <div className="vertical-timeline__main">
          <VerticalTimeline lineColor="rgba(107, 118, 136, 0.6)" animate={true}>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                className="vertical-timeline__element-hover"
                contentArrowStyle={{
                  borderRight: "7px solid rgba(107, 118, 136, 0.8)",
                }}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className="vertical-element__icon-div">
                    <img src={experience.icon} alt={experience.company_name} />
                  </div>
                }
              >
                  <h3 className="text-white text-[24px] font-bold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-secondary text-[16px] font-semibold"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                <ul className="mt-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-white-100 text-[14px] pl-1 tracking-wider"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default AppWrap({
  Component: MotionWrap(Skills, "app__skills"),
  idName: "skills",
  classNames: "app__whitebg",
});

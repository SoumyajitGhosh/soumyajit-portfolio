import { useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
// import { urlFor, client } from "../../client";

const About = () => {
  //   const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    // const query = '*[_type == "abouts"]';
    // client.fetch(query).then((data) => {
    //   setAbouts(data);
    // });
  }, []);

  return (
    <>
      <h2 className="head-text">
        {/* I Know that <span>Good Design</span> <br />
        means <span>Good Business</span> */}
        <span>Code whisperer</span> by day, <br />
        <span>gym bro</span> by night! 🚀
      </h2>

      <div className="app__profiles">
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: "tween" }}
          className="app__profile-item"
        >
          {/* <img src={urlFor(about.imgUrl)} alt={about.title} /> */}
          <h2 className="head-text" style={{ marginTop: 20 }}>
            Overview
          </h2>
          <p className="bold-text" style={{ marginTop: 10 }}>
            Highly motivated Software Engineer with a strong background spanning
            over two years, blending technical expertise with strategic
            problem-solving acumen. Adept at translating complex ideas into
            clear, concise communication. Recognized for a steadfast commitment
            to accountability, transparent collaboration, and punctuality,
            embodying a proactive and innovative approach to software
            engineering.
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap({
  Component: MotionWrap(About, "app__about"),
  idName: "about",
  classNames: "app__whitebg",
});

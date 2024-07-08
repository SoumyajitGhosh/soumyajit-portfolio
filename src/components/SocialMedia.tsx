import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <a href="https://twitter.com/sjit_ghosh9" target="_blank">
      <BsTwitter />
    </a>
    <a href="https://www.facebook.com/soumyajit.ghosh.56211" target = "_blank">
      <FaFacebookF />
    </a>
    <a href="https://www.instagram.com/_soumyajit.ghosh_/" target = "_blank">
      <BsInstagram />
    </a>
  </div>
);

export default SocialMedia;

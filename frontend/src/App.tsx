import "./App.scss";
import { Navbar } from "./components";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Skills from "./components/Skills/Skills";
import Testimonial from "./components/Testimonial/Testimonial";
import Work from "./components/Work/Work";

function App() {
  return (
    <div className="app">
      <Navbar />
      {Header}
      {About}
      {Work}
      {Skills}
      {Testimonial}
      {Footer}
    </div>
  );
}

export default App;

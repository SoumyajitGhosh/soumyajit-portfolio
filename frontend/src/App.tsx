import "./App.scss";
import { Navbar} from "./components";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="app">
      <Navbar/>
      {Header}
    </div>
  );
}

export default App;

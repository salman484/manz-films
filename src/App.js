import "./App.css";
import Intro from "./components/Intro";
import NavigationBar from "./components/NavigationBar";
import Trendings from "./components/Trendings";
import "./style/landingPage.css";
import Superhero from "./components/Superhero";

function App() {
  return (
    <div>
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>

      <div className="trendings">
        <Trendings />
      </div>

      <div className="superhero">
        <Superhero />
      </div>
    </div>
  );
}

export default App;

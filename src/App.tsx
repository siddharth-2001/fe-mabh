import "./App.css";
import bg_shape_left from "./assets/bg_shape_left.png";
import bg_shape_right from "./assets/bg_shape_right.png";
import HeroSection from "./components/HeroSection/HeroSection";
import Page1 from "./components/home/Page1/Page1";

function App() {
  return (
    <>
      <div className="app">
        <div className="bg-shape-left">
          <img src={bg_shape_left} alt="" />
        </div>
        <div className="bg-shape-right">
          <img src={bg_shape_right} alt="" />
        </div>
        <HeroSection />
        <Page1 />
      </div>
    </>
  );
}

export default App;

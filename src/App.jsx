import "../public/css/main.css";
// Components
import HeroSection from "./components/UI/HeroSection";
import HeroSectionFinal from "./components/UI/HeroSectionFinal";
import NavBar from "./components/UI/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <HeroSectionFinal />
    </div>
  );
}

export default App;

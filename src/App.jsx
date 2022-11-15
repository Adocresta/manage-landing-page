import "../public/css/main.css";
import Feature from "./components/UI/Feature";
// Components
import HeroSection from "./components/UI/HeroSection";
import NavBar from "./components/UI/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Feature />
    </div>
  );
}

export default App;

import "./App.css";
import Navigation from "./components/navigation/navigation";
import Home from "./components/home/home";
import Contact from "./components/contact/contact";
import About from "./components/about/about";
import Team from "./components/team/team";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <About />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

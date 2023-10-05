import "./App.css";
import About from "./components/About";
import Blog from "./components/Blog";
import Docs from "./components/Docs";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import News from "./components/News";
import Service from "./components/Service";

function App() {
  return (
    <>
      <Hero />
      <About />
      <Service />
      <Blog />
      <Docs />
      <News />
      <Faqs />
      <Footer />
    </>
  );
}

export default App;

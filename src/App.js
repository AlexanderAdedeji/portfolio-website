import { About, Work, Footer, Header, Skills, Testimonials } from "./container";
import { NavBar } from "./components";
import "./App.scss";
const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;

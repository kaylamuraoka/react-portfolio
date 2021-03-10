import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { ViewportProvider } from "./utils/viewportContext";

function App() {
  return (
    <ViewportProvider>
      <Router>
        <Navbar />
        <Wrapper>
          <Route exact path="/react-portfolio/" component={Home} />
          <Route exact path="/react-portfolio/about" component={About} />
          <Route exact path="/react-portfolio/resume" component={Resume} />
          <Route exact path="/react-portfolio/projects" component={Projects} />
          <Route exact path="/react-portfolio/contact" component={Contact} />
        </Wrapper>
        <Footer />
      </Router>
    </ViewportProvider>
  );
}

export default App;

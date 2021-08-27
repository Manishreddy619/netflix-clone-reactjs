import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Gallery1 from "./components/Gallery1";
import Gallery2 from "./components/Gallery2";
import Gallery3 from "./components/Gallery3";
import SearchQeury from "./components/SearchQeury";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Gallery1 />
      <Gallery2 />
      <Gallery3 />
      <Footer />
    </div>
  );
};
export default App;

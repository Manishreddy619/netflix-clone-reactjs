import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-elastic-carousel";
import MovieCard from "./components/MovieCard";
const App = () => {
  let breakPoints = [
    { width: 500, itemsToShow: 1 },
    { width: 700, itemsToShow: 2 },
    { width: 1200, itemsToShow: 4 },
    { width: 1500, itemsToShow: 6 },
  ];
  return (
    <div className="App mt-4">
      <h1>Hello Manish</h1>
      <Carousel breakPoints={breakPoints}>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </Carousel>
    </div>
  );
};

export default App;

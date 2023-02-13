import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import MoviesList from "./components/MoviesList/MoviesList";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Navbar />
      <Container className="mt-5">
        <MoviesList />
      </Container>
    </div>
  );
}

export default App;

import { Container } from "react-bootstrap";
import MoviesList from "./components/MoviesList/MoviesList";
import Navbar from "./components/Navbar/Navbar";

function App() {
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

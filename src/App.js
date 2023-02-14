import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import MoviesList from "./components/MoviesList/MoviesList";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container className="mt-5">
        <Routes>
          <Route path="/" element={<MoviesList />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;

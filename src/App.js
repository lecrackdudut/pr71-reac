import HelloWorld from './HelloWorld';
import MovieList from './MovieList';
import movies from './movies'

function App() {
  return (
    <>
      <HelloWorld name="Baptiste"/>
      <HelloWorld name="Walid"/>
      <HelloWorld name="Matthis"/>
      <MovieList movies={movies} />
    </>
  );
}

export default App;

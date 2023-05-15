import './App.css';
import { useState, useEffect} from 'react';
import MovieCom from './MovieCom';
import searchBtn from './images/magnifiying-glass.png'

//3706d816

const api_url = 'http://www.omdbapi.com?apikey=3706d816'


function App() {
  const [movies, setMovies] = useState([])
  const [searchMoviesName, setSearchMoviesName] = useState('')


  const searchMovies = async(title) =>{                                      //fetch(`${api_url}&s=${title}`)
    try{                                                                    //.then(res => res.json())
         const response = await fetch(`${api_url}&s=${title}`)             //.then(data=> console.log(data))
          const data = await response.json()                              //.catch(error => console.error(error))
          setMovies(data.Search)
    }catch (error){
      console.error(error)
    }          
          
  }
  useEffect(() =>{
    searchMovies('harry potter')
  },[])




  return (
    <div className="App">

      <h1 className='text-zinc-300 text-5xl mt-11 text-center'>Movie Land</h1>

      <div className='search text-center grid grid-cols-[3fr_0.4fr] w-[45%] mx-auto my-5 gap-3 max-md:grid-cols-[3fr_0.6 fr] max-md:w-9/12'>
        <input
        placeholder='Search for movies'
        value={searchMoviesName}
        onChange={(e) => setSearchMoviesName(e.target.value)}
        className='p-2.5 rounded'
        />
        <button
        onClick={() =>searchMovies(searchMoviesName)}
        disabled={!searchMoviesName}
        className='bg-neutral-900 rounded hover:opacity-80'
        >
          <img
          className='w-6 mx-auto my-0' 
          src={searchBtn}
          />
        </button>
      </div>
      <div className='movies-container w-9/12 my-0 mx-auto grid grid-cols-3 gap-8 max-lg:w-10/12 max-md:grid-cols-2'>
      {
        movies?.length > 0 ? 
        (
          movies.map((movie)=> <MovieCom movie={movie} key={movie.imdbID}/>)
        ):(
        <h2>No movie found</h2>
        )
      }
      </div>
    </div>
  );
}

export default App;

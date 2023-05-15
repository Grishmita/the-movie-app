import React from "react"

const MovieCom = ({movie}) =>{
    return(
          <div className="movies-div rounded">
                <div>
                     <img className="h-80 object-fill w-full rounded-tl rounded-tr"
                     src={movie.Poster !=='N/A' ? movie.Poster : 'https://via.placeholder.com/400'}  
                     alt={movie.Title}
                     />
                </div>
                <div className="py-3.5 px-4">
                    <h3 className="text-orange-500 font-medium"><span className="font-normal">Movie Name :- </span>{movie.Title}</h3>
                    <span className="text-orange-600 font-medium py-4 block"><span className="font-normal">Movie Or Series :-</span> {movie.Type}</span>
                    <p className="text-orange-600 font-medium"><span className="font-normal">Year :- </span>{movie.Year}</p>
                </div>
          </div>
    )
}

export default MovieCom
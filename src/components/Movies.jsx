import {useState} from "react"

const genres = [
    "horror","animation",
    "classic", "comedy", "drama",
    "family", "mystery"
]

export default function Movies(){
    const [movieList, setMovieList] = useState();
    const getMovies = (genre)=>{
        fetch(`https://api.sampleapis.com/movies/${genre}`)
        .then(res => res.json())
        .then(setMovieList)
        .catch(console.error)
    }
    return(
        <>
            <div className="button-list">
                {
                    genres.map((genre)=> (
                        <button key={genre} onClick={()=> getMovies(genre)}>{genre.toUpperCase()}</button>
                    ))
                }
            </div>
            <div className="movie-list">
                {
                    !movieList
                    ? <p>Loading...</p>
                    : movieList.map(movie => (
                        <p key={movie.id}>{movie.title}</p>
                    ))
                }
            </div>
        </>
    )
}
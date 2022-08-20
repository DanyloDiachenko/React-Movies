import React from "react";
import Movies from "../components/Movies/Movies";
import Preloader from "../components/Preloader";
import { Search } from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {

    state = {
        movies: [],
        loading: true,
    }

    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search, loading: false }))
    }

    searchMovies = (movie, type = 'all') => {
        this.setState({ loading: true })
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${movie}${type !== 'all' ? `&type=${type}` : ''}`)
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search, loading: false }))
    }

    render() {

        const { movies, loading } = this.state;

        return (
            <section className="main pb-5">
                <div className="container main__content" >
                    <Search searchMovies={this.searchMovies} />
                    {loading ? (
                        <Preloader />
                    ) : <Movies movies={movies} />}
                </div>
            </section>
        )
    }
}

export { Main }
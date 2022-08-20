import React from "react";

export default function Movie(props) {
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster
    } = props;

    return (
        <>
            <div className="col-xxl-3 col-xl-4 col-md-6 col-sm-12 mt-4 d-flex justify-content-center">
                <article className="one_movie">
                    {poster === 'N/A' ? (
                        <img src={`https://via.placeholder.com/300x425?text=${title}`} />)
                        : (
                            <img src={poster} />)}
                    <div className="mt-3 one_movie__title">{title}</div>
                    <div className="d-flex justify-content-between mt-4 mb-2 px-4">
                        <div className="one_movie__year">{year}</div>
                        <div className="one_movie__type">{type}</div>
                    </div>
                </article>
            </div>
        </>
    )
}

import React, { Component } from "react";

class Search extends Component {
    state = {
        search: "",
        type: "all",
    };

    handleFilter = (event) => {
        this.setState(() => ({ type: event.target.dataset.type }), () => {
            this.props.searchMovies(this.state.search, this.state.type)
        });
    };

    render() {
        return (
            <section>
                <div className="input_search pt-3">
                    <input
                        placeholder="Write a name of film..."
                        type="search"
                        name="search"
                        className="input_search__search mt-4"
                        value={this.state.search}
                        onChange={(event) => {
                            this.setState({ search: event.target.value })
                        }}
                    />
                    <button onClick={() =>
                        this.props.searchMovies(this.state.search, this.state.type)
                    } className="mt-4 text-uppercase text-white input_search__btn">search</button>
                    <div className="container p-0">
                        <div className="row mt-2 mb-4">
                            <div className="col-md-4 col-sm-12 d-flex justify-content-center">
                                <label className="d-flex">
                                    <input
                                        type="radio"
                                        name="type"
                                        className="input_search__radio"
                                        data-type="all"
                                        onChange={this.handleFilter}
                                        checked={this.state.type === "all"}
                                    />
                                    <div className="input_search__text">All</div>
                                </label>
                            </div>
                            <div className="col-md-4 col-sm-12 d-flex justify-content-center">
                                <label className="d-flex">
                                    <input
                                        type="radio"
                                        name="type"
                                        className="input_search__radio"
                                        data-type="movie"
                                        onChange={this.handleFilter}
                                        checked={this.state.type === "movie"}
                                    />
                                    <div className="input_search__text">Movies Only</div>
                                </label>
                            </div>
                            <div className="col-md-4 col-sm-12 d-flex justify-content-center">
                                <label className="d-flex">
                                    <input
                                        type="radio"
                                        name="type"
                                        className="input_search__radio"
                                        data-type="series"
                                        onChange={this.handleFilter}
                                        checked={this.state.type === "series"}
                                    />
                                    <div className="input_search__text">Series Only</div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        );
    };
};

export { Search };
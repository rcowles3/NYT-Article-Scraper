import React, { Component } from 'react';
import Results from './Results';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            query: '',
            docs: []
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        // this.searchQuery = this.searchQuery.bind(this);
    }

    onChange(event) {
        this.setState({
            query: event.target.value
        })
    }

    searchQuery() {
        // console.log("search", this.state.query);
        const searchQuery = this.state.query;
        const authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
        const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
        // console.log(`${queryURL}${authKey}&q=${searchQuery}`);

        fetch(`${queryURL}${authKey}&q=${searchQuery}`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(json => {
                let { docs } = json.response;
                this.setState({ docs })
                // console.log(json);
                console.log("Response: \n\n", docs);
            });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.searchQuery();
        // console.log("Search Click", this.state.query);

    }
    render() {
        return (
            <div className="container">
                <div className="card">
                    <div className="card-heading text-center">
                        <h3 className="card-title card-header">
                            <strong>Search Parameters</strong>
                        </h3>
                    </div>
                    <div className="card-body">
                        <form role="form">
                            <div className="form-group">
                                <label >Search Term:</label>
                                <input type="text" className="form-control" id="search-term"
                                    onChange={this.onChange}

                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-default"
                                id="run-search"
                                onClick={this.handleSubmit}
                            >Search
                        </button>
                            <button
                                type="button"
                                className="btn btn-default"
                                id="clear-all"
                                onClick={this.handleReset}>
                                Clear Results
                            </button>
                        </form>
                    </div>
                </div>
                <Results items={this.state.docs} />
            </div>
        )
    }
}

export default Search;
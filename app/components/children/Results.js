import React, { Component } from 'react';

class Results extends Component {

    saveArticle() {
        console.log("saved!");
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-12">
                    <br />
                    <div className="card">
                        <div className="card-heading text-center">
                            <h3 className="card-title card-header">
                                <strong>Articles</strong>
                            </h3>
                        </div>
                        <div className="card-body">
                            {this.props.items.map((item, index) => {
                                let { main } = item.headline;
                                let { snippet, web_url, pub_date } = item;
                                return (
                                    <div key={index}>
                                        <h4>
                                            {main}
                                        </h4>
                                        <p>
                                            {snippet}
                                        </p>
                                        <h6>
                                            Date Published: {pub_date}
                                        </h6>
                                        <a href={web_url}>Link to full article</a>
                                        <button
                                            onClick={this.saveArticle}>Save Article
                                        </button>
                                        <hr className="featurette-divider" />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Results;
import React from "react";

// Import sub-components
import Search from "./children/Search";
import Footer from "./Footer";
// import Results from "./children/Results";

// Helper Function
// import helpers from "./utils/helpers";

class Main extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      searchTerm: "",
      results: ""
    };

    this.setTerm = this.setTerm.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {

    if (prevState.searchTerm !== this.state.searchTerm) {
      console.log("UPDATED");

      helpers.runQuery(this.state.searchTerm).then((data) => {
        if (data !== this.state.results) {
          console.log(data);

          this.setState({ results: data });
        }
      });
    }
  }

  setTerm(term) {
    this.setState({
      searchTerm: term
    });
  }

  render() {

    return (

      <div className="container">

        <div className="jumbotron">
          <h2 className="text-center">New York Times Article Search!</h2>
        </div>
        <div className="col-md-12">
          <Search setTerm={this.setTerm} />
        </div>
        <div className="col-md-12">
          <Footer />
        </div>
      </div>
    );
  }
}

// Export the component back for use in other files
export default Main;

import React from "react";

import "isomorphic-fetch";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch("/data")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState(
            {
              isLoaded: true,
              items: result.message,
            },
            () => {
              console.log("Data from backend is: " + this.state.items);
            }
          );
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <p>{items}</p>
        </div>
      );
    }
  }
}

export default App;

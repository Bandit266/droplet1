import React, { Component } from "react";
import logo from "./assets/logo.svg";
import "./styles/App.css";
import MainDash from "./containers/MainDash";
import Navigation from "./containers/Navigation";

class App extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       auth: "",
  //       name: "",
  //       greeting: "",
  //       ticker: "", //set state of ticker price (get 1000ms) or WS?
  //     };
  //     this.handleChange = this.handleChange.bind(this);
  //     this.handleSubmit = this.handleSubmit.bind(this);
  //   }

  //   handleChange(event) {
  //     this.setState({ name: event.target.value });
  //   }

  //   handleSubmit(event) {
  //     event.preventDefault();
  //     fetch(`/api/greeting?name=${encodeURIComponent(this.state.name)}`)
  //       .then((response) => response.json())
  //       .then((state) => this.setState(state));
  //   }

  render() {
    return (
      <div className="App">
        <div>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
        <div>
          <Navigation />
          <MainDash />
        </div>
      </div>
    );
  }
}

export default App;

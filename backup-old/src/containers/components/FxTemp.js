// JSX Rules
// return single element 
// div / section / article or Fragment
// use camelCase for html attribute
// className instead of className
// close every element except
// formatting


import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// class FxTemp extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
// 	  auth: '',
//       name: '',
//       greeting: '',
// 	  ticker:''
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
//       .then(response => response.json())
//       .then(state => this.setState(state));
//   }

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <form onSubmit={this.handleSubmit}>
//             <label htmlFor="name">Enter your name: </label>
//             <input
//               id="name"
//               type="text"
//               value={this.state.name}
//               onChange={this.handleChange}
//             />
//             <button type="submit">Submit</button>
//           </form>
//           <p>{this.state.greeting}</p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

function FxTemp() {
	return <h3> This is my first component </h3>
}
export default FxTemp; 
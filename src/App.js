// import React from "react";

// const App = () => {
//   return (
//     <div>
//       <h2>Hello World I'm From React</h2>
//     </div>
//   );
// };
// export default App;

//CLASS COMPONNT //

// import React, { Component } from "react";

// export default class App extends Component {
//   state = {
//     Title: "Hello World Im learng React",
//   };

//   render() {
//     return (
//       <div>
//         <h3>{this.state.Title}</h3>
//       </div>
//     );
//   }
// }

// FUNCTION COMPONENT //

import React, { Component } from "react";
import Display from "./display";
import Use from "./counter.js";
import "./App.css";
export default class display extends Component {
  state = {
    Title: "Im From Main Component",
  };
  render() {
    return (
      <div className="container ">
        <center>
          <Display name={this.state.Title} />
        </center>
        <button onClick={() => console.log("clicked")}>Click</button>
        <button
          onClick={() => {
            console.log("Success");
          }}
        >
          Share
        </button>
        <Use />
      </div>
    );
  }
}

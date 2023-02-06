import React, {Component} from "react";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Todoapp from "./Components/Todoapp/TodoApp";
import {BrowserRouter as Router ,Routes, Route } from "react-router-dom";
export class App extends Component{
  render(){
    return(
     
           <Router>
           < Header />
           <Routes>
          <Route path="/" exact element= {<Todoapp />} />
          <Route path="/about" element= { <About />} /> 
          </Routes>
        </Router>
     
    );
     
  };
}

// const App = () => {
//   return(
//     <Router>
//       <Header />
//       <Route path="/" Component = { Todoapp } />
//       <Route path="/about" Component = { About } />
//     </Router>
//   );

// }
export default App;
import React from 'react';
import Index from "./views/index";
import {Carousel} from "antd"
import eight from "./static/img/8.jpg"
import About from "./views/about"
import Project from "./views/project"
function App() {
  return (
    <div className="App">
        <div className="ban">
          <Index />
        </div>
        <About/>
        <Project/>
    </div>
  );
}

export default App;

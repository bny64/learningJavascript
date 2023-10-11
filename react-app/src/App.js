import "./App.css";
import React, { Component } from "react";
import TOC from './components/TOC';
import Content from './components/Content';
import Subejct from './components/Subject';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Subejct title="WEB" sub="world wide web!"></Subejct>
        <TOC></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import IdeaForm from './IdeaForm';
import CardContainer from './CardContainer'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      ideas: []
    }
  }

  addIdea = (idea) => {
    this.setState({ ideas: [idea, ...this.state.ideas] })
  }

  render() {
    return (
      <div className="App">
        <IdeaForm addIdea={this.addIdea} />
        <CardContainer ideas={this.state.ideas} />
      </div>
    );
  }
}

export default App;

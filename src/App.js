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
    const newIdea = {...idea, id: Date.now()}
    this.setState({ ideas: [newIdea, ...this.state.ideas] })
  }

  removeIdea = (id) => {
    const ideas = this.state.ideas.filter(idea => idea.id !== id)
    this.setState({ ideas })
  }

  render() {
    const { ideas } = this.state
    return (
      <div className="App">
        <IdeaForm addIdea={this.addIdea} />
        <CardContainer ideas={ideas} removeIdea={this.removeIdea} />
      </div>
    );
  }
}

export default App;

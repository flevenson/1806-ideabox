import React, { Component } from 'react'

class IdeaForm extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      body: ''
    }
  }

  updateInput = (event) => {
    const { name, value } = event.target
    this.setState({[name]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addIdea(this.state)
    this.setState({ title: '', body: '' })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input 
          value={this.state.title} 
          placeholder="title" 
          name="title"
          onChange={this.updateInput}
        />
        <input 
          value={this.state.body} 
          placeholder="body"
          name="body"
          onChange={this.updateInput}
        />
        <button>Submit</button>
      </form>
    )
  }
}

export default IdeaForm

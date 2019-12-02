import React, { Component } from 'react'
import {connect} from 'react-redux'

class CreateTodo extends Component {

  state = {
      text: ''
    };

  handleChange = (event) => {
    this.setState({text: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addToDo(this.state)
  };

  //use arrow function as opposed to handleChange(event) because will bind to component vs. on prototype

  render() {
    return(
      <div>
      <form onSubmit={this.handleSubmit}>
        <p>
          <label>add todo</label>
          <input onChange={this.handleChange} type="text" value = {this.state.text}/>
        </p>
        <input  type="submit" />
        </form>
        {this.state.text}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToDo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
  }
}

export default connect(null, mapDispatchToProps)(CreateTodo);

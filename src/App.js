import React, { Component } from 'react'
import { connect } from 'react-redux'

// actions
import { addStudent } from '../actions/index'

// import logo from './logo.svg'
import './App.scss'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      age: 0,
      city: '',
      feedback: ''
    }

    this.addStudent = this.addStudent.bind(this)
  }

  addStudent() {
    this.props.addStudent()
  }

  onBlur(e) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1>{'DB Operations'}</h1>
        </header>
        <div>
          <li key='Name'>
            <label>{'Name'}</label>
            <input name='name' onBlur={this.onBlur.bind(this)} onChange={this.onBlur.bind(this)} value={this.state.name}></input>
          </li>
          <li key='Age'>
            <label>{'Age'}</label>
            <input name='age' onBlur={this.onBlur.bind(this)} onChange={this.onBlur.bind(this)} value={this.state.age}></input>
          </li>
          <li key='City'>
            <label>{'City'}</label>
            <input name='city' onBlur={this.onBlur.bind(this)} onChange={this.onBlur.bind(this)} value={this.state.city}></input>
          </li>
        </div>
        <button onClick={this.addStudent}>{'Add Student'}</button>
        <div className='feedback'>
          <label>{this.props.feedback}</label>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    feedback: state.feedback
  }
}

export default connect(mapStateToProps, {addStudent})(App)

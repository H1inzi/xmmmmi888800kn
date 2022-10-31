import Header from './js-components/js-header.js'
import './App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react'
// import Icon from './js-media/header-icon.js'
class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginValue: "",
      passwdValue: "",
      authStatus: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  uAuth(objInput) {
    var result;
    axios.post("http://localhost:3001/auth/", JSON.stringify(objInput)
    )
      .then((response) => response.json())
      .then(response => result = response)
    console.log(result)
    return result
  };

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
    console.log([event.target.name])
  };

  handleSubmit(event) {
    let b = this.uAuth({
      login: this.state.loginValue,
      password: this.state.passwdValue
    });
    console.log(b);
    event.preventDefault();
  };

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" placeholder="Логин" name='loginValue' value={this.state.loginValue} onChange={this.handleChange} />
          <br></br>
          <input type="text" placeholder="Пароль" name='passwdValue' value={this.state.passwdValue} onChange={this.handleChange} />
        </label>
        <br></br>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      test: null
    }
  }
  render() {
    fetch('/api')
    .then((response) => response.json())
    .then(response => this.setState({test: response.message})
    )
    let isLoad = !this.state.test ? "loading" : "loaded"
    return (
      <div className="App">
      <Header />

    </div>
    )
  }
}
export default App;

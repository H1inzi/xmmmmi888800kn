import axios from 'axios';
import React from 'react'

import Header from './js-components/js-header.js'
import './App.css';
import TitleProducts from './js-components/title-products.js'
import MainAdvBlock from './js-components/main-adv-banner.js';
import Catalog from './js-components/catalog.js';
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
        <div className="main wrapper">
          <section className="products-section">
            <TitleProducts />
            <MainAdvBlock />
          </section>
          <div className="section">
            <Catalog />
          </div>
        </div>
        <footer className="footer">
          <div className="wrapper footer-block">
            <div className="footer-btext">
              © AVepir, 2022
            </div>
          </div>
        </footer>
    </div>
    )
  }
}
export default App;

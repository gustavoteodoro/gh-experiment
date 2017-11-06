import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Profile from './Profile';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      submitted: false,
      focused: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    this.setState({submitted: false});
  }

  handleSubmit(event) {
    this.setState({focused: false});
    this.setState({submitted: true});
    event.preventDefault();
  }

  handleFocus(event) {
    this.setState({focused: true});
  }

  handleBlur(event) {
    this.setState({focused: false});
  }

  render() {

    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
              /> 
              <input type="submit" value="Pesquisar" />
            </form>
          </header>
          {
            this.state.submitted && (
              <Redirect to={'/user/' + this.state.value} />
            )
          }
          {
            this.state.focused && (
              <Redirect to='/' />
            )
          }
          <Route path="/user/:username" component={Profile}/>
        </div>
      </Router>
    );
  }
}

export default App;

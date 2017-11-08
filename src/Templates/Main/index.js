import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
} from 'react-router-dom';
import Profile from '../../Pages/Profile';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log(this.props);
    this.props.history.push('/user/' + this.state.value);
    event.preventDefault();
  }

  render() {

    return (
        <div>
            <header>
            <form onSubmit={this.handleSubmit}>
                <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
                /> 
                <input type="submit" value="Pesquisar" />
            </form>
            </header>
            <Route path="/user/:username" component={Profile}/>
        </div>
    );
  }
}

export default withRouter(Main);

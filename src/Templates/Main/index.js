import React, { Component } from 'react';
import {
  Route,
  withRouter,
} from 'react-router-dom';
import Profile from '../../Pages/Profile';

import {
    MainTemplate,
    TemplateHeader,
} from './styles.js';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      profileOpened: this.props.location.pathname !== '/',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.props.history.push('/user/' + this.state.value);
    this.setState({profileOpened: true});
    event.preventDefault();
  }

  render() {

    return (
        <MainTemplate>
            <TemplateHeader profile={this.state.profileOpened}>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.value}
                        onChange={this.handleChange}
                    /> 
                    <input type="submit" value="Pesquisar" />
                </form>
            </TemplateHeader>
            <Route path="/user/:username" component={Profile}/>
        </MainTemplate>
    );
  }
}

export default withRouter(Main);

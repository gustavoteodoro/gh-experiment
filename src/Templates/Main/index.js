import React, { Component } from 'react';
import {
  Route,
  withRouter,
} from 'react-router-dom';
import Profile from '../../Pages/Profile';

import {
    MainTemplate,
    TemplateHeader,
    TemplateHeaderContainer,
} from './styles';

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
    this.props.history.push('/user/' + this.state.value + '/repos/stars');
    this.setState({profileOpened: true});
    event.preventDefault();
  }

  render() {

    return (
        <MainTemplate>
            <TemplateHeader profile={this.state.profileOpened}>
                <TemplateHeaderContainer>
                  <h1>GitHub Experiment</h1>
                  <form onSubmit={this.handleSubmit}>
                      <input
                          type="text"
                          value={this.state.value}
                          onChange={this.handleChange}
                          placeholder='Digite um nome de usuário...'
                      /> 
                      <input type="submit" value="Pesquisar" />
                  </form>
                </TemplateHeaderContainer>
            </TemplateHeader>
            <Route path="/user/:username" component={Profile}/>
        </MainTemplate>
    );
  }
}

export default withRouter(Main);

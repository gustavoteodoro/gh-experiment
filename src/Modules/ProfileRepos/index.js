import React, { Component } from 'react';

import {
    ProfileReposContainer,
} from './styles';

let currentOrder = 'stars';
class ProfileRepos extends Component {
    constructor(props) {
        super(props);

        this.state = {
            repos: {},
        };
    }

    fetchRepo = () => {
        const {
            params
        } = this.props.match;
        fetch('http://api.github.com/search/repositories?q=user:' + params.username + '&sort=' + params.order)
        .then(results => {
            return results.json()
        }).then(data => {
            let reposData = data;
            this.setState({repos: reposData.items});
        })
    }

    componentWillMount() {
        this.fetchRepo();
    }

    componentWillUpdate() {
        currentOrder = this.props.match.params.order;
    }

    render() {
        const {
            repos,
        } = this.state;

        if(currentOrder != this.props.match.params.order){
            this.fetchRepo();
        }

        return (
            <ProfileReposContainer>
                <h3>Repositórios</h3>
                {
                    repos &&
                        repos[0] &&
                            repos.map(repo => (
                                <p key={repo.name}>{repo.name}</p>
                            ))
                }
            </ProfileReposContainer>
        );
    }
}

export default ProfileRepos;

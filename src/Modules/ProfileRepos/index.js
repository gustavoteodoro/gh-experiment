import React, { Component } from 'react';
import moment from 'moment';
import {
    Link,
} from 'react-router-dom';
import {
    ProfileReposContainer,
    OrderTitle,
    RepoContainer,
    RepoList,
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
                <OrderTitle>Organized by: {this.props.match.params.order}</OrderTitle>
                <RepoList>
                    {
                        repos &&
                            repos[0] &&
                                repos.map(repo => (
                                    <Link to={'/repo/' + repo.full_name} key={repo.name}>
                                        <RepoContainer>
                                            <h5>{repo.name}</h5>
                                            <p><b>{repo.stargazers_count}</b> stars</p>
                                            <p><b>{repo.forks}</b> forks</p>
                                            <p>{moment(repo.updated_at).fromNow()}</p>
                                        </RepoContainer>
                                    </Link>
                                ))
                    }
                </RepoList>
            </ProfileReposContainer>
        );
    }
}

export default ProfileRepos;

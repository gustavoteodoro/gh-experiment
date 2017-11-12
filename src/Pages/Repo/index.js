import React, { Component } from 'react';
import {
    withRouter,
    Link,
} from 'react-router-dom';

import {
    RepoContainer,
} from './styles';

class Repo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            repo: {},
        }
    }

    componentWillMount() {
        const {
            params
        } = this.props.match;

        fetch('http://api.github.com/repos/' + params.username + '/' + params.reponame)
        .then(results => {
            return results.json()
        }).then(data => {
            let repoData = data;
            this.setState({repo: repoData});
        })
    }

    render() {
        const {
            repo,
        } = this.state;

        return (
            <RepoContainer>
                <h2>{repo.name}</h2>
                {
                    repo.owner &&            
                        <p>
                            <span>by </span>
                            <Link to={'/user/' + repo.owner.login + '/repos/' + 'stars'}>{repo.owner.login}</Link>
                        </p>
                }
                <ul>
                    <li>{repo.description}</li>
                    <li>{repo.stargazers_count} stars</li>
                    <li>{repo.watchers_count} watchers</li>
                    <li>{repo.forks} forks</li>
                    <li>{repo.watchers_count} watchers</li>
                    <li><a href={repo.html_url} target='_blank'> See at Github</a></li>
                    
                </ul>
                {console.log(repo)}
            </RepoContainer>
        );
    }
}

export default withRouter(Repo);

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as repoActions from '../../actions/repoActions';
import RepoItem from './RepoItem.js';

class ReposPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      repo: { name: '' },
      user: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  handleChange(e) {
    const user = e.target.value;
    this.setState({user: user});
  }

  onClickSave() {
    this.props.actions.fetchRepos(this.state.user);
  }

  userRow(user, index) {
    return <div key={index}>{user}</div>;
  }

  repoRow(repo, index) {
    return <RepoItem key={index} repo={repo}/>;
  }

  render() {
    return (
      <div>
        <h1>Repos</h1>
        <h2>Find Repo</h2>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.user} />

        <input
          type="submit"
          value="save"
          onClick={this.onClickSave} />

        {this.props.repos.map(this.repoRow)}
      </div>
    );
  }
}

ReposPage.propTypes = {
  repos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    repos: state.repos,
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(repoActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReposPage);
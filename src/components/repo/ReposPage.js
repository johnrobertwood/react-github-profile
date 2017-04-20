import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as repoActions from '../../actions/repoActions';
import RepoItem from './RepoItem.js';
// import mockUserApi from '../../api/mockUserApi';

class ReposPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {user: ''};
    this.handleChange = this.handleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  componentWillMount() {
    this.setState({user: this.props.user});
  }

  handleChange(e) {
    const user = e.target.value;
    this.setState({user: user});
  }

  onClickSave() {
    this.props.actions.fetchRepos(this.state.user);
    this.props.actions.setUser(this.state.user);
    // mockUserApi.getUser(this.state.user);
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
  user: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
};

const getDaysOld = (date) => {
  let updateDate = new Date(date).getTime();
  let now = Date.now();
  let days = ((now - updateDate) / 86400000);
  return days;
};

const getVisibleRepos = (repos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return repos;
    case 'LAST_MONTH':
      return repos.filter(d => getDaysOld(d.created_at) < 30);
    case 'LAST_YEAR':
      return repos.filter(d => getDaysOld(d.created_at) < 365);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

const mapStateToProps = (state, ownProps) => ({
    repos: getVisibleRepos(state.repos, state.visibilityFilter),
    user: state.user
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(repoActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ReposPage);
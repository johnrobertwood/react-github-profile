import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as repoActions from '../../actions/repoActions';
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
    console.log(this.state.user)
    const user = this.state.user;
    this.setState({user: user});
  }

  onClickSave() {
    console.log('test')
    console.log(this.state)
    this.props.actions.setUser(this.state.user);
  }

  userRow(user, index) {
    return <div key={index}>{user}</div>;
  }

  render() {
    return (
      <div>
        <h1>Repos</h1>
        {this.userRow}
        <h2>Find Repo</h2>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.user} />

        <input
          type="submit"
          value="save"
          onClick={this.onClickSave} />
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
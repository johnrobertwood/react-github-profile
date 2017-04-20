import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as repoActions from '../../actions/repoActions';

class FilterLink extends React.Component {

  render() {
    return (
      <a href="#"
         onClick={e => {
           e.preventDefault();
           this.props.onClick();
         }}
      >
        {this.props.children}
      </a>
    );
  }
}

FilterLink.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => ({
    filter: state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(repoActions.setVisibilityFilter(ownProps.filter));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterLink);
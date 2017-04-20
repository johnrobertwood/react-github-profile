import React, { PropTypes } from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header loading={this.props.loading}/>
        <Footer />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = (state, ownProps) => ({
    loading: state.ajaxCallsInProgress > 0
});

export default connect(mapStateToProps)(App); 
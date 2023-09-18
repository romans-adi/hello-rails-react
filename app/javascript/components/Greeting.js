import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchRandomGreeting } from '../redux/actions';

function Greeting({ fetchRandomGreeting }) {
  useEffect(() => {
    fetchRandomGreeting();
  }, [fetchRandomGreeting]);

  return (
    <>
    </>
  );
}

const mapStateToProps = (state) => ({
  randomGreeting: state.randomGreeting,
});

Greeting.propTypes = {
  fetchRandomGreeting: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { fetchRandomGreeting })(Greeting);

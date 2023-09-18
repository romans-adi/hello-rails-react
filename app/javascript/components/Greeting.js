import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchRandomGreeting } from '../redux/actions';

function Greeting({ randomGreeting, fetchRandomGreeting }) {
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

export default connect(mapStateToProps, { fetchRandomGreeting })(Greeting);

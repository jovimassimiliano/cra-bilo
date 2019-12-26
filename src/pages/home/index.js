import React from 'react';
import { connect } from 'react-redux';
import { addCounter } from 'store/counter/actions';
import PropTypes from 'prop-types';

const Home = ({ counter, addCounter }) => (
  <div>
    <h1>Home</h1>
    <p>Total Counter: {counter}</p>
    <button onClick={() => addCounter() }>+ Add</button>
  </div>
)

Home.propTypes = {
  counter: PropTypes.number
}

const mapStateToProps = state => ({
  counter: state.counter.count
})

const mapDispatchToProps = {
  addCounter
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
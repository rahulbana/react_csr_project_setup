import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import checkboxchecked from '.././images/checkboxchecked.png'
import Nav from './Nav'
import { decrementCounter, incrementCounter } from '../actions/counter'

const Home = ({ counter,  decrementCounter,incrementCounter }) => {
  const addNum = () => {
    incrementCounter()
  }
  const subNum = () => {
    decrementCounter()
  }
  return (
    <div>
      <Nav/>
      <h1>kjhasdjkf</h1>
      <button onClick={()=> subNum()}>-</button>
      {counter.counter}
      <button onClick={()=> addNum()}>+</button>
      <img src={checkboxchecked} />
    </div>
  )
}

Home.propTypes = {
  counter: PropTypes.object,
  decrementCounter: PropTypes.func,
  incrementCounter: PropTypes.func
}

function mapStateToProps({ counter }) {
  return {
    counter
  }
}

const mapDispatchToProps = {
  decrementCounter,
  incrementCounter
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

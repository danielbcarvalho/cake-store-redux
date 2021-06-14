import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

function CakeContainer({numOfCakes, buyCake}) {
  return (
    <div>
      <h2>Number of cakes - {numOfCakes}</h2>
      <button onClick={buyCake}>Buy Cake</button>
    </div>
  )
}

// Get data from state
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes
  }
}

// Set actions
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
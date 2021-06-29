import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { buyIceCream } from '../redux'

const HooksIceCreamContainer = () => {
  const numOfIceCreams = useSelector((state) => state.iceCreamReducer.numOfIceCreams)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Num of Ice Creams - {numOfIceCreams}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy Ice Cream</button>
    </div>
  )
}

export default HooksIceCreamContainer

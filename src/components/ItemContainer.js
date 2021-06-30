import React from "react";
import { connect } from "react-redux";

function ItemContainer(props) {
  return (
    <div>
      <h2>Item - {props.item}</h2>
    </div>
  );
}

const mapStateToProps = (state, onwProps) => {
  const itemState = onwProps.cakeReducer
    ? state.cakeReducer.numOfCakes
    : state.iceCreamReducer.numOfIceCreams

  return {
    item: itemState
  }
};

export default connect(mapStateToProps)(ItemContainer);

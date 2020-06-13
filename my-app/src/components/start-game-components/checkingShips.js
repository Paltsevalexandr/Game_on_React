import React from 'react';
import {connect} from 'react-redux';
import {getCurrentShip} from '../../store/actions';

const CheckingShips = ({checkingShips, getCurrentShip}) => {

  let ships = checkingShips.map((ship, index) => {
    return(
      <div 
        className = {"ship " + ship}
        draggable = 'true' key = {index}
        onMouseDown = {e => getCurrentShip(ship, e.nativeEvent.offsetX, e.nativeEvent.offsetY)} />
    );
  });
  return(
    <>{ships}</>
  )
}

const mapStateToProps = ({gamerState: {checkingShips}}) => {
  return { checkingShips }
}

export default connect(mapStateToProps, {getCurrentShip})(CheckingShips);

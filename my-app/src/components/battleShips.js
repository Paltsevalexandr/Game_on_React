import React from 'react';
// import PropTypes from 'prop-types';

export function BattleShips(props) {
  let battleShips;
  if(props.battleShips.length > 0) {
    battleShips = props.battleShips.map((item, index) => {
      return(
        <div 
          className = {"ship " + item.name + " battleShip " + 
          (item.isVertical ? (item.name.slice(0, -1) + 'Vertical') : '')}

          style = {{left: item.left + 'px', 
                    top: item.top + 'px'}}
          draggable = 'true'
          key = {index}

          onMouseDown   = {e => props.createCurrentShip(e, item.name)}
          onDragStart   = {() => props.deleteShipFromMatrix()}
          onDoubleClick = {() => props.rotateShip()}>
        </div>
      );
    });
  }
  return(
    <>{battleShips}</>
  )
}

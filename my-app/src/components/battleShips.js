import React from 'react';
// import PropTypes from 'prop-types';

export function BattleShips(props) {
  let battleShips;
  if(props.battleShips.length > 0) {
    battleShips = props.battleShips.map((item, index) => {
      return(
        <div 
          className = {"ship " + item.shipName + " battleShip " + 
          (item.isVertical ? (item.shipName.slice(0, -1) + 'Vertical') : '')}

          style = {{left: item.leftIndent + 'px', top: item.topIndent + 'px'}}
          draggable = 'true'

          onMouseDown = {e => props.createCurrentShip(e, item.shipName)}
          onDrag = {e => props.foundForbiddenCells(e)}
          onDoubleClick = {() => props.rotateShip()}
          key = {index}>
        </div>
      );
    });
  }
  return(
    <>{battleShips}</>
  )
}

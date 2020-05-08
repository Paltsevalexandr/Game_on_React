import React from 'react';

const RenderComputerField = ({battleShips}) => {
  let ships;

  if(battleShips.length > 0) {
    ships = battleShips.map((item, index) => {
      return (
        <div 
        className = {'ship ' + item.name + ' battleShip ' + 
        (item.isVertical ? (item.name.slice(0, -1) + 'Vertical') : '')}
        key = {index} style = {{top: item.top + 'px', left: item.left + 'px'}}>
        </div>
      )
    });
  }

  return(
    <div className   = "battleField">
      {ships}
    </div>
  );
}

export default RenderComputerField;
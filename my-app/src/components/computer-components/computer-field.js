import React from 'react';

const ComputerField = ({
  battleShips, 
  makeHatching, 
  selectGamer,
  getGamerFire,
  children}) => {

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
    <div className   = "battleField"
      onClick = {e => {
        getGamerFire(e.pageX, e.pageY);
        selectGamer(2);
      }}
      onContextMenu = {e => {makeHatching(e.pageX, e.pageY); e.preventDefault()}}>
      {ships}
      {children}
    </div>
  );
}

export default ComputerField;

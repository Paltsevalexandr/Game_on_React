import React from 'react';

const BattleField = ({createBattleShip, children, selectGamer, getComputerFire}) => {

  return(
    <div className   = "battleField" 
        onClick = {e => getComputerFire(e.pageY, e.pageX)}
        onDrop      = {e => createBattleShip(e.pageX, e.pageY)}
        onDragOver  = {e => e.preventDefault()}>
          {children}
    </div>
  )
}

export default BattleField;

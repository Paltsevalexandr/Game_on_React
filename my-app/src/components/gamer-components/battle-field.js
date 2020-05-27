import React from 'react';

const BattleField = ({createBattleShip, children}) => {

  return(
    <div className   = "battleField" 
        onDrop      = {e => createBattleShip(e.pageX, e.pageY)}
        onDragOver  = {e => e.preventDefault()}>
          {children}
    </div>
  )
}

export default BattleField;

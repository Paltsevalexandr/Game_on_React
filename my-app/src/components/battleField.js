import React from 'react';

export class BattleField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {battleShips: [], canPlaceShip: true,};
  }

  // adding ships

  isBattleShip = () => {
    return this.state.battleShips.find(item => item.shipName === this.currentShipName);
  }

  placeShip = e => {
    if(this.state.canPlaceShip === true) {
      this.isBattleShip() ? this.moveBattleShip(e) : this.addShip(e);
      this.deleteSelectedShip();
    }else if(this.state.canPlaceShip === false) {
      return;
    }
  }
  return(
    <div className   = "battleField" 
         onDrop      = {e => placeShip(e)}
         onDragOver  = {e => e.preventDefault()}>
          {props.children}
    </div>
  )
}

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

  addShip = e => {
    this.setState({
      battleShips: [...this.state.battleShips,

        {shipName: this.state.currentShip.name,
         shipWidth: this.state.currentShip.width,
         shipHeight: this.state.currentShip.height,
         leftIndent: this.calcShipPosition(e.nativeEvent.pageX, this.state.currentShip.offsetX, this.state.currentShip.width),
         topIndent: this.calcShipPosition(e.nativeEvent.pageY, this.state.currentShip.offsetY, this.state.currentShip.height),
         isVertical: this.state.currentShip.isVertical,
        }
      ]
    });
  }

  calcShipPosition = (shipPageXY, shipOffsetXY, shipSize) => {
    let shipCoordinates = shipPageXY - shipOffsetXY;

    if(shipCoordinates > 165) {
      let excess = (shipCoordinates - 132) % 33;
  
      if(shipCoordinates >= (462 - shipSize)) {
        return shipCoordinates = (462 - shipSize);
      }else if(excess > 0) {
        return shipCoordinates -= excess;
      }
  
    }else if(shipCoordinates >=145 && shipCoordinates <= 165) {
      return shipCoordinates = 165;
    }else if(shipCoordinates < 145) {
      return shipCoordinates = 132;
    }
  }

  foundForbiddenCells = e => {
    if(this.state.battleShips.length >= 1){
      for(let ship of this.state.battleShips) {
        console.log(ship.shipName)
        if(ship.shipName === this.state.currentShip.name) {
          continue;
        }
        if(e.pageY - this.state.currentShip.offsetY < ship.topIndent + ship.shipHeight + 33
        && e.pageY - this.state.currentShip.offsetY + this.state.currentShip.height > ship.topIndent - 33
        && e.pageX - this.state.currentShip.offsetX < ship.leftIndent + ship.shipWidth + 33
        && e.pageX - this.state.currentShip.offsetX + this.state.currentShip.width > ship.leftIndent - 33){
          this.setState({canPlaceShip: false}, ()=>console.log(ship));
        }else {
          this.setState({canPlaceShip: true});
        }
      }
    }
  }

  // deleting selected checking ship

  deleteSelectedShip = () => {
    this.setState(state => {
      const checkingShips = state.checkingShips.filter((item)=>item !== state.currentShip.name);
      return {checkingShips,} 
    });
  }

  // calc ship sizes

  calcShipHeight(shipName, isVertical) {
    if(isVertical === false) {
      return 33;
    }else if(isVertical === true) {
  
      if(shipName.slice(0, -1) === 'fourdeck'){
        return 132;
      }else if(shipName.slice(0, -1) === 'threedeck'){
        return 99;
      }else if(shipName.slice(0, -1) === 'twodeck'){
        return 66;
      }else if(shipName.slice(0, -1) === 'onedeck'){
        return 33;
      }
    }
  }

  calcShipWidth(shipName, isVertical) {
    if(isVertical === true) {
      return 33;
    }else if(isVertical === false) {
      if(shipName.slice(0, -1) === 'fourdeck'){
        return 132;
      }else if(shipName.slice(0, -1) === 'threedeck'){
        return 99;
      }else if(shipName.slice(0, -1) === 'twodeck'){
        return 66;
      }else if(shipName.slice(0, -1) === 'onedeck'){
        return 33;
      }
    }
  }

  // get current ship

  createCurrentShip = (e, shipName) => {
    this.setState({currentShip: {
      name: shipName,
      offsetX: e.nativeEvent.offsetX,
      offsetY: e.nativeEvent.offsetY,
      width: this.calcShipWidth(shipName, this.currentShipIsVertical(shipName)),
      height: this.calcShipHeight(shipName, this.currentShipIsVertical(shipName)),
      isVertical: this.currentShipIsVertical(shipName),
    }})
  }

  currentShipIsVertical = (currentShip) => {
    let isVertical = false;
    for(let ship of this.state.battleShips) {
      if(ship.shipName === currentShip) {
        isVertical = ship.isVertical;
      }
    }
    return isVertical;
  }

  moveBattleShip = e => { ///добавить событие вглубь функции
    const currentedChipPageX = e.nativeEvent.pageX;
    const currentedChipPageY = e.nativeEvent.pageY;
    this.setState(state => {
      const battleShips = state.battleShips.map(item => {
        if(item.shipName === state.currentShip.name){
          item.leftIndent = this.calcShipPosition(currentedChipPageX, state.currentShip.offsetX, item.shipWidth);
          item.topIndent = this.calcShipPosition(currentedChipPageY, state.currentShip.offsetY, item.shipHeight);
          return item;
        }else {
          return item;
        }
      });
      return {battleShips,};
    });
  }

  // rotate methods

  rotateShip = () => {
    this.setState(state => {
      const battleShips = state.battleShips.map(item => {
        if(item.shipName === state.currentShip.name) {
          if(this.isCanRotate(item)) {
            item.shipWidth  = item.shipHeight;
            item.shipHeight = this.calcShipHeight(item.shipName, !item.isVertical);
            item.leftIndent = this.calcShipPosition(item.leftIndent, 0, item.shipWidth);
            item.topIndent  = this.calcShipPosition(item.topIndent, 0, item.shipHeight);
            item.isVertical = !item.isVertical;
  
            return item;
          }else {
            return item;
          }
        }else {
          return item;
        }
      });
      return {battleShips,};
    });
  }

  isCanRotate = (currentShip) => {
    let shipSizeIndex = this.calcShipSizeIndex(currentShip.shipName);
    let canRotate = true;
    if(this.state.battleShips.length > 0){
      if(currentShip.isVertical === true) {
        canRotate = this.isVerticalShipCanRotate(currentShip, shipSizeIndex);
      }else if(currentShip.isVertical === false) {
        canRotate = this.isHorizontalShipCanRotate(currentShip, shipSizeIndex);
      }
    }
    return canRotate;
  }

  isVerticalShipCanRotate = (currentShip, shipSizeIndex) => {
    for(let ship of this.state.battleShips) {
      if(this.checkRightSideShipsTopIndent(ship, currentShip, shipSizeIndex) === false || this.checkVerticalShips(currentShip) === false) {
        return false;
      }
    }
    return true;
  }

  checkVerticalShips = (currentShip) => {
    let battleShips = this.getVerticalShips();
    for(let ship of battleShips) {
      if(ship.leftIndent <= currentShip.leftIndent + currentShip.shipHeight // shipHeight will be shipWidth when ship rotate
      && ship.leftIndent >= currentShip.leftIndent) {
        console.log(currentShip.topIndent)
        return this.checkVerticalShipsTopIndent(currentShip.topIndent, ship);
      }
    }
    return true;
  }

  checkVerticalShipsTopIndent = (currentShipTopIndent, battleShip) => {
    if(battleShip.topIndent + battleShip.shipHeight >= currentShipTopIndent - 33
    && battleShip.topIndent + battleShip.shipHeight <= (currentShipTopIndent + 66)) {
        return false;
    }
    return true;
  }

  getVerticalShips = () => {
    return this.state.battleShips.filter(item => item.isVertical === true && item.shipName !== this.state.currentShip.name);
  }

  checkRightSideShipsTopIndent = (battleShip, currentShip, index) => {
    let currentShipFuturePosition = currentShip.topIndent - 33;

    for(let i = 1; i < index; i++) {
      if(battleShip.topIndent === currentShipFuturePosition) {
        return this.checkRightSideShipsLeftIndent(battleShip, currentShip, index);
      }
      currentShipFuturePosition += 33;
    }
    return true;
  }
  checkRightSideShipsLeftIndent = (battleShip, currentShip, index) => {
    let currentShipFuturePosition = currentShip.leftIndent + 66;
    for(let i = 1; i < index; i++) {
      if(battleShip.leftIndent === currentShipFuturePosition) {
        return false;
      }
      currentShipFuturePosition += 33;
    }
    return true;
  }
  isHorizontalShipCanRotate = (currentShip, shipSizeIndex) => {
    for(let ship of this.state.battleShips) {
      if(this.checkBottomShipsLeftIndent(ship, currentShip, shipSizeIndex) === false || this.checkHorizontalShips(currentShip) === false) {
        return false;
      }
    }
    return true;
  }

  checkBottomShipsLeftIndent = (battleShip, currentShip, index) => {
    let currentShipFuturePosition = currentShip.leftIndent - 33;

    for(let i = 1; i < index; i++) {
      if(battleShip.leftIndent === currentShipFuturePosition) {
        return this.checkBottomShipsTopIndent(battleShip, currentShip, index);
      }
      currentShipFuturePosition += 33;
    }
    return true;
  }

  checkBottomShipsTopIndent = (battleShip, currentShip, index) => {
    let currentShipFuturePosition = currentShip.topIndent + 66;
    for(let i = 1; i < index; i++) {
      if(battleShip.topIndent === currentShipFuturePosition) {
        return false;
      }
      currentShipFuturePosition += 33;
    }
    return true;
  }

  checkHorizontalShips = (currentShip) => {
    let battleShips = this.getHorizontalShips();
    for(let ship of battleShips) {
      if(ship.topIndent <= currentShip.topIndent + currentShip.shipWidth // shipWidth will be shipHeight when ship rotate
      && ship.topIndent >= currentShip.topIndent) {
        return this.checkHorizontalShipsLeftIndent(currentShip.leftIndent, ship);
      }
    }
    return true;
  }

  checkHorizontalShipsLeftIndent = (currentShipLeftIndent, battleShip) => {
    if(battleShip.leftIndent + battleShip.shipWidth >= currentShipLeftIndent - 33
    && battleShip.leftIndent + battleShip.shipWidth <= (currentShipLeftIndent + 66)) {
        return false;
    }
    return true;
  }

  getHorizontalShips = () => {
    return this.state.battleShips.filter(item => item.isVertical === false && item.shipName !== this.state.currentShip.name);
  }

  calcShipSizeIndex = (shipName) => {
    if(shipName === 'fourdeck1') {
      return 4;
    }else if(shipName.slice(0, -1) === 'threedeck') {
      return 3;
    }else if(shipName.slice(0, -1) === 'twodeck') {
      return 2;
    }else if(shipName.slice(0, -1) === 'onedeck') {
      return 1;
    }
  }

  render() {
    return(
      <div className   = "battleField" 
          onDrop      = {e => this.placeShip(e)}
          onDragOver  = {e => e.preventDefault()}
          onClick     = {e => this.props.getDotCoordinates(e)}>
            {this.props.children}
      </div>
    )
  }
}

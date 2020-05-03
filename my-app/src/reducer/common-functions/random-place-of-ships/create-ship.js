import calcRandomShipPosition from './calc-ship-props/random-ship-position';


const createShip = (ship, fieldLeftIndent, fieldTopIndent) => {
  
  let battleShip = {
    name: ship,
    left: calcRandomShipPosition(fieldLeftIndent),
    top: calcRandomShipPosition(fieldTopIndent),
    isVertical: isVertical(),
    decksNum: calcShipDecksNumber(ship),
  }

  return checkShipPosition(battleShip);
}

export default createShip;
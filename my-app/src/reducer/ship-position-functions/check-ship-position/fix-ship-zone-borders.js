const fixShipZoneBorders = ({
  shipZoneRight, 
  shipZoneBottom, 
  shipZoneLeft, 
  shipZoneTop}) => {
  
  if(shipZoneTop < 0) {
    shipZoneTop = 0;
  }
  if(shipZoneLeft < 0) {
    shipZoneLeft = 0;
  }
  if(shipZoneBottom > 9) {
    shipZoneBottom = 9;
  }
  if(shipZoneRight > 9) {
    shipZoneRight = 9;
  }

  return {
    shipZoneRight, 
    shipZoneBottom, 
    shipZoneLeft, 
    shipZoneTop}
}

export default fixShipZoneBorders;
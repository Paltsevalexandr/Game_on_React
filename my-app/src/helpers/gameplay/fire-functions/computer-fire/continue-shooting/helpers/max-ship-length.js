const maxShipLength = destroyedShips => {

   let onedeckShips = destroyedShips.filter(name => name === 'onedeck');
   let twodeckShips = destroyedShips.filter(name => name === 'twodeck');
   let threedeckShips = destroyedShips.filter(name => name === 'threedeck');
   let fourdeckShip = destroyedShips.find(name => name === 'fourdeck');
   
   if(!fourdeckShip) {
      return 4;

   }else if(threedeckShips.length < 2) {
      return 3;

   }else if(twodeckShips.length < 3) {
      return 2;
      
   }else if(onedeckShips.length < 4) {
      return 1;

   }else {
      return 0;
   }
}

export default maxShipLength;

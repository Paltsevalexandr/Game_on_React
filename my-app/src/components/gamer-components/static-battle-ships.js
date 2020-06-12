import React from 'react';

const StaticBattleShips = ({battleShips}) => {
  
  return (
    <> {
      battleShips.map(
        ({name, top, left, isVertical}, index) => {
        return(
          <div key = {index}

            className = {
              "ship " + name + " battleShip " + 
              ( isVertical 
              ? name.slice(0, -1) + 'Vertical' 
              : '' )
            }

            style = {{
              left: left + 'px', 
              top: top + 'px'
            }} />
        );
      })
    } </>
  );
}

export default StaticBattleShips;

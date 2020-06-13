import React, {useRef, useEffect} from 'react';

const ComputerField = ({
    gamer,
    createOrDeleteHatching, 
    getGamerFire,
    gameMode,
    labels,
    dotsCounter, 
    selectGamer,
    children }) => {

    const prevDots = useRef();
    if(!prevDots.current) prevDots.current = 0;

    useEffect(() => {
      const dots = dotsCounter(labels);

      if(prevDots.current < dots) {
        selectGamer(2);
      }

      prevDots.current = dots;
    });

    return(
      <div className   = "battleField"
        onClick = {e => {
          if(gamer === 1 && gameMode === 'start') {
            getGamerFire(e.pageX, e.pageY);
          }
        }}
        
        onContextMenu = {e => {
          if(gameMode === 'start') {
            createOrDeleteHatching(e.pageX, e.pageY); 
            e.preventDefault();
          }
        }}>
        {children}
      </div>
    );
}

export default ComputerField;

import React from 'react';

const Priority = ({gamer}) => {

   return (
      <div className = 'priority'>
         <p>{`Ходит ${
               gamer === 1 
               ? 'игрок' 
               : 'компьютер'}`}</p>
      </div>
   )
}

export default Priority;

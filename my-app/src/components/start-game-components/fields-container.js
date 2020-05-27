import React from 'react';
import ComputerFieldContainer from '../computer-components/computer-field-container';
import CheckingShipsField from './checkingShipsField';
import GamerField from '../gamer-components/gamer-field';

const FieldsContainer = ({gameMode}) => {
   
   const renderField = () => {
      
      if(gameMode === 'randomPlaycement'
      || gameMode === 'start') {
         return <ComputerFieldContainer/>;

      }else if(gameMode === 'playerPlaycement') {
         return <CheckingShipsField />
      }
   }
   
   return (
      <div className = 'fieldsContainer'>
         <GamerField gameMode = {gameMode} />
         {renderField()}
      </div>
   )
}

export default FieldsContainer;

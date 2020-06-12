import React, {lazy, Suspense} from 'react';
import GamerField from '../gamer-components/gamer-field';
const ComputerFieldContainer = lazy(() => import('../computer-components/computer-field-container'));
const CheckingShipsField = lazy(() => import('./checkingShipsField'));

const FieldsContainer = ({gameMode}) => {

   const getField = () => {
      if(gameMode === 'randomPlaycement'
      || gameMode === 'start') {
         return (
            <Suspense fallback = {<div>loading...</div>}>
               <ComputerFieldContainer gameMode = {gameMode} />
            </Suspense>
         );

      }else if(gameMode === 'playerPlaycement') {
         return (
            <Suspense fallback = {<div>loading...</div>}>
               <CheckingShipsField />
            </Suspense>
         )
      }
   }
   
   return (
      <div className = 'fieldsContainer'>
         <GamerField gameMode = {gameMode} />
         {getField()}
      </div>
   )
}

export default FieldsContainer;

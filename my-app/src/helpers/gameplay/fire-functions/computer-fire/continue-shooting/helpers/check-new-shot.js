const checkNewShot = ({colNum, rowNum}) => {
   return (
      colNum < 10 &&
      colNum >= 0 && 
      rowNum < 10 && 
      rowNum >= 0
   );
}

export default checkNewShot;

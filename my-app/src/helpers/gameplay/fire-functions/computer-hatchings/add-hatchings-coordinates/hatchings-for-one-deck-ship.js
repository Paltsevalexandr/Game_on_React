const hatchingsForOneDeckShip = ([{colNum, rowNum}]) => {
   let hatchings = [];

   hatchings.push(
      {rowNum: rowNum - 1, colNum: colNum - 1, type: 'hatching'}, 
      {rowNum: rowNum - 1, colNum, type: 'hatching'}, 
      {rowNum: rowNum - 1, colNum: colNum + 1, type: 'hatching'},
      {rowNum, colNum: colNum - 1, type: 'hatching'},
      {rowNum, colNum: colNum + 1, type: 'hatching'},
      {rowNum: rowNum + 1, colNum: colNum - 1, type: 'hatching'}, 
      {rowNum: rowNum + 1, colNum, type: 'hatching'}, 
      {rowNum: rowNum + 1, colNum: colNum + 1, type: 'hatching'}
   );

   return hatchings;
}

export default hatchingsForOneDeckShip;

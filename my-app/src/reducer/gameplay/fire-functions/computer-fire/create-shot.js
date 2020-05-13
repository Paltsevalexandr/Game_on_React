const createShot = () => {

  const rowNum = Math.floor(Math.random() * 10);
  const colNum = Math.floor(Math.random() * 10);
  
  return { rowNum, colNum };
}

export default createShot;

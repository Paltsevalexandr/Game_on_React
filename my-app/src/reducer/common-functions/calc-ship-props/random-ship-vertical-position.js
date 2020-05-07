const randomShipIsVertical = () => {
  let random = Math.floor(Math.random() * 10);
  if(random >= 5) {
    return true;
  }else if(random < 5) {
    return false;
  }
}

export default randomShipIsVertical;
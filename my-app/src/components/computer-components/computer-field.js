import React from 'react';

class ComputerField extends React.Component {
  componentDidUpdate({labels: prevLabels}) {
    
    const {labels, dotsCounter,selectGamer} = this.props;
    const prevDots = dotsCounter(prevLabels);
    const dots = dotsCounter(labels);
    
    if(prevDots < dots) {
      selectGamer(2);
    }
  }
  render() {
    const {
      gamer,
      battleShips,
      addHatching, 
      getGamerFire,
      children } = this.props;
    let ships;

    if(battleShips.length > 0) {
      ships = battleShips.map((item, index) => {
        return (
          <div 
          className = {'ship ' + item.name + ' battleShip ' + 
          (item.isVertical ? (item.name.slice(0, -1) + 'Vertical') : '')}
          key = {index} style = {{top: item.top + 'px', left: item.left + 'px'}}>
          </div>
        )
      });
    }

    return(
      <div className   = "battleField"
        onClick = {e => {
          if(gamer === 1) {
            getGamerFire(e.pageX, e.pageY);
          }
        }}
        onContextMenu = {e => {
          addHatching(e.pageX, e.pageY); 
          e.preventDefault();
        }}>
        {ships}
        {children}
      </div>
    );
  }
}

export default ComputerField;

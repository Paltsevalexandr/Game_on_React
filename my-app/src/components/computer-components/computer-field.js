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
      createOrDeleteHatching, 
      getGamerFire,
      gameMode,
      children } = this.props;
    
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
}

export default ComputerField;

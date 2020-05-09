import React from 'react';
import {Dots} from './dots.js';

export class DotsCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {dots: []}
  }

  /*componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.createDot(this.setDotPosition());
    }
  }*/

  setDotPosition = () => {
    let coordinates = {
      leftIndent: this.correctPosition(this.props.pageX),
      topIndent: this.correctPosition(this.props.pageY)
    }
    return coordinates;
  }
  
  correctPosition = (shipCoordinates) => {
    if(shipCoordinates >= 132) {
      let excess = (shipCoordinates - 132) % 33;
      return shipCoordinates -= excess;
    }else if(shipCoordinates > 462 || shipCoordinates < 132) {
      return null;
    }
  }

  createDot = newDot => {
    console.log(newDot)
    for(let indent in newDot) {
      if(newDot[indent] !== null && newDot[indent] !== undefined) {
        this.setState({dots: [...this.state.dots, newDot]}, () => console.log(this.state.dots));
        break;
      }
      console.log(newDot)
    }
    
  }
  render() {
    return <Dots dots = {this.state.dots}/>
  }
}
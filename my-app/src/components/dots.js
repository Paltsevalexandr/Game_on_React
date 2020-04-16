import React from 'react';

export function Dots(props) {
  let dots;
  if(props.dots.length > 0) {
    dots = props.dots.map((item, index) => {
      return(
      <div key = {index} className = "dot"
           style = {{left: item.leftIndent + 'px', top: item.topIndent + 'px'}}>
      </div>
      );
    });
  }
  return <>{dots}</>
}
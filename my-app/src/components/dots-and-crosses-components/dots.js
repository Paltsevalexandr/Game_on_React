import React from 'react';

export function Dots({dots}) {
  
  if(dots.length > 0) {
    const renderDots = dots.map((item, index) => {
      return(
      <div key = {index} className = "dot"
           style = {{left: item.leftIndent + 'px', top: item.topIndent + 'px'}}>
      </div>
      );
    });
  }
  return <>{renderDots}</>
}
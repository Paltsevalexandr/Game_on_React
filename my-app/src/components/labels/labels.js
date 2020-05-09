import React from 'react';

const Labels = ({labels}) => {
  
    labels = labels.map((label, index) => {
      return(
        <div key = {index}
          className = {label.type}
          style = {{left: label.left + 'px', top: label.top + 'px'}}>
        </div>
      );
    });
    
  return <>{labels}</>
}

export default Labels;

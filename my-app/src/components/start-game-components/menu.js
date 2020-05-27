import React from 'react';

const Menu = ({children }) => {

  return (
    <div className = 'menu'>
      <h1>Расстановка кораблей</h1>  
      {children}
    </div>
  );
}

export default Menu;

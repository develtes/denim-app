import React from 'react';
import './Site-menu.css';

export const SiteMenu = () => {
  const menuItem = ['Woman', 'Man', 'New'];
  return(
    <ul className="list-style menu">
      {menuItem.map(item => <li className="menu__item">{item}</li>)}
    </ul>
  )
}
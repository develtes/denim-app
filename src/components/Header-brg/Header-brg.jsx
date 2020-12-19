import React from 'react';
import './Header-brg.css';

export const HeaderBrg = () => {
  const menuItem = ['Woman', 'Man', 'New'];
  return (
    <header>
      <div className="wrapp">
      <h1 className="visually-hidden">Магазин джинсовой одежды</h1>
      <h2 className="header__nimes">Nîmes</h2>
      
      <nav>

        <input type="checkbox" id="menu__toggle"/>
        <label class="menu__btn" htmlFor="menu__toggle"><span></span></label>
        <ul className="list-style menu">
        {menuItem.map(item => <li className="menu__item">{item}</li>)}
        </ul>

        <div className="menu__user">
          <img className="menu__user-left" src="../../img/search.svg" />
          <img className="menu__user-right" src="../../img/basket.svg" />
        </div>
      </nav>

      </div>

    </header>
  )
}
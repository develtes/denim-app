import React from 'react';
import './Footer.css';

export const Footer = () => {
  const socialItem = ['Instagram', 'Facebook'];
  return(
    <div className="hide footer">
        <img className="pointer__img" src="../../img/pointer.svg"/>
      <ul className="list-style social">
        {socialItem.map(el => <li className="social__item"><a href="#">{el}</a></li> )}
      </ul>
    </div>
  )
}
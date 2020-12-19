import React from 'react';
import { Btn } from '../Btn/Btn';
import './First-screen.css';

export const Firstscreen = () => {
  return(
    <React.Fragment>
      <picture className="main__img">
        <source srcSet="../../img/desktop_model-denim.jpg" media="(min-width: 1366px)"  />
        <source srcSet="../../img/tab_model-denim.jpg" media="(min-width: 768px)"  />
        <img className="model__denim" src="../../img/model-denim.jpg" />
      </picture>
      
        <p className="slogan">The quality you deserve</p>
        <h2 className="visually-hidden">DENIM</h2>
        <img className="slogan__img" src="../../img/DENIM.png" alt="Denim"/>

      <Btn subClass="btn--main" btnSubstring="Check new collection" />
    </React.Fragment>
  )
}
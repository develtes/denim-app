import React from 'react';
import './header.css';
import { SiteNavigation } from '../Site-navigation/Site-navigation.jsx';
import { Firstscreen } from '../First-screen/First-screen.jsx';
import { Footer } from '../Footer/Footer.jsx';

export const Header = () => {
  return (
    <header>
      <h1 className="visually-hidden">Магазин джинсовой одежды</h1>
      <h2 className="header__nimes">Nîmes</h2>
        
      <div className="header__block"> 
        <SiteNavigation />
        <Firstscreen />
        <Footer />
      </div>

    </header>
  )
}
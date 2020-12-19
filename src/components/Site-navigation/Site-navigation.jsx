import React from 'react';
import './Site-navigation.css';
import { SiteMenu } from '../Site-menu/Site-menu.jsx';
import { UserMenu } from '../User-menu/User-menu.jsx';

export const SiteNavigation = () => {
  return(
    <nav className="menu__wrap">
      <SiteMenu />
      <UserMenu />
    </nav>
  )
}
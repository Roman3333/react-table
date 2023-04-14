import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../assets/logo.svg';
import director from '../../../assets/director.png';
import cn from './header.module.scss';

export const Header = () => {
  return (
    <header className={cn.header}>
      <Link className={cn.headerLeft} to={'/'}>
        <img src={logo} alt="vdcom" />
      </Link>
      <div className={cn.headerRight}>
        <img src={director} alt="img" />
      </div>
    </header>
  );
};

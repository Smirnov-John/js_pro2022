import React from 'react';
import style from './Header.module.scss';
import { Link } from 'react-router-dom';
import { routes } from 'Helpers/Constants/routes';

export const Header = () => {
  return (
    <header className={style.wrapper}>
      <span className={style.wrapper_logo}>LOGO</span>
      <ul>
        <li>
          <Link to={routes.main}>Главная</Link>
        </li>
        <li>
          <Link to={routes.posts}>Посты</Link>
        </li>
        <li>
          <Link to={'/about'}>О нас</Link>
        </li>
      </ul>

      <Link to={routes.auth}>AUTH</Link>
    </header>
  );
};

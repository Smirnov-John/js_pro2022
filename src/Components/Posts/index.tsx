import React from 'react';
import style from './PostsList.module.scss';
import { Link } from 'react-router-dom';
import { routes } from 'Helpers/Constants/routes';

export const PostsList = () => {
  return (
    <main className={style.wrapper}>
      <h1>POSTS</h1>
      <p>POSTS1</p>
      <p>POSTS2</p>
      <p>POSTS3</p>
      <p>POSTS4</p>
      <p>POSTS5</p>
      <p>POSTS6</p>
      <Link to={routes.main}>go to main</Link>
    </main>
  );
};

import React, { useState, useEffect } from 'react';
import style from './Content.module.scss';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { routes } from 'Helpers/Constants/routes';
import { CounterComponent } from 'Components/CounterComponent';

export const Content = () => {
  const navigate = useNavigate();
  const [label, setLabel] = useState('LABEL');

  const location = useLocation();
  console.log('MainContent');

  useEffect(() => {
    console.log('MainContent UPDATE');
  }, [label]);

  return (
    <main className={style.content}>
      <h1>MAIN CONTENT</h1>

      <p>{label}</p>
      <button type="button" onClick={() => setLabel((prev) => prev + '_UP')}>
        SET LABEL
      </button>

      <CounterComponent title={label} />
      <CounterComponent title={'Orange'} />
      <Link to={routes.posts}>go to posts</Link>
      <button type="button" onClick={() => navigate(-1)}>
        go back
      </button>
      <button type="button" onClick={() => navigate(1)}>
        go next
      </button>
    </main>
  );
};

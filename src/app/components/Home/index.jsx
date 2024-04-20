import React from 'react';
import style from './style.module.css';

export const Home = () => {
  return (
    <div className={style.hero}>
      <div className={style.container}>
        <div className={style.details}>
          <h2>
            We Take Pride In <br />
            <span> Finding The Best Products For You </span>
          </h2>

          <button className={style.link}>
            <a href='/product'>Explore Now</a>
          </button>
        </div>
        <div className={style['description-img']}></div>
      </div>
    </div>
  );
};

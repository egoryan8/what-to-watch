import React from 'react';
import SmallFilmCard from "../components/SmallFilmCard";
import Footer from "../components/Footer";
import AvatarImg from '../assets/img/avatar.jpg';

const MyList: React.FC = () => {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <a href="" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src={AvatarImg} alt="User avatar" width="63" height="63"/>
            </div>
          </li>
          <li className="user-block__item">
            <a className="user-block__link">Sign out</a>
          </li>
        </ul>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
         <SmallFilmCard/>
         <SmallFilmCard/>
         <SmallFilmCard/>
         <SmallFilmCard/>
         <SmallFilmCard/>
         <SmallFilmCard/>
         <SmallFilmCard/>
         <SmallFilmCard/>
         <SmallFilmCard/>
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default MyList;
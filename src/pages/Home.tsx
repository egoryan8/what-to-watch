import React from 'react';
import SmallFilmCard from "../components/SmallFilmCard";
import AvatarImg from '../assets/img/avatar.jpg'
import Header from "../components/Header";

interface HomeProps {
  title: string,
  filmImg: string,
  genre: string,
  year: string,
  filmBg: string,
}

const Home: React.FC<HomeProps> = ({title, filmImg, genre, year, filmBg}) => {
  return (
    <div>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={filmBg} alt={title}/>
        </div>

        <Header AvatarImg={AvatarImg}/>
        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              {/*@ts-ignore*/}
              <img src={filmImg} alt={title + 'poster'} width="218"
                   height="327"/>
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{year}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 0L19 9.5L0 19V0Z" fill="#EEE5B5"/>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg width="19px" height="20px" viewBox="0 0 19 20" version="1.1" xmlns="http://www.w3.org/2000/svg"
                       xmlnsXlink="http://www.w3.org/1999/xlink">
                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <polygon id="+" fill="#EEE5B5" points="10.777832 11.2880859 10.777832 19.5527344 8.41650391 19.5527344 8.41650391 11.2880859 0.627929688 11.2880859 0.627929688 8.92675781 8.41650391 8.92675781 8.41650391 0.662109375 10.777832 0.662109375 10.777832 8.92675781 18.5664062 8.92675781 18.5664062 11.2880859"></polygon>
                    </g>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            <li className="catalog__genres-item catalog__genres-item--active">
              <a href="#" className="catalog__genres-link">All genres</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Comedies</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Crime</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Documentary</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Dramas</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Horror</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Kids & Family</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Romance</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Sci-Fi</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Thrillers</a>
            </li>
          </ul>

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
            <SmallFilmCard/>
            <SmallFilmCard/>
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

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2022 What to Watch Ltd.</p>
            <p>Project by Fogel Egor.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
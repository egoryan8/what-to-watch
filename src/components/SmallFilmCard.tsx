import React from 'react';
import AviatorImg from '../assets/img/aviator.jpg';

const SmallFilmCard: React.FC = () => {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={AviatorImg} alt="Aviator" width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="">Aviator</a>
      </h3>
    </article>
  );
};

export default SmallFilmCard;
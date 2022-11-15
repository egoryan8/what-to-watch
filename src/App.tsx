import React from 'react';
import Home from "./pages/Home";
import './main.css';
import GrandBudapestHotelImg from './assets/img/the-grand-budapest-hotel-poster.jpg';
import GrandBudapestBg from './assets/img/bg-the-grand-budapest-hotel.jpg';
import SignIn from "./pages/SignIn";
import AddReview from "./pages/AddReview";
import Player from "./pages/Player";
import PlayerPoster from './assets/img/player-poster.jpg';
import MyList from "./pages/MyList";


function App() {
  const initialFilm = {
    title: 'The Grand Budapest Hotel',
    filmImg: GrandBudapestHotelImg,
    filmBg: GrandBudapestBg,
    genre: 'Drama',
    year: '2014',
  }
  return (
    <div className="App">
      {/*<Home film={initialFilm}/>*/}
      {/*<SignIn/>*/}
      {/*<AddReview film={initialFilm}/>*/}
      {/*<Player playerPoster={PlayerPoster}/>*/}
      <MyList/>
    </div>
  );
}

export default App;

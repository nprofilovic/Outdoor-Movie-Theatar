import React from 'react';
import { View, Video } from 'react-vr';
import MovieProjector from './Layouts/MovieProjector';
//Scena
class MovieTeater extends React.Component{
  render(){
    return(
      <MovieProjector />
    );
  }
}
module.exports = MovieTeater;

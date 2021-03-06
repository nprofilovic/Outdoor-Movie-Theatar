import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Sound,
  VideoPano
} from 'react-vr';
import MainMenu from './Components/Scenes/MainMenu.js';
import MovieTeater from './Components/Scenes/MovieTeater';
import SceneSelect from './Components/Scenes/SceneSelect';

export default class OutdoorMovieTheater extends React.Component {
  constructor(props){
    super(props);

    this.state = {mainMenu: true, sceneSelect: false};
    this.updateScene = this.updateScene.bind(this);

  }
  updateScene(scene){
    switch (scene) {
      case 2:
        this.setState({mainMenu: false, sceneSelect: true});
        break;
      case 3:
        this.setState({mainMenu: false, sceneSelect: false});
        break;

    }
  }

  render() {

    const mainMenu = this.state.mainMenu;
    const sceneSelect = this.state.sceneSelect;
    return (
      <View>
        <Pano source={asset('fort-night.jpg')}>
          <Sound
            volume={0.8}
            loop = {true}
            source={{mp3: asset('fort-night-atmosphere.mp3')}}
          />
        </Pano>
        {
          mainMenu ? (
            <MainMenu text={"Outdoor Movie Theater"} buttonText={"Select a Movie"}
              updateScene={this.updateScene} scene={1}/>
          ) : (
          sceneSelect ? (
            <SceneSelect text={"Scene Select"} buttonText={"Fireplace"}
              updateScene={this.updateScene} scene={2}/>
           ) : (
               <MovieTeater/>
             )
          )
        }
      </View>
    );
  }
};

AppRegistry.registerComponent('OutdoorMovieTheater', () => OutdoorMovieTheater);

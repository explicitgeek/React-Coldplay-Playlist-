import React from 'react';
import ReactDOM from 'react-dom';
import { Video } from './Video';
import { Menu } from './Menu';

const VIDEOS = {
  HymnForWeekend: 'https://www.youtube.com/embed/YykjpeuMNEk',
  FixYou: 'https://www.youtube.com/embed/k4V3Mo61fJM',
  VivaLaVida: 'https://www.youtube.com/embed/dvgZkm1xWPE',
  Scientist: 'https://www.youtube.com/embed/rLm_aSP369M'


};


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { src: VIDEOS.fast };
    this.chooseVideo = this.chooseVideo.bind(this);
  }

  chooseVideo(newVideo){
    this.setState({
      src: VIDEOS[newVideo]
    })
  }
  
  render() {
    return (
      <div>
        <h1>Coldplay PlayList</h1>
        <Menu chooseVideo={this.chooseVideo}/>
        <Video src={this.state.src}/>
      </div>
    );
  }
}

export default App;
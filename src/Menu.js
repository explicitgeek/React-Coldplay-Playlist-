import React from 'react';

export class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(e){
    const text = e.target.value
    this.props.chooseVideo(text)
  }
  render() {
    return (
      <form onClick={this.handleClick}>
        <input type="radio" name="src" value="HymnForWeekend" /> Hymn For Weekend
        <input type="radio" name="src" value="FixYou" /> Fix You
        <input type="radio" name="src" value="VivaLaVida" /> VivaLaVida
        <input type="radio" name="src" value="Scientist" /> Scientist
      </form>
    );
  }
}
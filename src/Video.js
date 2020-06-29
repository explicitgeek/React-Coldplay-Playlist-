import React from 'react';

export class Video extends React.Component {
  render() {
    return (
      <div>
        <iframe src={this.props.src} frameborder="0" allowfullscreen></iframe>
      </div>
    );
  }
}
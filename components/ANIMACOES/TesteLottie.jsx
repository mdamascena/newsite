import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.player = React.createRef(); // initialize your ref
  }
  render() {
    return (
      <Player
        ref={this.player} // set the ref to your class instance
        autoplay={true}
        loop={true}
        controls={false}
        src="https://lottie.host/272b60dd-462d-42a3-8ed6-fec4143633d6/X4FxBascRI.json"
        style={{ height: '300px', width: '300px' }}
      ></Player>
    );
  }
}

export default App;
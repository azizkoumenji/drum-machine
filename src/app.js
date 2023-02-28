import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keys: ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"],
      soundNames: ["Heater 1", "Heater 2", "Heater 3", "Heater 4", "Heater 6", "Dsc Oh", "Kick n Hat", "RP4 Kick 1", "Cev H2"],
      soundDisplay: "Welcome!",
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleKey = this.handleKey.bind(this)
  }

  handleClick(event) {
    let audio = document.getElementById(event.target.id + "aud");
    audio.play();

    for (let i = 0; i < 9; i++) {
      if (event.target.id == this.state.keys[i]) {
        this.setState({
          soundDisplay: this.state.soundNames[i],
        });
      }
    }
  }

  handleKey(event) {
    console.log(event.key.toUpperCase())

    for (let i = 0; i < 9; i++) {
      if (event.key.toUpperCase() == this.state.keys[i]) {
        let aud = document.getElementById(this.state.keys[i] + "aud");
        console.log(aud)
        aud.play();
        this.setState({
          soundDisplay: this.state.soundNames[i],
        });
      }
    }
  }

  render() {
    document.addEventListener("keydown", this.handleKey);
    const clips = [
      "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
      "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
      "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
      "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
      "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
      "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
      "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
      "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
      "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    ];
    let counter = 0;
    let buttons = [];
    let generator = () => {
      for (let i = 0; i < 3; i++) {
        let cols = [];
        for (let j = 0; j < 3; j++) {
          cols.push(
            <div className="col justify-content-center align-items-center d-flex">
              <button
                className="drum-pad"
                id={this.state.keys[counter]}
                onClick={this.handleClick}
              >
                {this.state.keys[counter]}
                <audio
                  className="clip"
                  id={this.state.keys[counter] + "aud"}
                  src={clips[counter]}
                ></audio>
              </button>
            </div>
          );
          counter++;
        }
        buttons.push(<div className="row">{cols}</div>);
        cols = [];
      }
    };
    generator();
    console.log(buttons);

    return (
      <div id="drum-machine" className="d-flex">
        <div id="buttons">{buttons}</div>
        <div id="display" className="d-flex justify-content-center">
          <div className="align-self-center">{this.state.soundDisplay}</div>
        </div>
      </div>
    );
  }
}

export default App;

import React from "react";
import soundFile from "../../assets/smb3_text.wav";
import "./style.css";

class Card extends React.Component {
  state = {
    cursor: "none"
  }

  hoverOn() {
    let sound = new Audio(soundFile);
    sound.play();
    this.setState({cursor:"inline"});
  }

  hoverOff() {
    this.setState({cursor:"none"});
  }

  render () {
    return (
      <div 
        className="card"
        id={this.props.id}
        onClick={this.props.handleShuffle}
        style={{backgroundPositionX:this.props.backX}}
        onMouseEnter={() => this.hoverOn()}
        onMouseLeave={() => this.hoverOff()}>
        <img
          className="cursor"
          src={require("./Cursor3.png")}
          alt=""
          style={{display:this.state.cursor}}
        />
        <img 
          alt={this.props.name}
          src={this.props.image}
          style={{display:this.props.cardDisplay}}
        />
      </div>
    );
  };
}

export default Card;

import React from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
// import Scores from "./components/Scores";
import cards from "./cards.json";
import flip from "./assets/smb3_flip.wav";
import match from "./assets/smb3_match.wav";
import miss from "./assets/smb3_miss.wav";
import bgm from "./assets/smb3_bgm.mp3"
import "./App.css";

class App extends React.Component {
  state = {
    start: true,
    cards: cards,
    clickedCards: [],
    score: 0,
    totalClick: 0,
    faceUp: false,
    backX: 0,
    cardDisplay: "none",
    clickable: false
  };

  handleShuffle(id) {
    if (this.state.clickable) {
      if (!this.state.clickedCards.includes(id)) {
        let sound = new Audio(match);
        sound.play();
        this.setState({
          score: this.state.score + 1,
          clickedCards: [...this.state.clickedCards, id],
          clickable: false
        }, () => console.log(this.state.score));
      }
      else {
        let sound = new Audio(miss);
        sound.play();
        this.setState({
          score: 0,
          clickedCards: []
        }, () => console.log(this.state.score));
      }
      this.flipCard(this.state.faceUp);
    };
  };

  flipCard(faceUp) {
    let direction;
    let t = 0;
    
    const flipping = (timestamp) => {
      if (t < 157) {
        switch (t) {
          case 70:
          case 75:
          case 80:
          case 85:
          case 90:
            this.setState({backX: this.state.backX + (direction*84)});
            if (t ===70) {
              let sound = new Audio(flip);
              sound.play();
            }
            if (t === 70 && !this.state.faceUp) {
              this.setState({cardDisplay: "none"});
              this.setState({
                cards: cards.sort(() => Math.random() - 0.5),
                totalClick: this.state.totalClick + 1
              });
            };
            if (t === 90) {
              if (this.state.faceUp) {
                this.setState({cardDisplay: "flex", clickable: true});
              }
              else {
                this.flipCard(this.state.faceUp);
              }
            }
            break;
          default:
            break;
        };
        t++;
        requestAnimationFrame(flipping);
      }
    };

    if (faceUp) {
      direction = 1;
      this.setState({faceUp: false}, () => requestAnimationFrame(flipping));
    }
    else {
      direction = -1;
      this.setState({faceUp: true}, () => requestAnimationFrame(flipping));
    };
  };

  componentDidMount() {
    if (!this.state.faceUp) {
      this.flipCard(false);
    };
    // if (this.state.start) {
    //   this.setState({start:false}, () => {
    //     let sound = new Audio(bgm);
    //     sound.play();
    //   })
    // };
  }

  render() {
    return (
      <Wrapper>
        {/* <Scores></Scores> */}
        {this.state.cards.map(card => (
        <Card 
          id={card.id} 
          name={card.name} 
          image={card.image}
          handleShuffle={() => this.handleShuffle(card.id)}
          backX={this.state.backX + "px"}
          cardDisplay={this.state.cardDisplay}
          >
        </Card>
        ))}
      </Wrapper>
    );
  };
};

export default App;
import React from "react";
import "./style.css";

function Scores(props) {
  return (
    <div className="scores">
        <span>Score {props.score}</span>
        <span>High Score {props.highScore}</span>
    </div>
  );
}

export default Scores;

# Super Mario Bros. 3 Card-Clicking Game

## Introduction

This is a game written in React that in which the player clicks on animated, shuffling cards.

## Installation

The game can be accessed on-line at https://ser-dialest.github.io/smb3-memory-cards/
To run the application locally requires Node.js.
Clone the github repository in the directory of your choice.
From that directory, run the following commands:
```
npm install
npm start
```
This will install the necessary packages and open the app locally in your default web browser.

## Gameplay

The goal is to achieve the highest score possible by repeatedly clicking on cards that have not yet been clicked.
When a card is selected, the player's score will increase, the cards will turn over, and the order will be shuffled.
The same thing will occur on subsequent clicks unless the card has been previousy selected, in which case the score will be reset to zero and the game will begin again.
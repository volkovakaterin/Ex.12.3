/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable class-methods-use-this */

import Render from './render';
import Cursor from './cursor';

const render = new Render();
const cursor = new Cursor();

export default class Game {
  constructor() {
    this.missedMove = 0;
  }

  init() {
    function missedMoveMinus() {
      Game.missedMove -= 1;
      console.log(Game.missedMove);
    }
    function gameOver() {
      if (Game.missedMove === 5) {
        alert('Игра окончена!');
      }
    }
    document.addEventListener('DOMContentLoaded', () => {
      setInterval(() => {
        Game.missedMove = render.renderer();
        gameOver();
      }, 1000);
    });
    async function f() { cursor.changeCursor(); }
    f().then(missedMoveMinus());
  }
}

const game = new Game();
game.init();
// console.log(game.missedMove);

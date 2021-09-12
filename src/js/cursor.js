/* eslint-disable no-param-reassign */
/* eslint-disable linebreak-style */
// import Render from './render';

export default class Cursor {
  constructor() {
    this.area = document.querySelector('#area');
    this.point = 0;
    // this.missedMove = missedMove;
  }

  changeCursor() {
    this.area.addEventListener('mousedown', (event) => {
      const { target } = event;
      if (target.classList.contains('box_with_goblin') === false) return;
      this.area.classList.add('hammer');
      target.classList.remove('box_with_goblin');
      this.point += 1;
      target.addEventListener('mouseup', () => {
        this.area.classList.remove('hammer');
      });
    }); return 0;
  }
}

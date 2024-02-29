import { LightningElement } from 'lwc';
import { marvelousStateMgr, tickSignal } from '../../../state.ts';

export default class App extends LightningElement {
  secondsSinceRender = tickSignal();
  blue = marvelousStateMgr(this.secondsSinceRender);
  green = marvelousStateMgr(32, 'Banner');

  clickBlue() {
    this.blue.value.graduate();
  }

  clickGreen() {
    this.green.value.celebrateBirthday();
  }
}
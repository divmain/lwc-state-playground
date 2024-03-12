import { LightningElement } from 'lwc';
import { marvelousStateMgrFactory, tickSignal } from '../../../state.ts';

export default class App extends LightningElement {
  secondsSinceRender = tickSignal();
  blue = marvelousStateMgrFactory(this.secondsSinceRender);
  green = marvelousStateMgrFactory(32, 'Banner');

  clickBlue() {
    this.blue.value.graduate();
  }

  clickGreen() {
    this.green.value.celebrateBirthday();
  }
}

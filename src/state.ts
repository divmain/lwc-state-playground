import { SignalBaseClass } from '@lwc/signals';
import { defineState } from '@lwc/state';
import type { Signal } from '@lwc/signals';

export const marvelousStateMgr = defineState({
  initialState: (age: number | Signal<number>, name: string) => ({
    age,
    name: name ?? 'Strange',
    friendsAge: new TickSignal(41),
  }),
  computed: {
    birthdayInfo: (state) => `${state.name} is ${state.age} years old`,
  },
  actions: {
    celebrateBirthday: (state, num?: number) => {
      state.age += num ?? 1;
    },
    graduate: (state) => {
      state.name = `Dr. ${state.name}`;
    },
  }
});

class TickSignal extends SignalBaseClass<number> {
  value: number;
  constructor(_value: number = 0) {
    super();
    this.value = _value;
    setInterval(() => {
      this.value += 1;
      this.notify();
    }, 1000);
  }
}

export const tickSignal = () => new TickSignal();

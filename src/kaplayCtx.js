import kaplay from 'kaplay';

const k = kaplay({
  width: 1920,
  height: 1080,
  letterbox: true,
  background: [0, 0, 0],
  global: false,
  touchToMouse: true,
  buttons: {
    jump: {
      keyboard: ['space'],
      mouse: 'left',
    },
  },
  debugKey: 'd',
  debug: true, // set to false to disable debug mode
});

export default k;

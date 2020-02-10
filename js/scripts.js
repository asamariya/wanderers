barba.init({
  debug: true,
  transitions: [
    {
      name: 'next',
      leave: ({ current, next, trigger }) => {
        return new Promise(resolve => {
          resolve();
        });
      },
      enter: ({ current, next, trigger }) => {
        return new Promise(resolve => {
          resolve();
        });
      }
    }
  ],
  views: []
});

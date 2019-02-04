'use strict';

const wait = require('../src');

describe('Wait {x} of milliseconds', () => {
  test('Wait function returns a promise', () => {
    expect(wait(0)).toBeInstanceOf(Promise);
  });

  test('Callback funtion is called', () => {
    const callback = jest.fn();

    return wait(500)
      .then(callback)
      .then(() => {
        expect(callback).toBeCalled();
        expect(callback).toHaveBeenCalledTimes(1);
      });
  });

  test('Wait is called just once', () => {
    jest.useFakeTimers();
    wait(1000);

    expect(setTimeout).toHaveBeenCalledTimes(1);
  });

  test('Wait internally used a timeout of 1000 milliseconds', () => {
    jest.useFakeTimers();
    const ms = 1000;
    wait(ms);

    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), ms);
  });
});

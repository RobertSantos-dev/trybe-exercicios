const sum = require('./sum.js');

describe('Testes na função sum, que faz a soma de paramentros', () => {
    test('1° teste', () => {
        expect(sum(4, 5)).toEqual(9);
    });
    test('2° teste', () => {
        expect(sum(0, 0)).toEqual(0);
    });
    test('3° teste', () => {
        expect(() => {sum(4, '5')}).toThrow();
    });
    test('4° teste', () => {
        expect(() => {sum(4, '5')}).toThrowError(new Error('parameters must be numbers'));
      //expect(() => {sum(4, '5')}).toThrowError('parameters must be numbers');
    });
});

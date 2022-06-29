const myFizzBuzz = require('./myFizzBuzz');

describe('Testes na função myFizzBuzz, que verifica se um numero é divisivel por 3 ou por 5 ou pelos dois', () => {
    test('1° teste', () => {
        expect(myFizzBuzz(45)).toBe('fizzbuzz');
    });
    test('2° teste', () => {
        expect(myFizzBuzz(9)).toBe('fizz');
    });
    test('3° teste', () => {
        expect(myFizzBuzz(20)).toBe('buzz');
    });
    test('4° teste', () => {
        expect(myFizzBuzz(19)).toEqual(19);
    });
    test('5° teste', () => {
        expect(myFizzBuzz('22')).toBe(false);
    });
    
});
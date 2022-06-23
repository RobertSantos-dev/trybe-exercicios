const myRemove = require('./myRemove.js');

describe('Testes na função myRemove, que cria um array após a exclusão de um elemento do array anterior', () => {
    test('1° teste', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    });
    test('2° teste', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    });
    test('2° teste', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
    
});
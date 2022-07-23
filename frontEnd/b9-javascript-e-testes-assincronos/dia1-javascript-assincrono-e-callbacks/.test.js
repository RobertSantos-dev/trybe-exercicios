// Questão 7

const uppercase = (str, callback) => {
    setTimeout(() => {
      callback(str.toUpperCase());
    }, 500);
};

test('teste 1', (done) => {
    uppercase('robERt', (e) => {
        expect(e).toBe('ROBERT');
        done();
    });
});
const getNextColor = require('./logic');

test('Cambia de azul a rojo correctamente', () => {
    expect(getNextColor('blue')).toBe('red');
});

test('Cambia de rojo a azul correctamente', () => {
    expect(getNextColor('red')).toBe('blue');
});
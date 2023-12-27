import {add, substract, mediane, moyenne} from './calc.js'
test('subtract 2 - 1 to equal 1', () => {expect(substract(2, 1)).toBe(1);});
test('add 2 + 1 to equal 3', () => {expect(add(2, 1)).toBe(3);});

let testNegatif = [-1, -2, -3, -4, -5];
let testPositif = [1, 2, 3, 4, 5];
let testType = ['1', '2', '3', '4', '5'];

test('mediane de négatif to equal -3', () => {expect(mediane(testNegatif)).toBe(-3);});
test('mediane de positif to equal 3', () => {expect(mediane(testPositif)).toBe(3);});
test('mediane de type to equal 3', () => {expect(mediane(testType)).toBe(3);});

test('moyenne de négatif to equal -3', () => {expect(moyenne(testNegatif)).toBe(-3);});
test('moyenne de positif to equal 3', () => {expect(moyenne(testPositif)).toBe(3);});
test('moyenne de type to equal 3', () => {expect(moyenne(testType)).toBe(3);});
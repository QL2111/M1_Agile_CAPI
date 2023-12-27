import { mediane, moyenne} from './calc.js'

let testNegatif = [-1, -2, -3, -4, -5];
let testPositif = [1, 2, 3, 4, 5];
let testType = ['1', '2', '3', '4', '5'];

test('mediane de négatif to equal -3', () => {expect(mediane(testNegatif)).toBe(-3);});
test('mediane de positif to equal 3', () => {expect(mediane(testPositif)).toBe(3);});
test('mediane de type to equal 3', () => {expect(mediane(testType)).toBe(3);});

test('moyenne de négatif to equal -3', () => {expect(moyenne(testNegatif)).toBe(-3);});
test('moyenne de positif to equal 3', () => {expect(moyenne(testPositif)).toBe(3);});
test('moyenne de type to equal 3', () => {expect(moyenne(testType)).toBe(3);});
// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// for isPhoneNumber

test('valid phone number 1, should be true', () => {
    expect(functions.isPhoneNumber('818-333-3333')).toBe(true);
});

test('valid phone number 2, should be true', () => {
    expect(functions.isPhoneNumber('424-424-2424')).toBe(true);
});

test('invalid phone number 1, should be false', () => {
    expect(functions.isPhoneNumber('424555')).toBe(false);
});

test('invalid phone number 2, should be false', () => {
    expect(functions.isPhoneNumber('hello world')).toBe(false);
});

// for isEmail

test('valid email 1, should be true', () => {
    expect(functions.isEmail('xman@gmail.com')).toBe(true);
});

test('valid email 2, should be true', () => {
    expect(functions.isEmail('clifford@thebigreddog.us')).toBe(true);
});

test('invalid email 1, should be false', () => {
    expect(functions.isEmail('you will never have my emaiil')).toBe(false);
});

test('invalid email 2, should be false', () => {
    expect(functions.isEmail('888-888-8888')).toBe(false);
});

// for isStrongPassword

test('checking strong password 1, should be true', () => {
    expect(functions.isStrongPassword('L89_4xxxiJlm')).toBe(true);
});

test('checking strong password 2, should be true', () => {
    expect(functions.isStrongPassword('a894xcSgaA')).toBe(true);
});

test('checking weak password 1, should be false', () => {
    expect(functions.isStrongPassword('12345')).toBe(false);
});

test('checking weak password 2, should be false', () => {
    expect(functions.isStrongPassword('Ane')).toBe(false);
});

// for isDate

test('valid date 1, should be true', () => {
    expect(functions.isDate('12/12/1212')).toBe(true);
});

test('valid date 2, should be true', () => {
    expect(functions.isDate('05/21/2020')).toBe(true);
});

test('invalid date 1, should be false', () => {
    expect(functions.isDate('999/99/9999')).toBe(false);
});

test('invalid date 2, should be false', () => {
    expect(functions.isDate('Mar 5')).toBe(false);
});

// for isHexColor

test('valid hex color 1, should be true', () => {
    expect(functions.isHexColor('#9AFFFB')).toBe(true);
});

test('valid hex color 2, should be true', () => {
    expect(functions.isHexColor('#FFFFFF')).toBe(true);
});

test('invalid hex color 1, should be false', () => {
    expect(functions.isHexColor('yellow')).toBe(false);
});

test('invalid hex color 2, should be false', () => {
    expect(functions.isHexColor('#5252')).toBe(false);
});
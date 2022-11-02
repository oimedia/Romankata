
"use strict";
class RomanNumerals {
    private static ROMAN_NUMBERS: string[][] = [
            ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
            ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
            ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
            ['', 'M', 'MM', 'MMM']
    ];


    static roman(digits: number): string {
        if (digits < 1) {
            throw new Error('Sorry, this converter can only handle positive numbers');
        }
        if (digits > 3999) {
            throw new Error('Sorry, this converter can only handle numbers up to 3999');
        }
        const digitString: string = `${digits}`;
        const depth: number = digitString.length - 1;
        return [...digitString].reduce(
            (romanNumber: string, digit: string, index: number): string => {
            const currentDepth: number = depth - index;
            const romanDigit: string = RomanNumerals
                .ROMAN_NUMBERS[currentDepth][~~digit];
            return `${romanNumber}${romanDigit}`;
        },
        ''
        );
    }
}
export default RomanNumerals

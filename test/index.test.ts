import RomanNumerals from "../src/RomanNumerals";

describe('testing Roman Numeral ', () => {
    //Test the boundary conditions
    it('converts 32 to roman number XXXII', () => {
        expect(() => { RomanNumerals.roman(4123)}).toThrow('Sorry, this converter can only handle numbers up to 3999');
    })
    it('converts 32 to roman number XXXII', () => {
        expect(() => { RomanNumerals.roman(0)}).toThrow('Sorry, this converter can only handle positive numbers');
    })

    it('converts 32 to roman number XXXII', () => {
        expect(RomanNumerals.roman(32).match('XXXIII'))
    })
        test.each([
            {input: 1, output: "I"},
            {input: 2, output: "II"},
            {input: 3, output: "III"},
            {input: 4, output: "IV"},
            {input: 5, output: "V"}
        ])('Test 5 values ($input, $output)', ({input, output}) => {
            expect(RomanNumerals.roman(input).match(output));
        });
})

describe ('Test Dynamic Data 6 to 10', ()=> {
    //In practise this would be
    const testInputs = [6,7,8,9,10]
    const testOutPuts = ["VI", "VII",'VIII', "IX", "X"]
    for (let i =0; i< testInputs.length; i++) {
        it(`Test Dynamic values`, () => {
            const actual = RomanNumerals.roman(testInputs[i])
            expect(actual).toMatch(testOutPuts[i]);
        })

    }
})

describe ('Test Common edge cases', ()=> {
    //In practise this would be done using output from a known good routine
    // For brevity here use the examples from wikipedia page
    const testInputs = [39,246,789,2421,160, 207, 1009,1066]
    const testOutPuts = ["XXXIX", "CCXLVI",'DCCLXXXIX', "MMCDXXI", "CLX","CCVII", "MIX","MLXVI"]
    for (let i =0; i< testInputs.length; i++) {
        it(`Test Common edge cases`, () => {
            const actual = RomanNumerals.roman(testInputs[i])
            expect(actual).toMatch(testOutPuts[i]);
        })

    }
})

describe ('Test Common dates', ()=> {
    //In practise this would be done using output from a known good routine
    // For brevity here use the examples from wikipedia page
    const testInputs = [1776,1918,1954,2014]
    const testOutPuts = ["MDCCLXXVI", "MCMXVIII",'MCMLIV', "MMXIV"]
    for (let i =0; i< testInputs.length; i++) {
        it(`Test Common edge cases`, () => {
            const actual = RomanNumerals.roman(testInputs[i])
            expect(actual).toMatch(testOutPuts[i]);
        })

    }
})

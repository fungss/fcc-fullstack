const rot13 = require('./caesars-cipher')

tests = [
    [
        'rot13("SERR PBQR PNZC") should decode to the string FREE CODE CAMP',
        "SERR PBQR PNZC",
        "FREE CODE CAMP"
    ],
    [
        'rot13("SERR CVMMN!") should decode to the string FREE PIZZA!',
        "SERR CVMMN!",
        "FREE PIZZA!"
    ],
    [
        'rot13("SERR YBIR?") should decode to the string FREE LOVE?',
        "SERR YBIR?",
        "FREE LOVE?"
    ],
    [
        'rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.',
        "GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.",
        "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
    ],
]


test.each(tests)(
    '%s', (name, input, expected) => {
        expect(rot13(input)).toBe(expected);
    }
);
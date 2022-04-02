const convertToRoman = require('./roman-numeral-converter')


tests = [
    [
        "convertToRoman(2) should return the string II.",
        2,
        "II"
    ],
    [
        "convertToRoman(3) should return the string III.",
        3,
        "III"
    ],
    [
        "convertToRoman(4) should return the string IV.",
        4,
        "IV"
    ],
    [
        "convertToRoman(5) should return the string V.",
        5,
        "V"
    ],
    [
        "convertToRoman(9) should return the string IX.",
        9,
        "IX"
    ],
    [
        "convertToRoman(12) should return the string XII.",
        12,
        "XII"
    ],
    [
        "convertToRoman(16) should return the string XVI.",
        16,
        "XVI"
    ],
    [
        "convertToRoman(29) should return the string XXIX.",
        29,
        "XXIX"
    ],
    [
        "convertToRoman(44) should return the string XLIV.",
        44,
        "XLIV"
    ],
    [
        "convertToRoman(45) should return the string XLV.",
        45,
        "XLV"
    ],
    [
        "convertToRoman(68) should return the string LXVIII.",
        68,
        "LXVIII"
    ],
    [
        "convertToRoman(83) should return the string LXXXIII.",
        83,
        "LXXXIII"
    ],
    [
        "convertToRoman(97) should return the string XCVII.",
        97,
        "XCVII"
    ],
    [
        "convertToRoman(99) should return the string XCIX.",
        99,
        "XCIX"
    ],
    [
        "convertToRoman(400) should return the string CD.",
        400,
        "CD"
    ],
    [
        "convertToRoman(500) should return the string D.",
        500,
        "D"
    ],
    [
        "convertToRoman(501) should return the string DI.",
        501,
        "DI"
    ],
    [
        "convertToRoman(649) should return the string DCXLIX.",
        649,
        "DCXLIX"
    ],
    [
        "convertToRoman(798) should return the string DCCXCVIII.",
        798,
        "DCCXCVIII"
    ],
    [
        "convertToRoman(891) should return the string DCCCXCI.",
        891,
        "DCCCXCI"
    ],
    [
        "convertToRoman(1000) should return the string M.",
        1000,
        "M"
    ],
    [
        "convertToRoman(1004) should return the string MIV.",
        1004,
        "MIV"
    ],
    [
        "convertToRoman(1006) should return the string MVI.",
        1006,
        "MVI"
    ],
    [
        "convertToRoman(1023) should return the string MXXIII.",
        1023,
        "MXXIII"
    ],
    [
        "convertToRoman(2014) should return the string MMXIV.",
        2014,
        "MMXIV"
    ],
    [
        "convertToRoman(3999) should return the string MMMCMXCIX.",
        3999,
        "MMMCMXCIX"
    ]
]



test.each(tests)(
    '%s', (name, input, expected) => {
        expect(convertToRoman(input)).toBe(expected);
    }
);
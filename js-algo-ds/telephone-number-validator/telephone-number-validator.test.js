const telephoneCheck = require('./telephone-number-validator')

tests = [
    [
        'telephoneCheck("555-555-5555") should return a boolean.',
        "555-555-5555",
        true
    ],

    [
        'telephoneCheck("1 555-555-5555") should return true.',
        "1 555-555-5555",
        true
    ],

    [
        'telephoneCheck("1 (555) 555-5555") should return true.',
        "1 (555) 555-5555",
        true
    ],

    [
        'telephoneCheck("5555555555") should return true.',
        "5555555555",
        true
    ],

    [
        'telephoneCheck("555-555-5555") should return true.',
        "555-555-5555",
        true
    ],

    [
        'telephoneCheck("(555)555-5555") should return true.',
        "(555)555-5555",
        true
    ],

    [
        'telephoneCheck("1(555)555-5555") should return true.',
        "1(555)555-5555",
        true
    ],

    [
        'telephoneCheck("555-5555") should return false.',
        "555-5555",
        false
    ],

    [
        'telephoneCheck("5555555") should return false.',
        "5555555",
        false
    ],

    [
        'telephoneCheck("1 555)555-5555") should return false.',
        "1 555)555-5555",
        false
    ],

    [
        'telephoneCheck("1 555 555 5555") should return true.',
        "1 555 555 5555",
        true
    ],

    [
        'telephoneCheck("1 456 789 4444") should return true.',
        "1 456 789 4444",
        true
    ],

    [
        'telephoneCheck("123**&!!asdf#") should return false.',
        "123**&!!asdf#",
        false
    ],

    [
        'telephoneCheck("55555555") should return false.',
        "55555555",
        false
    ],

    [
        'telephoneCheck("(6054756961)") should return false.',
        "(6054756961)",
        false
    ],

    [
        'telephoneCheck("2 (757) 622-7382") should return false.',
        "2 (757) 622-7382",
        false
    ],

    [
        'telephoneCheck("0 (757) 622-7382") should return false.',
        "0 (757) 622-7382",
        false
        ],

    [
        'telephoneCheck("-1 (757) 622-7382") should return false.',
        "-1 (757) 622-7382",
        false
    ],

    [
        'telephoneCheck("2 757 622-7382") should return false.',
        "2 757 622-7382",
        false
    ],

    [
        'telephoneCheck("10 (757) 622-7382") should return false.',
        "10 (757) 622-7382",
        false
    ],

    [
        'telephoneCheck("27576227382") should return false.',
        "27576227382",
        false
    ],

    [
        'telephoneCheck("(275)76227382") should return false.',
        "(275)76227382",
        false
    ],

    [
        'telephoneCheck("2(757)6227382") should return false.',
        "2(757)6227382",
        false
    ],

    [
        'telephoneCheck("2(757)622-7382") should return false.',
        "2(757)622-7382",
        false
    ],

    [
        'telephoneCheck("555)-555-5555") should return false.',
        "555)-555-5555",
        false
    ],

    [
        'telephoneCheck("(555-555-5555") should return false.',
        "(555-555-5555",
        false
    ],

    [
        'telephoneCheck("(555)5(55?)-5555") should return false.',
        "(555)5(55?)-5555",
        false
    ],

    [
        'telephoneCheck("55 55-55-555-5") should return false.',
        "55 55-55-555-5",
        false
    ],

    [
        'telephoneCheck("11 555-555-5555") should return false.',
        "11 555-555-5555",
        false
    ]
]


test.each(tests)(
    '%s', (name, input, expected) => {
        expect(telephoneCheck(input)).toBe(expected);
    }
);
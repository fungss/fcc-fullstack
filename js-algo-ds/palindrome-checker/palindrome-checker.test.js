const palindrome = require('./palindrome-checker');


tests = [
    [
        "palindrome(\"eye\") should return a boolean.",
        "eye",
        true
    ],
    [
        "palindrome(\"eye\") should return true.",
        "eye",
        true
    ],
    [
        "palindrome(\"_eye\") should return true.",
        "_eye",
        true
    ],
    [
        "palindrome(\"race car\") should return true.",
        "race car",
        true
    ],
    [
        "palindrome(\"not a palindrome\") should return false.",
        "not a palindrome",
        false
    ],
    [
        "palindrome(\"A man, a plan, a canal. Panama\") should return true.",
        "A man, a plan, a canal. Panama",
        true
    ],
    [
        "palindrome(\"never odd or even\") should return true.",
        "never odd or even",
        true
    ],
    [
        "palindrome(\"nope\") should return false.",
        "nope",
        false
    ],
    [
        "palindrome(\"almostomla\") should return false.",
        "almostomla",
        false
    ],
    [
        "palindrome(\"My age is 0, 0 si ega ym.\") should return true.",
        "My age is 0, 0 si ega ym.",
        true
    ],
    [
        "palindrome(\"1 eye for of 1 eye.\") should return false.",
        "1 eye for of 1 eye.",
        false
    ],
    [
        "palindrome(\"0_0 (: /-\\ :) 0-0\") should return true.",
        "0_0 (: /-\\ :) 0-0",
        true
    ],
    [
        "palindrome(\"five|\\_/|four\") should return false.",
        "five|\\_/|four",
        false
    ]
]


test.each(tests)(
    '%s', (name, input, expected) => {
        expect(palindrome(input)).toBe(expected);
    }
);
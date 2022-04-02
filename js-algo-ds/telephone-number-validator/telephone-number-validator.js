function telephoneCheck(str) {
    let validList = [
        /^\d{3}-\d{3}-\d{4}$/,
        /^\(\d{3}\)\d{3}-\d{4}$/,
        /^\(\d{3}\)\s\d{3}-\d{4}$/,
        /^\d{3}\s\d{3}\s\d{4}$/,
        /^\d{10}$/,
        /^1\s\d{3}\s\d{3}\s\d{4}$/,
        /^1\s\d{3}-\d{3}-\d{4}$/,
        /^1\s\(\d{3}\)\s\d{3}-\d{4}$/,
        /^1\(\d{3}\)\d{3}-\d{4}$/,
    ]
    return validList.some((pat) => (
        pat.test(str)
    ));
}

// console.log(telephoneCheck("555-555-5555"));

module.exports = telephoneCheck
function palindrome(str) {
    var cleanStr = str.replace(/[^a-z0-9+]+/gi, '').toLowerCase();
    return cleanStr === cleanStr.split('').reverse().join('');
}


module.exports = palindrome

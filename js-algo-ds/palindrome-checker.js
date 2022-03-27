function palindrome(str) {
    var cleanStr = str.replace(/[^a-z0-9+]+/gi, '').toLowerCase();
    return cleanStr === cleanStr.split('').reverse().join('');
}


var testStr = "A man, a plan, a canal. Panama";
console.log(testStr);
console.log(palindrome(testStr));



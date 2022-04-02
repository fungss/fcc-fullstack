function rot13(str) {
    // A = 65, Z = 90
    let ASCIIs = Array.from(str).map((char)=>char.charCodeAt());
    // console.log(ASCIIs);
    let res = ASCIIs.map((code) => (
        (code >= 65 && code <= 90) ? (code - 65 + 13)%26 + 65 : code)
    );
    // console.log(res);
    return res.map((code) => (
        String.fromCharCode(code)
    )).join("");
}

// console.log(rot13("SERR PBQR PNZC"));

module.exports = rot13

function convertToRoman(num) {
    if (num <= 0) {
        throw("This number is too small for the convertor.")
    }
    if (num > 4998) {
        throw("This number is too big for the convertor.")
    }


    var romanSymbols = {
        1: "I",
        5: "V",
        10: "X",
        50: "L",
        100: "C",
        500: "D",
        1000: "M"
    }


    try {
        var toBeReturned = ""; 
        for (let i=Math.floor(Math.log10(num)+1); i>=1; i--){
            //console.log(parseInt((num%(10**(i)))/(10**(i-1)))*Math.pow(10, i-1));
            let digit = parseInt((num%(10**(i)))/(10**(i-1)));
            let place = Math.pow(10, i-1);
            if (digit == 5){
                toBeReturned += romanSymbols[digit*place];
            }
            if (digit < 5) {
                if (digit <= 3){
                    toBeReturned += romanSymbols[1*place].repeat(digit);
                }
                if (digit > 3){
                    toBeReturned += romanSymbols[1*place].repeat(5-digit);
                    toBeReturned += romanSymbols[5*place];
                }
            }
            if (digit > 5){
                if (digit <= 8){
                    toBeReturned += romanSymbols[5*place];
                    toBeReturned += romanSymbols[1*place].repeat(digit-5);
                }
                if (digit > 8){
                    toBeReturned += romanSymbols[1*place].repeat(digit-8);
                    toBeReturned += romanSymbols[1*place*10];
                }
            }
        }
        return toBeReturned;
    }
    catch(e){
        console.error(e.name);
        console.error(e.message);
    }
}

module.exports = convertToRoman
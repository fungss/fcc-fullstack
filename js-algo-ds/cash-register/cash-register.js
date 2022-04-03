function checkCashRegister(price, cash, cid) {
    let change = [];
    let changeDue = cash - price;
    // console.log(`changeDue: ${changeDue}`);
    const totalCid = Number(cid.map(money => money[1]).reduce((total, amt) => total + amt).toFixed(2));
    // console.log(`totalCid: ${totalCid}`);
    const coinsAndNotes = {
        'ONE HUNDRED': 100,
        'TWENTY': 20,
        'TEN': 10,
        'FIVE': 5,
        'ONE': 1,
        'QUARTER': 0.25,
        'DIME': 0.1,
        'NICKEL': 0.05,
        'PENNY': 0.01       
    }
    

    // if totalCid < change due
    if (totalCid < changeDue) {
        return {
            'status': 'INSUFFICIENT_FUNDS',
            'change': change
        };
    }


    // if totalCid == change due
    if (totalCid == changeDue) {
        change = cid;
        return {
            'status': 'CLOSED',
            'change': change
        };
    }


    
    // otherwise
    if (totalCid > changeDue) {
        let remainingDue = changeDue;
        // console.log(`changeDue: ${changeDue}`)
        let cidArr = cid.filter(([key, value]) => (value != 0))
        // console.log(`available cid: ${cidArr}`);
        while ( remainingDue>0 && cidArr.length!=0){
            // console.log(`remainingDue: ${remainingDue}`)
            let money = cidArr.pop();
            // console.log(money)
            let balance;
            if (money[1]<=remainingDue){
                balance = money[1];
                remainingDue -= balance;
                remainingDue = Number(remainingDue.toFixed(2));
            } else {
                // money[1]>remaining
                if (remainingDue%coinsAndNotes[money[0]]==0){
                    balance = remainingDue;
                    remainingDue -= balance;
                    remainingDue = Number(remainingDue.toFixed(2));
                } else {
                    // console.log(`Math.floor(remainingDue/coinsAndNotes[money[0]])*coinsAndNotes[money[0]]: ${Math.floor(remainingDue/coinsAndNotes[money[0]])*coinsAndNotes[money[0]]}`)
                    balance = Math.floor(remainingDue/coinsAndNotes[money[0]])*coinsAndNotes[money[0]];
                    remainingDue -= balance;
                    remainingDue = Number(remainingDue.toFixed(2));
                }
            }
            if (balance!=0){
                change.push([
                    money[0], 
                    balance
                ])
            }
        }

        // no exact change
        remainingDue = Number(remainingDue.toFixed(2));
        // console.log(remainingDue);
        if (remainingDue != 0){
            change = [];
            return {
                'status': 'INSUFFICIENT_FUNDS',
                'change': change
            };
        }

        return {
            'status': 'OPEN',
            'change': change
        };
    }
}

// console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
// console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));


module.exports = checkCashRegister
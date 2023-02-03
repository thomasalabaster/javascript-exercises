const sumAll = function(a, b) {
    let newNum = 0;
    let c = 0;
    if (a < 0 || b < 0 || isNaN(a) || isNaN (b) || typeof a == 'string' || typeof b == 'string')

    {
        return "ERROR";
    }
    if (a == b)
    {
        return newNum;
    }
    if (a > b)
    {
        c = a;
        a = b;
        b = c;
    }
    for (let i = a; a < b; a++)
    {
        newNum += a;
    }
    newNum += b;
    return newNum;
};

// Do not edit below this line
module.exports = sumAll;

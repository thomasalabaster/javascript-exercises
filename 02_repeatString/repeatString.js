const repeatString = function(string, num) {

    if (num < 0)
    {
        return 'ERROR';
    }
    let final = ""
    for (let i = 0; i < num; i++)
    {
        final = final.concat(string)
    }
    console.log(final);
    return final;

};

// Do not edit below this line
module.exports = repeatString;

const reverseString = function(word) {

    let length = word.length;
    let newWord = '';
    for (let i = length - 1; i > -1; i--)
    {
        newWord = newWord.concat(word[i]);

    }
    console.log(length);
    return newWord;




};

// Do not edit below this line
module.exports = reverseString;

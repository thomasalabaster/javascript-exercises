const removeFromArray = function (array, ...tryThis) {
    const newArray = [];
    

    for (let i = 0; i < array.length; i++)
    {
    if (!tryThis.includes(array[i]))
    {
      newArray.push(array[i])
    }
    }
    return newArray;
  };  

  
  // array.forEach((item) => {
  //   if (!tryThis.includes(item)) {
  //     newArray.push(item);
  //   }
  // });



    
// Do not edit below this line
module.exports = removeFromArray;

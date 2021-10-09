function sumItems(array) {
  // Sum all the numbers in the array  
  let sum = 0;
  array.forEach(element => {
     sum += +element
  });
  
  return sum;
}

module.exports = sumItems;

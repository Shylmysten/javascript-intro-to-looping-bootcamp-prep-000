// build a funtion that takes an array as an argument. Using a loop that starts at 0, add a
// string to the array 25 times. Add a specific statement when i=1 and another on all other
// iterations

function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am " + i + " strange loop.");
    }
      else {
        array.push("I am ${i} strange loops.");
      }
    }
    return array;
}

// Create a function that takes a number as an argument. Using a while loop, count down
// (using console.log) from the passed in number to 0. Then return the string 'done'

function whileLoop(n) {
  while( n > 0 ) {
    console.log(--n);
  }
    return console.log(`done.`);

}

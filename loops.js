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



// creates a function that emoves elements from `array` until `array` is empty or until
// `maybeTrue()` returns `false`:

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }

  do {
    array.pop();
  }   while (array.length > 0 && maybeTrue());
  return array;
}

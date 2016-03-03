//I.  What is the difference between `==` and `===`? When is it appropriate to use one over the other?

//They are almost identical in behaviour when doing comparisons, except for type comparisons and special cases which 
include, objects and string concatenation because of how data is stored in memory. 


//II.  What is your favorite ES2015 feature? Why? What's an example of how one would use it?




//III.  What is the value of `i` each time it is logged to the console? What causes this behavior?
for (var i = 0; i < 10; i++) {
  window.setTimeout(function () {
    console.log(i);
  }, i * 100)
}

//i should equate to 10 every time

//IV.  Write a function that calculates the nth term in the fibonacci sequence, where this sequence is defined as a series of numbers (0 1 1 2 3 5 8 13 ...), and where the sum of any term is the result of adding the previous two terms. Note: make sure that your solution can calculate larger terms (n > 30)!

nthFibonacci = function(n) {
  var start = 0;
  var next = 1;
  var result = 1;

  if (n < 1) {
    result = 0;
  }

  for (var i = 2; i <= n; i++) {
    result = start + next;
    start = next;
    next = result;
  }

  return result;
}
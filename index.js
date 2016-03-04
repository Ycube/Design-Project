//I.  What is the difference between `==` and `===`? When is it appropriate to use one over the other?

// They are almost identical in behaviour when doing comparisons, except for type comparisons and special cases which 
// include, objects and string concatenation because of how data is stored in memory. I would use == when we do not care for types 
// when working on comaprisons where as === for hard comparisons when we care about the context of the type


//II.  What is your favorite ES2015 feature? Why? What's an example of how one would use it?

// wow, this might be difficult to pick but one of my favorite features would be modules, which is similar to require.js, I am allowed
// to export helper functions and import them to to other js files elsewhere. for example the doWork function can be exported and used
// in other files

export function doWork(n) {
  //do some work
  console.log(n);
};

// inside of <script> in index.html I can import the function fibcode and use it there or use the var hello there now too.
// and in the console it should be able to run the function from within index.js

//III.  What is the value of `i` each time it is logged to the console? What causes this behavior?
for (var i = 0; i < 10; i++) {
  window.setTimeout(function () {
    console.log(i);
  }, i * 100)
}

//i should equate to 10 every time because of the settimeout

//IV.  Write a function that calculates the nth term in the fibonacci sequence, where this sequence is defined as a series of numbers (0 1 1 2 3 5 8 13 ...), and where the sum of any term is the result of adding the previous two terms. Note: make sure that your solution can calculate larger terms (n > 30)!

function fib(n) {
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
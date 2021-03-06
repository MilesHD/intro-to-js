// 1. Make the messages log in order, without changing the order the functions are written. Hint: Make 'runSecond' run in a later turn of the event loop. Hint: A timer is a web api, that will push it's function onto the callback queue after at least a certain period of time.

function runFirst() {
  console.log("Run first");
}

function runSecond() {
  console.log("Run second");
}

// Make Code Change within here
setTimeout(runSecond, 0);
runFirst();
/*****************************/

// Verify. After change, you should see:
// Run first
// Run second

// 2. Write a function named 'wrappedAlert' that wraps the 'alert' property on the 'window' object. The function should take a string in a parameter named 'message', and return a function that calls the 'prompt' function with the closured message parameter.

function wrappedAlert(message) {
  return function () {
    window.alert(message);
  };
}

// Verify
var sayHi = wrappedAlert("Hey Hey Hey");
sayHi(); // "Hey Hey Hey" in alert box

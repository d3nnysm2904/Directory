### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?


- What is a Promise?
  A promise is one-time guarantee of future value.
  Something that is pending and it will be resolved eventually 

Promises in JavaScript are objects
They are native to the language as of ES2015
A promise can be in one of three states:
Pending - It doesn’t yet have a value
Resolved - It has successfully obtained a value
Rejected - It failed to obtain a value for some reason
The only way to access the resolved or rejected value is to chain a method on the end of the promise.


- What are the differences between an async function and a regular function?

    Asynchronous callbacks run after the rest of the code
     Once you are inside the callback, the code executes predictably as per usual, (unless there are more async callbacks in there)
    a function runs automatically after been executed

   

- What is the difference between Node.js and Express.js?
  The difference between node.js and express.js in the level of abstraction: Node.js is a run-time environment for building server-side event-driven i/o application using javascript. Express.js is a framework based on node.js for building web-application using principles and approaches of node.js


- What is the error-first callback pattern?

Error-first callback The error-first pattern consists of executing a function when the asynchronous operation ends (such as an incoming AJAX response) which takes as first argument an error, if one occurred, and the result of the request as extra arguments.

- What is middleware?
  software that acts as a bridge between an operating system or database and applications, especially on a network.

- What does the `next` function do?
The next() function is very useful for error handling, when an error is it the next will move on to the code that handles the response.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```

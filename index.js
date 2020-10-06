// Import stylesheets
import './style.css';
import { createAbortablePromise } from './Abortable';

// Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `waiting...`;

let start = Date.now();

let { promise, abort } = createAbortablePromise((resolve, reject, abort) => {
  setTimeout(() => resolve(true), 3000);

  setTimeout(abort, 2500);
})

promise.then(
  val => { console.log('success', val, Date.now() - start) }
).catch(
  err => {console.log('fail', err.name, err.message, Date.now() - start); throw err}
)

setTimeout(abort, 3500)
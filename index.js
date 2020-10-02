// Import stylesheets
import './style.css';
import { createAbortablePromise } from './Abortable';

// Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `waiting...`;

let start = Date.now();

let { promise, abort } = createAbortablePromise((resolve, reject, abort) => {
  setTimeout(() => resolve(true), 3000);

  setTimeout(() => abort('BLAH'), 500);
})

promise.then(
  val => { console.log('success', val, Date.now() - start) }
).catch(
  err => console.log('fail', err, Date.now() - start)
)


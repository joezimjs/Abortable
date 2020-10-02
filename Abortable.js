export function createAbortablePromise (callback) {
  let controller = new AbortController()

  let promise = new Promise((resolve, reject) => {
    callback(resolve, reject, abort)
    controller.signal.addEventListener('abort', () => reject(new DOMException('Asynchronous Operation Aborted', 'AbortError')));
  })

  function abort() { controller.abort() }

  return { promise, abort }
}
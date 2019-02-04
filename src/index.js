/**
 * Wait a specific amount of time and return a promise
 * Promisified setTimeout
 *
 * @export
 * @param {Number} [ms=0] Milliseconds to wait
 * @returns {Promise}
 */
module.exports = function wait(ms = 0) {
  return new Promise(resolve => setTimeout(resolve, ms));
};

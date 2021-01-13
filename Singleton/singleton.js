/**
 * Implementation based on a digest of the following articles:
 * 
 * https://www.digitalocean.com/community/tutorials/js-js-singletons
 * https://www.sitepoint.com/javascript-design-patterns-singleton/
 * http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html
 */

module.exports = (function() {
  /**
   * A class definition wrapped in a closure to implement
   * the singleton pattern for that class.
   */
  class Singleton {
    /**
     * The constructor
     */
    constructor() {
      this._msg = 'Hello, World!';
    }

    /**
     * @return {string} The message
     */
    get msg() {
      return this._msg;
    }

    /**
     * Setter method for the message
     * @param {string} msg The message
     */
    set msg(msg) {
      this._msg = msg;
    }
  }

  let instance;

  return {
    getInstance() {
      if (!instance) {
        instance = new Singleton();
        delete instance.constructor;
      }
      return instance;
    },
  };
})();

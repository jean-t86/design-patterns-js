/**
 * In this example, all loggers will act on the message. However, in practice,
 * each message in a log is assigned a severity, and the chain of objects
 * will each act on the message based on the severity.
 *
 * See: https://en.wikipedia.org/wiki/Chain-of-responsibility_pattern
 */

/**
 * A logger class
 */
class Logger {
  /**
   * A method to chain loggers to share responsibility for a message
   * @param {Logger} nextLogger The next logger in the chain
   * @return {Logger} The current object to enable calling chain again
   */
  chain(nextLogger) {
    let lastLogger = this;
    while (lastLogger.next) {
      lastLogger = lastLogger.next;
    }

    lastLogger.next = nextLogger;
    return this;
  }

  /**
   * A getter method for the next logger in the chain
   */
  get next() {
    return this._next;
  }

  /**
   * A setter method for the next logger in the chain
   * @param {Logger} next The next logger
   */
  set next(next) {
    this._next = next;
  }

  /**
   * Sends the message to be logged through the chain
   * @param {string} msg The message to log
   */
  message(msg) {
    this.writeMessage(msg);
    if (this._next) {
      this._next.message(msg);
    }
  }

  /**
   * An empty method to be overriden by children classes
   * @param {string} msg The message to log
   */
  writeMessage(msg) { }
}

/**
 * A Logger that logs to the console
 */
class ConsoleLogger extends Logger {
  /**
   * This method logs to the console
   * @param {string} msg The message to log
   */
  writeMessage(msg) {
    console.log(`I am a console: ${msg}`);
  }
}

/**
 * A Logger that sends the logs via email
 */
class EmailLogger extends Logger {
  /**
   * This method should send the logs via email but for the purposes of this
   * example, it logs to the console.
   * @param {string} msg The message to log
   */
  writeMessage(msg) {
    console.log(`I am an email: ${msg}`);
  }
}

/**
 * A Logger that writes the logs to a file
 */
class FileLogger extends Logger {
  /**
   * This method should write the logs to a file but for the purposes of this
   * example, it logs to the console.
   * @param {string} msg The message to log
   */
  writeMessage(msg) {
    console.log(`I am a file: ${msg}`);
  }
}

module.exports = {ConsoleLogger, EmailLogger, FileLogger};

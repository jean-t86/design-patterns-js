/**
 * The Subject class which accepts Observers to observe changes in its value
 */
class Subject {
  /**
   * The constructor. It also initializers the array of subscribed observers.
   * @param {number} value The value of the Subject
   */
  constructor(value) {
    this._value = value;
    this._observers = [];
  }

  /**
   * Return the value
   */
  get value() {
    return this._value;
  }

  /**
   * Sets the value and triggers every registered observers.
   * @param {number} value The new value
   */
  set value(value) {
    this._value = value;
    this._observers.forEach((observer) => observer.trigger(value));
  }

  /**
   * Subscribes a new observer to the subject
   * @param {Observer} observer The observer to subscribe
   */
  subscribe(observer) {
    this._observers.push(observer);
  }

  /**
   * Unsubscribe the new observer from the subject
   * @param {Observer} observer The observer to unsubscribe
   */
  unsubscribe(observer) {
    this._observers = this._observers.filter((item) => {
      if (item != observer) {
        return item;
      }
    });
    console.log();
  }
}

/**
 * The Observer class which can be used to observe changes in the value of the
 * Subject class
 */
class Observer {
  /**
   * The constructor for class Observer
   * @param {string} name A name for the observer to differentiate from other
   * observers
   */
  constructor(name) {
    this._name = name;
  }
  /**
   * This method gets triggered whenever the subject's value changes.
   * @param {number} value The updated value
   */
  trigger(value) {
    console.log(`I am ${this._name} and I observed that value is now ${value}`);
  }
}

module.exports = {Subject, Observer};

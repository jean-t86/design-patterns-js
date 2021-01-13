/**
 * Implementation based on the following article:
 *
 * https://www.dofactory.com/javascript/design-patterns/decorator
 */

/**
 * A class representing a user
 */
class User {
  /**
   * The class constructor
   * @param {string} name The name of the user
   */
  constructor(name) {
    this.name = name;
  }

  /**
   * A method to print out a string representation ot the class
   * @return {string} The string representation of the class
   */
  say() {
    return `User: ${this.name}`;
  }
};

/**
 * A class that wraps around a user to decorate it with a street and city
 */
class DecoratedUser {
  /**
   * The constructor
   * @param {User} user The user
   * @param {string} street The street
   * @param {string} city The city
   */
  constructor(user, street, city) {
    this.user = user;
    this.name = user.name; // ensures interface stays the same
    this.street = street;
    this.city = city;
  }

  /**
   * A method to print out a string representation ot the class
   * @return {string} The string representation of the class
   */
  say() {
    return `Decorated User: ${this.name}, ${this.street}, ${this.city}`;
  }
};

module.exports = {User, DecoratedUser};

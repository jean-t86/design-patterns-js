const {User, DecoratedUser} = require('./decorator.js');

const user = new User('Kelly');
console.log(user.say());

const decorated = new DecoratedUser(user, 'Broadway', 'New York');
console.log(decorated.say());

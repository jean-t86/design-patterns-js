const Singleton = require('./singleton.js');

const singleton1 = Singleton.getInstance();
console.log(singleton1.msg);

singleton1.msg = 'Bonjour le monde!';
const singleton2 = Singleton.getInstance();
console.log(singleton2.msg);

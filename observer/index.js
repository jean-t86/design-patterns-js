const {Subject, Observer} = require('./observer.js');

const subject = new Subject(10);
const observer = new Observer('First observer');

subject.subscribe(observer);
subject.subscribe(new Observer('Second observer'));
subject.value = 20;

subject.unsubscribe(observer);
subject.value = 30;

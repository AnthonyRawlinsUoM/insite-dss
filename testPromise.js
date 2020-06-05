var Promise = require('promise');

let x='b';

var Init = new Promise((resolve, reject) => {
    if (x == 'a') {
      console.log('resolving');
      resolve(x);
    }
    if (x == 'b') {
      console.log('rejecting');
      reject(x);
    }
  });

var test = Init;

Init((a, b) => {
  (a) => {console.log('a')},
  (b) => {console.log('b')}});

test.then(
  console.log('Then called.')
);

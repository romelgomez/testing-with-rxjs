var Rx = require('@reactivex/rxjs');

//emit every 1s, take 2
const source = Rx.Observable.interval(1000).take(2);

source.subscribe(val => console.log(val));
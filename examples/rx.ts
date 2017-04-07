import Rx from 'rxjs/Rx';

 
let obj0 = {
    name: 'romel javier',
    lastName: 'Gomez Herrera'
}

let obj1 = {
    name: 'rudy alberto',
    lastName: 'Gomez Herrera'
}

let arr = [obj0, obj1];

Rx.Observable.from(arr)
    .pluck('name')
    .subscribe(function(value) {
        console.log(value);
    });


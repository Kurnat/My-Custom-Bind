"use strict";

const user = {
    name: 'Maximus',
    age: '12',
    job: 'Tester'
};

function logPerson(phone, phone2) {
    console.log(`Person ${this.name}, ${this.age}, ${this.job}, phone ${phone}, phone2 ${phone2}`);
}

Function.prototype.myBind = function (person, ...args) {

    return (...rest)=> { 
        console.log(this); // "this" is a function ??? but only with arrow-function !!! but if i use function expression i catch error

        person[this.name] = this; 
        const result = person[this.name](...args.concat(rest));
        delete person[this.name];
        return result
    }
}

logPerson.myBind(user, '+2401234','+38093231' )();
// logPerson.myBind(user, '+2401234' )('+38093231');
// logPerson.myBind(user)( '+2401234','+38093231');
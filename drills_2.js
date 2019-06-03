'use strict'

function jediName(firstName, lastName){
    let start =lastName.split(0,3);
    let end = firstName.split(0,2);
    let fullName = start+end;
    return fullName;
}

let Arpan = jediName(Paul,Han);
console.log(Arpan);


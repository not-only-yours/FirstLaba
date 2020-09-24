function arr(a){
    var array = [];
    for(var i=0;i<parseInt(a);i++) {
        array.push(i);
    }
    return array;
}
console.log(arr(12));

function divide(number,firstDivide,secondDivide){
    if(number && firstDivide &&  secondDivide) {
        if(number % firstDivide === 0 && number % secondDivide === 0){
            return true;
        }
        else return false;
    }
    return false;
}

console.log(divide(1,2,3));


function capFirst(a){
    if(typeof a == 'string' && a.length>0 && a.length<=10) {
        return a.charAt(0).toUpperCase() + a.slice(1)
    }
}
console.log(capFirst("dsdg"))



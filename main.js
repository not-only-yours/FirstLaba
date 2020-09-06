function arr(a){
    var array = [];
    for(var i=0;i<a;i++) {
        array.push(i);
    }
    return array;
}
console.log(arr(12));

function divide(a,b,c){
    if(Number.isInteger(a/b) && Number.isInteger(a/c)){
       return true;
    }else {
        return false;
    }
    return null;
}
console.log(divide(1,2,3));


function capFirst(a){
    if(typeof a == 'string' && a.length>0 && a.length<=10) {
        return a.charAt(0).toUpperCase() + a.slice(1)
    }
}
console.log(capFirst("roma nemnogo lox"))



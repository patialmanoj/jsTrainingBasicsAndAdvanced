//**********functions */

function callbyRef(obj){ obj.x= obj.x*5 ; obj.y= y*5 ;  console.log(obj.x + " "+ obj.y);}

function argum(x,y){ x= x*x ; y= y*y ;  console.log(x + " "+ y);}

// function definition
// function expression
// call
// apply


var obj = {num : 2};

var addTOTHis = function(a,b,c){

    return this.num + a+b+c
}

addTOTHis.call(obj , 1,2,3)

addTOTHis.apply(obj,[1,2,3])

var f = addTOTHis.bind(obj)
f(1,2,3);
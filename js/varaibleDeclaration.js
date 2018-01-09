// var let const

//let works similarly to var, but the variable it declares is block-scoped, it only exists within the current block. var is function-scoped.

//const works like let, but the variable you declare must be immediately initialized, with a value that can’t be changed afterwards

function order(x, y) {
    if (x > y) { // (A)
        let tmp = x *y ;
        x = x*x ;
        y = y*y;
    }
    console.log(x + ' ' + y);
    console.log(tmp===x); // ReferenceError: tmp is not defined
    return [x, y];
}

//*********************************************************************** */

// const
const foo;
// SyntaxError: missing = in const declaration

const bar = 123;
bar = 456;

//*************************************************** *
//Since for-of creates one binding (storage space for a variable) per loop iteration, it is OK to const-declare the loop variable:

for (const x of ['a', 'b']) {
    console.log(x);
}

///// means some thing like , const b is defined in different block
function check (a){
  if(a < 10) { const b ='less';   return b ;}
  else {
    const b = 'more'; return b ;
   }
}

/// 

//********************************************/
// shadowing 
function func() {
    const foo = 5;
    var x = 10
    if (x) {
       const foo = 10; // shadows outer `foo`
       console.log(foo); // 10
    }
    console.log(foo); // 5
  }
//*************************************************** */
  /// const with objects

  const obj = {};
  obj.prop = 123;
  console.log(obj.prop); // 123

 


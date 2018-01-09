// Six data types that are primitives:
// Boolean
// Null  -- The value null represents the intentional absence of any object value

https://bitsofco.de/javascript-typeof/

function getVowels(str) {
    var m = str.match(/[aeiou]/gi);
    if (m === null) {
      return 0;
    }
    return m.length;
  }
  
  console.log(getVowels('sky'));

// Undefined --A primitive value automatically assigned to variables that have just been declared or to formal arguments for which there are no actual arguments.
// Number
// String
// Symbol (new in ECMAScript 6)


// // and Object



typeof null // "object"  
The null value is technically a primitive, the way "object" or "number" are primitives. 
This would typically mean that the type of null should also be "null". However,
this is not the case because of a peculiarity with the way JavaScript was first defined.

In the first implementation of JavaScript, values were represented in two parts -
a type tag and the actual value. There were 5 type tags that could be used, and the tag for referencing an object was 0. 
The null value, however, was represented as the NULL pointer,
which was 0x00 for most platforms. As a result of this similarity, null has the 0 type tag,
which corresponds to an object.


// Object.create(prototype_object, propertiesObject)
// Object.create methods accepts two arguments.

// prototypeObject: Newly created objects prototype object. It has to be an object or null.
// propertiesObject: Properties of the new object. This argument is optional

//********************Interesting Facts************** */
function checkSwtich(val){
    switch(val){
  
      case '5' : alert("its five"); break;
      default  : alert("its default")
  }
  
 }
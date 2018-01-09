var foo = "bar"
function bar(){
  var foo = "rock";
}
function bax(foo){
  foo = "bam";
  bam = "yay";
}

/********************* */

var foo = "bar"
function bar(){
    var foo = "rock";

    function baz(foo){
        foo = "bam";
        bam = "yay";     
    }
    baz();
}

bar();
foo;
bam;
baz();

/*************** */

var foo = function bar(){
    var foo ="baz";
    function baz(foo){
        foo = bar;
        foo;
    }
    baz();
};

foo();
bar();

/************* */

a;
b;
var a = b;
var b= 2;
b;
a;

//......................
var a = b();
var c = d();
a;
c;

function b() {
    return c;
}
var  d = function() {
    return b();
};

//.........................

foo();
var foo =2;
 function foo(){
     console.log("bar");
 }

 function foo(){
     console.log("foo");
 }

 //..................

 a(1);

function a(foo){
    if(foo>20) return foo;
    return b(foo+20);
}
function b(foo){
    return c(foo) +1;
}
function c(foo){
    retunr a(foo*2);
}


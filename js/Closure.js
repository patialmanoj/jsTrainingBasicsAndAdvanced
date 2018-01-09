function GetIncrementFunc(incBy){
 var sum = 0;
 return function(){sum += incBy ; return sum ;}

}

var f = GetIncrementFunc(5)


//////////////////

function foo() {
 var bar = "bar";
 function baz(){
   console.log(bar);
  }
  bam(baz);
}
function bam(baz){
  baz();
}

/////////////////

for(var i=1 ;i<=5 ; i++){
  setTimeout(function(){
     console.log("i: "+ i);
  }, i*1000);
 
}
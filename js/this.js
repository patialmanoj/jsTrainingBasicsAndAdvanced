
var emp = new Object();
emp["name"] = "Manoj"
emp["salary"] = 500000;
emp["payCheck"] = function (){

    var monthly = this["salary"]/12;
    console.log(this["name"] + " got check of  :" + monthly);
}




//************************** */**1 
// https://jsfiddle.net/patialJi/j5amu5zq/
var user = {
      data:[
        {name:"T. Woods", age:37},
        {name:"P. Mickelson", age:43}
      ],
    clickHandler: function (event) {
        var randomNum = ((Math.random () * 2 | 0) + 1) - 1; // random number between 0 and 
        //console.log (this.data[randomNum].name + " " + this.data[randomNum].age);
        alert(this.data[randomNum].name + " " + this.data[randomNum].age);
      }
 }
 $("button").click(user.clickHandler); 
 
 
/*
var user = {
      data:[
        {name:"T. Woods", age:37},
        {name:"P. Mickelson", age:43}
      ],
    clickHandler: function (event) {
        var randomNum = ((Math.random () * 2 | 0) + 1) - 1; // random number between 0 and 
        //console.log (this.data[randomNum].name + " " + this.data[randomNum].age);
        try{
      		 $("#showMessage").append(this.data[randomNum].name + " " + this.data[randomNum].age);	
				}
        catch(err){
        	 //document.write(err.message);
            $("#showMessage").text(err.message);
				}
      }
 }
 
 $("button").click(user.clickHandler); 
 
*/

 //************************************************* 2 
 

 var gameController = {
    scores  :[20, 34, 55, 46, 77],
    avgScore:null,
    players :[
          {name:"Tommy", playerID:987, age:23},
          {name:"Pau", playerID:87, age:33}
        ]
    }

    var appController = {
    scores  :[900, 845, 809, 950],
    avgScore:null,
    avg     : function () {

          var sumOfScores = this.scores.reduce(function (prev, cur, index, array) {
                return prev + cur;
              });

          this.avgScore = sumOfScores / this.scores.length;
        
        }
    }

    //If we run the code below,
    // the gameController.avgScore property will be set to the average score from the appController object "scores" array
   
    // Don't run this code, for it is just for illustration; we want the appController.avgScore to remain null
    gameController.avgScore = appController.avg();    
    alert(appController.avgScore);
    alert(gameController.avgScore);

// https://jsfiddle.net/patialJi/x9qhg1ok/
/*
 var gameController = {
    scores  :[10, 10, 20, 20, 20],
    avgScore:null,
    players :[
          {name:"Tommy", playerID:987, age:23},
          {name:"Pau", playerID:87, age:33}
        ]
    }

    var appController = {
    scores  :[900, 845, 809, 950],
    avgScore:null,
    avg     : function () {

          var sumOfScores = this.scores.reduce(function (prev, cur, index, array) {
                return prev + cur;
              });

          this.avgScore = sumOfScores / this.scores.length;
        
        }
    }
    
 //gameController.avg =  appController.avg;
 //gameController.avg();
   gameController.avgScore = appController.avg(); 

  $("#message").text("app controller value is "+ appController.avgScore);
  $("#newmessage").text("game controller is " + gameController.avgScore);
  
*/ */


/// private and public method 
 // this way is little memory consuming and could create issue in perfomance in some browser
 function Employee(name ,salary){
    this.name  =  name ;
    this.get_Salary = function(){ return salary; };
    this.set_Salary = function(newSalary){ salary = newSalary; };
  
    
 }

 Employee.prototype.issuePayCheck = function (){

     var monthly = this.get_Salary()/12;
     alert(this.name + " : "+ monthly);
 }

 /////////////////////
// other way could be
 function Employee(name , salary){

     var probations = 0;
     var doubleSecretProbations = function(){
         alert(probations);
     }
     this.putOnProbation = function(){
         probations++;
         if(probations > 2 )
            doubleSecretProbations();
     };
 }


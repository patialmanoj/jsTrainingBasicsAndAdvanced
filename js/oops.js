// Encapauslate , Constructor 
//The use of the this keyword inside the function specifies that these properties will be unique to every instance of the User object:
function User (theName, theEmail) {
    this.name = theName;
    this.email = theEmail;
    this.quizScores = [];
    this.currentScore = 0;
}
​
User.prototype = {
    constructor: User,
    saveScore:function (theScoreToAdd)  {
        this.quizScores.push(theScoreToAdd)
    },
    showNameAndScores:function ()  {
        var scores = this.quizScores.length > 0 ? this.quizScores.join(",") : "No Scores Yet";
        return this.name + " Scores: " + scores;
    },
    changeEmail:function (newEmail)  {
        this.email = newEmail;
        return "New Email Saved: " + this.email;
    }
}

// A User ​
firstUser = new User("Richard", "Richard@examnple.com"); 
firstUser.changeEmail("RichardB@examnple.com");
firstUser.saveScore(15);
firstUser.saveScore(10); 
​
firstUser.showNameAndScores(); //Richard Scores: 15,10​
​
​// Another User​
secondUser = new User("Peter", "Peter@examnple.com");
secondUser.saveScore(18);
secondUser.showNameAndScores(); //Peter Scores: 18


///////// Inheritance

// 1) utility fuctions
// IMplementation of object.create
Object.create = function (o) {
​//It creates a temporary constructor F()​
        function F() {
        }
​//And set the prototype of the this constructor to the parametric (passed-in) o object​
​//so that the F() constructor now inherits all the properties and methods of o​
        F.prototype = o;
​
​//Then it returns a new, empty object (an instance of F())​
​//Note that this instance of F inherits from the passed-in (parametric object) o object. ​
​//Or you can say it copied all of the o object's properties and methods​
        return new F();
    }

////////////
function inheritPrototype(childObject, parentObject) {
    // As discussed above, we use the Crockford’s method to copy the properties and methods from the parentObject onto the childObject​
​// So the copyOfParent object now has everything the parentObject has ​
    var copyOfParent = Object.create(parentObject.prototype);
​
    //Then we set the constructor of this new object to point to the childObject.​
​// Why do we manually set the copyOfParent constructor here, see the explanation immediately following this code block.​
    copyOfParent.constructor = childObject;
​
    // Then we set the childObject prototype to copyOfParent, so that the childObject can in turn inherit everything from copyOfParent (from parentObject)​
   childObject.prototype = copyOfParent;
}



//2 implementing inheritance
//https://jsfiddle.net/patialJi/kwb8k99o/
​function Question(theQuestion, theChoices, theCorrectAnswer) {
    // Initialize the instance properties​
    this.question = theQuestion;
    this.choices = theChoices;
    this.correctAnswer = theCorrectAnswer;
    this.userAnswer = "";
​
    // private properties: these cannot be changed by instances​
    var newDate = new Date(),
    // Constant variable: available to all instances through the instance method below. This is also a private property.​
        QUIZ_CREATED_DATE = newDate.toLocaleDateString();
​
​// This is the only way to access the private QUIZ_CREATED_DATE variable ​
​// This is an example of a privilege method: it can access private properties and it can be called publicly​
    this.getQuizDate = function () {
        return QUIZ_CREATED_DATE;
    };
​
​// A confirmation message that the question was created​
    console.log("Quiz Created On: " + this.getQuizDate());
​
}


Question.prototype.getCorrectAnswer = function () {
    return  this.correctAnswer;
};
​
Question.prototype.getUserAnswer = function () {
    return this.userAnswer;
};
​
Question.prototype.displayQuestion = function () {
    var questionToDisplay = "<div class='question'>" + this.question + "</div><ul>";
        choiceCounter = 0;
​
    this.choices.forEach(function (eachChoice)  {
        questionToDisplay += '<li><input type="radio" name="choice" value="' + choiceCounter + '">' + eachChoice + '</li>';
        choiceCounter++;
    });
    questionToDisplay += "</ul>";
​
    console.log (questionToDisplay);
}; 

//**************************** */
// Create the MultipleChoiceQuestion​
​function MultipleChoiceQuestion(theQuestion, theChoices, theCorrectAnswer){
​// For MultipleChoiceQuestion to properly inherit from Question, here inside the MultipleChoiceQuestion constructor, we have to explicitly call the Question constructor​
​// passing MultipleChoiceQuestion as the this object, and the parameters we want to use in the Question constructor:​
    Question.call(this, theQuestion, theChoices, theCorrectAnswer);
};
inheritPrototype(MultipleChoiceQuestion, Question);


/******************************************/ 
// Create the DragDropQuestion​
​function DragDropQuestion(theQuestion, theChoices, theCorrectAnswer) {
    Question.call(this, theQuestion, theChoices, theCorrectAnswer);
}
​
​// inherit the methods and properties from Question​
​inheritPrototype(DragDropQuestion, Question);

DragDropQuestion.prototype.displayQuestion = function () {
    // Just return the question. Drag and Drop implementation detail is beyond this article​
    console.log(this.question);
};


// Initialize some questions and add them to an array​
​var allQuestions = [
​new MultipleChoiceQuestion("Who is Prime Minister of England?", ["Obama", "Blair", "Brown", "Cameron"], 3),
   
​new MultipleChoiceQuestion("What is the Capital of Brazil?", ["São Paulo", "Rio de Janeiro", "Brasília"], 2),
   
​new DragDropQuestion("Drag the correct City to the world map.", ["Washington, DC", "Rio de Janeiro", "Stockholm"], 0)
];
​
​// Display all the questions​
allQuestions.forEach(function (eachQuestion)  {
    eachQuestion.displayQuestion();
});





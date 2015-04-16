//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

function isTyler(name) {
	if (isTyler==="Tyler"){
	return(true);
		else {
			return(false)
		}
	}
}


//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


function getName(name){
	var name = prompt("What is your name");
	return name;
}


//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  function welcome (getName){
  	alert("Welcome " + name);
  }


//Next problem




//What is the difference between arguments and parameters?

// very little functional difference (i.e. they're used interchangeably often) or "they're the same


//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


0
undefined
false
NaN
null
" "
you test for falsy data with the ! or the === 

//Next Problem



//Create a function called myName that returns your name

  function myName (name) {
  	var name= "matt";
  	return(name);
  }

//Now save the function definition of myName into a new variable called newMyName

var newMyName = myName(name);

//Now alert the result of invoking newMyName

alert(newMyName);

//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

 function outerFn(){
 	var nam = function ("matt");
 	return nam;
 }


//Now save the result of invoking outerFn into a variable called innerFn.

var innerFn = outerFn(name)

//Now invoke innerFn.

innerFn()
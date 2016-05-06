var position = 0, correct = 0;
var test; 
var question; 
var frame;
var choice, answer, A, B, C, D;
var hazards =[[],[],[],[]];
var answers = [[7,32],[9,26],[12],[6]];
var totalSeconds= 0;
var timer;

//theory test questions
function theory(){
    //Using no definition allows the variable to be global
    document.getElementById("title").innerHTML = "Theory Test";
    questionsArray = [
    [ "A Roof Rack fitted to your car will cause:", "Your Fuel consumption to increase", "Less chance of an accident", "Your Speed to increase","Your Fuel consumption to decrease", "A" ],  //The answer is the last element i.e. "A"
	[ "Which vehicle should you allow extra room for when overtaking?", "RoadSweepers", "Cars", "Bikes", "Tractors","C" ],
	[ "How long must you hold a full EC/EEA driving licence for, before supervising a learner driver?", "Two Years", "Five Years", "Three Years", "One Year","C" ],
	[ "While travelling within the legal speed limit, another motorist attempts to overtake your car. Should you stop the other motorist from doing this?", "Yes, as this driver is making you feel uncomfortable", "No,Unless you're in a safe position to prevent the driver", "Not under any cicumstances", "Yes, as the driver has the potential to harm you, passengers and other drives","C" ],
	[ "What is the national speed limit for the outside lan of a motorway?","80mph","60mph","50mph","70mph","D"],
	[ "You are waiting behind a cyclist at traffic lights, when they change should you:","Beep your horn and drive through before they can","Allow the cyclist time and room","Drive as near to them as possible to ensure you get through","Overtake the cyclist","B"],
	[ "At an accident someone is unconscious, What should you do?","Sweep up any broken glass/debris that is near them","Check the person's airways,breathing and stop any heavy bleeding","Carry on moving","Take names and details of those involved","B"],
	[ "Whilst travelling within the legal speed limit, a motorist behind you flashes its headlights. What should you do?","Keep travelling at the same speed","Accelerate to generate a gap between you and the vehicle behind","Wave your hand out the window","Brake sharply","A"],
	[ "An accident casualty has injured their arm and they can move it,however,it is bleeding.Why should you instruct them to keep it upright","It will help ease the bleeding","It will keep it out of your way","To salute the queen and all her land","It will be eaiser for the ambulance to see them","A"],
	[ "Your Vehicle breaks down in a tunnel,What should you do first?","Switch on your hazard lights and call your breakdown company","Scream in terror for the tunnel rat will find you","Get out of your car and stand behind it to show other drivers that it has broken down","Flag down another driver for help","A"]
    ];
    nextQuestion();
}

function showMe(){  //Show Me , Tell Me Questions
	document.getElementById("title").innerHTML = "Show me, Tell me Test";
    questionsArray = [
    [ "A Roof Rack fitted to your car will cause:", "Your Fuel consumption to increase", "Less chance of an accident", "Your Speed to increase","Your Fuel consumption to decrease", "A" ],  //The answer is the last element i.e. "A"
	[ "Which vehicle should you allow extra room for when overtaking?", "RoadSweepers", "Cars", "Bikes", "Tractors","C" ],
	[ "How long must you hold a full EC/EEA driving licence for, before supervising a learner driver?", "Two Years", "Five Years", "Three Years", "One Year","C" ],
	[ "While travelling within the legal speed limit, another motorist attempts to overtake your car. Should you stop the other motorist from doing this?", "Yes, as this driver is making you feel uncomfortable", "No,Unless you're in a safe position to prevent the driver", "Not under any cicumstances", "Yes, as the driver has the potential to harm you, passengers and other drives","C" ],
	[ "What is the national speed limit for the outside lan of a motorway?","80mph","60mph","50mph","70mph","D"],
	[ "You are waiting behind a cyclist at traffic lights, when they change should you:","Beep your horn and drive through before they can","Allow the cyclist time and room","Drive as near to them as possible to ensure you get through","Overtake the cyclist","B"],
	[ "At an accident someone is unconscious, What should you do?","Sweep up any broken glass/debris that is near them","Check the person's airways,breathing and stop any heavy bleeding","Carry on moving","Take names and details of those involved","B"],
	[ "Whilst travelling within the legal speed limit, a motorist behind you flashes its headlights. What should you do?","Keep travelling at the same speed","Accelerate to generate a gap between you and the vehicle behind","Wave your hand out the window","Brake sharply","A"],
	[ "An accident casualty has injured their arm and they can move it,however,it is bleeding.Why should you instruct them to keep it upright","It will help ease the bleeding","It will keep it out of your way","To salute the queen and all her land","It will be eaiser for the ambulance to see them","A"],
	[ "Your Vehicle breaks down in a tunnel,What should you do first?","Switch on your hazard lights and call your breakdown company","Scream in terror for the tunnel rat will find you","Get out of your car and stand behind it to show other drivers that it has broken down","Flag down another driver for help","A"]
    ];
    nextQuestion();
}

//Hazard test functions
function hazard(){
    videoArray = [
    ["https://www.youtube.com/embed/z6BlzSQuiPI?autoplay=1&showinfo=0&controls=0"],
    ["https://www.youtube.com/embed/Sve4KB1fiFI?autoplay=1&showinfo=0&controls=0"],
    ["https://www.youtube.com/embed/b6VSPczqGIc?autoplay=1&showinfo=0&controls=0"],
    ["https://www.youtube.com/embed/rYoknaX0dbw?autoplay=1&showinfo=0&controls=0"]
    ];

    startVidTest();
}

function startVidTest(){
	document.getElementById("title").innerHTML = "Are you Ready?"; //Changes title 
	test = document.getElementById("test"); // sets test to be the id test
	test.innerHTML += "<p>The Test will begin immediately after pressing 'Start'. The Test will consist of Four Hazard perception Videos. You must press 'Hazard' every time you see one.<p>"; //adds a paragraph of text explaining the test
	test.innerHTML += "<button style ='text-align:center;' onclick='nextVid()'> Start </button>"; //calls the nextVid function to start the test
}

function nextVid(){
	document.getElementById("title").innerHTML = "Hazard Perception Test"
	clearInterval(timer); //Resets the setInterval function after the next video loads
	totalSeconds = 0; //Resets the count
	timer = setInterval(setTime,1000);   // calls the set time function which adds a count to the Total seconds every second
    test = document.getElementById("test");
	if(position >= videoArray.length){   //When the end of the test is reach load the total score
		document.getElementById("test_status").innerHTML = correct +" out of " + " 30 " ;
		test.innerHTML ="Test Completed";
		document.getElementById("video").src ="about:blank"; //sets the video back to blank
		position = 0; //restarts the positions and scores
		correct = 0;
		return false; //exits function
	}
	document.getElementById("test_status").innerHTML = "Hazard Video "+(position+1)+" of "+videoArray.length; //shows what question the user is currently on
	var url = videoArray[position][0];  // sets url to be the url from the videoArray
	document.getElementById("video").width ="560";  // sets width and height of videos
	document.getElementById("video").height="315"; 
	document.getElementById("video").src = url;   //Changes to the next video by changing the src property 
	position = position + 1 ; //adds one to position
	test.innerHTML = "<button onClick=' addHazard();'> Hazard </button>"  // calls the add hazard function
	
}


function setTime() {
    ++totalSeconds;  //adds 1 to totalSeconds
    if (totalSeconds == 51){ //once total seconds reaches 51 (the length of each video)
    	checkVidAnswers(); //check the answers
    	nextVid(); // move onto the next video
    }
    }
function addHazard(){
    hazards[position-1].push(totalSeconds); //Push the totalSeconds to the current question position into the hazards array
}
function checkVidAnswers(){
		for (var i=0; i < answers[position-1].length; i++){ //Loop for the length of the answers of current video
			for(var j=0; j < hazards[position-1].length; j++){ //loop for how many answers the user inputted
				var ans = answers[position-1][i]  //set ans to be the actual answer
				var haz = hazards[position-1][j] //set haz to be the inputted ans
				if ((ans >= -5) || (ans <= 5)){ // if the user is within 5 seconds either way
					var add = ans - haz
					Math.abs(add)     //scores based on reaction time
					correct += add; //add score to correct
					break;
				}
			}
		}
	}




function nextQuestion(){
	test = document.getElementById("test");
	if(position >= questionsArray.length){   //When the end of the test is reach load the total score
		test.innerHTML = "<h2>You got "+correct+" of "+questionsArray.length+" questions correct</h2>";
		document.getElementById("test_status").innerHTML = "Test Completed";
		position =0;
		correct = 0;
		return false; //exits function
	}
	document.getElementById("test_status").innerHTML = "Question "+(position+1)+" of "+questionsArray.length;
	question = questionsArray[position][0];
	A = questionsArray[position][1];      //Changes the selections to be either A,b,c,d and the Q No.
	B = questionsArray[position][2];
	C = questionsArray[position][3];
	D = questionsArray[position][4];
	test.innerHTML = "<h3 id='Question'>"+question+"</h3>";
	test.innerHTML += "<input id='radioQ' type='radio' name='answer' value='A'> "+"<span id='Q'> "+A+" </span>"+"<br>"; //builds an set of radio buttons with the choices next to 
	test.innerHTML += "<input id='radioQ' type='radio' name='answer' value='B'> "+"<span id='Q'> "+B+" </span>"+"<br>";
	test.innerHTML += "<input id='radioQ' type='radio' name='answer' value='C'> "+"<span id='Q'> "+C+" </span>"+"<br>";
	test.innerHTML += "<input id='radioQ' type='radio' name='answer' value='D'> "+"<span id='Q'> "+D+" </span>"+"<br>";
	test.innerHTML += "<button type='button' class='btn btn-info' onclick='checkAnswer()'>Submit Answer</button>"; //builds a button that calls the check answer function
	
}
function checkAnswer(){
	answer = document.getElementsByName("answer");  //Creates an array from the choices
	for(var i=0; i<answer.length; i++){ //loop the array of the choices
		if(answer[i].checked){
			choice = answer[i].value; //sets choice to be the value selected for that question
		}
	}
	if(choice == questionsArray[position][5]){
		correct++; //Add one to the correct variable to total the scores
	}
	position++; //INCREMENTS the position variable to the next question 
	nextQuestion(); //recalls to function to move to next question
}

//Prajakta Deosthali 1185340
//today's date
var today = new Date();
var month = 1+ today.getMonth();

var ques;
var correctScore = 0;
var wrongScore = 0;
var tempQuesArray;
var tempObj;
var count=120;
var time;
var answer; 

//list of topics 
var topics=["USA","Americas","Europe", "Asia","Africa"];

//choose topic randomly
var topicNumber = Math.floor((Math.random() * 5) + 1) - 1;
var topicName = topics[topicNumber];



//on successful loading of the page
$(document).ready(function(){    
document.getElementById('today').innerHTML = month +"/"+today.getDate() +"/"+  today.getFullYear();
document.getElementById('displayTopic').innerHTML= topicName;

});
//Questions object
var geoAmerica =[
{
question: "What is the capital of Brazil?",
questionType: 1,
choices: [ "Brasilia", "Lima","Ottawa","Berlin","Rio"],
correctChoice: "Brasilia",
score: 100
},
{
question: "What is the capital of Peru?",
questionType: 1,
choices: [ "Brasilia", "Lima","Ottawa","Berlin","Rio"],
correctChoice: "Lima",
score: 100
},
{
question: "What is the capital of Canada?",
questionType: 1,
choices: [ "Brasilia", "Lima","Ottawa","Berlin","Rio"],
correctChoice: "Ottawa",
score: 100
},
{
question: "What is the capital of Mexico?",
questionType: 2,
correctChoice: "Mexico city",
score: 100
},
{
question: "What is your name?",
questionType: 2,
correctChoice: "AJAX",
score: 100
}
]

var geoUSA = [
{
question: "What is the capital of USA?",
questionType: 1,
choices: [ "Washington", "New York","Boston","Denver","Atlanta"],
correctChoice: "Washington",
score: 100
},
{
question: "What is the capital of Idaho?",
questionType: 1,
choices: [ "Washington", "Boise","Boston","Denver","Atlanta"],
correctChoice: "Boise",
score: 100
},
{
question: "What is the capital of Texas?",
questionType: 1,
choices: [ "Washington", "New York","Austin","Denver","Atlanta"],
correctChoice: "Austin",
score: 100
},
{
question: "What is the capital of Florida?",
questionType: 2,
correctChoice: "Tallahassee",
score: 100
},
{
question: "What is your name?",
questionType: 2,
correctChoice: "AJAX",
score: 100
}
]


var geoEurope=[
{
question: "What is the capital of UK?",
questionType: 1,
choices: [ "London", "Berlin","Paris","Minsk","Athens"],
correctChoice: "London",
score: 100
},
{
question: "What is the capital of France?",
questionType: 1,
choices: [ "London", "Berlin","Paris","Minsk","Athens"],
correctChoice: "Paris",
score: 100
},
{
question: "What is the capital of Germany?",
questionType: 1,
choices: [ "London", "Berlin","Paris","Minsk","Athens"],
correctChoice: "Berlin",
score: 100
},
{
question: "What is the capital of Belarus?",
questionType: 2,
correctChoice: "Minsk",
score: 100
},
{
question: "What is your name?",
questionType: 2,
correctChoice: "AJAX",
score: 100
}
]

var geoAfrica = [
{
question: "What is the capital of Ethiopia?",
questionType: 1,
choices: [ "Addis Ababa", "Delhi","Kigali","Cairo","Beijing"],
correctChoice: "Addis Ababa",
score: 100
},
{
question: "What is the capital of Rwanda?",
questionType: 1,
choices: [ "Addis Ababa", "Delhi","Kigali","Cairo","Beijing"],
correctChoice: "Kigali",
score: 100
},
{
question: "What is the capital of Egypt?",
questionType: 1,
choices: [ "Addis Ababa", "Delhi","Kigali","Cairo","Beijing"],
correctChoice: "Cairo",
score: 100
},
{
question: "What is the capital of Senegal?",
questionType: 2,
correctChoice: "Dakar",
score: 100
},
{
question: "What is your name?",
questionType: 2,
correctChoice: "AJAX",
score: 100
}
]

var geoAsia =[
{
question: "What is the capital of China?",
questionType: 1,
choices: [ "Beijing", "Delhi","HongKong","Berlin","Islamabad"],
correctChoice: "Beijing",
score: 100
},
{
question: "What is the capital of India?",
questionType: 1,
choices: ["Beijing", "Delhi","HongKong","Berlin","Islamabad"],
correctChoice: "Australia",
score: 100
},
{
question: "What is the capital of Pakistan?",
questionType: 1,
choices: [ "Beijing", "Delhi","HongKong","Berlin","Islamabad"],
correctChoice: "Australia",
score: 100
},
{
question: "What is the capital of Nepal?",
questionType: 2,
correctChoice: "Kathmandu",
score: 100
},
{
question: "What is your name?",
questionType: 2,
correctChoice: "AJAX",
score: 100
}
]


var category=[
	{
		qType: "USA",
		questions: geoUSA
	},
	{
		qType: "Americas",
		questions: geoAmerica
	},
    {
		qType: "Europe",
		questions: geoEurope
	},
    {
		qType: "Africa",
		questions: geoAfrica
	},
    {
		qType: "Asia",
		questions: geoAsia
	}
    
]

//On starting the quiz 
function startQuiz(){
	//Hide the start button
   document.getElementById("start").style.display='none';

	//show the questions
	document.getElementById("yourscore").style.display="inline";
    

	traverse();
    
    //show the buttons 
    document.getElementById("next").style.display='inline';  
}


function traverse(){
	tempQuesArray = category[topicNumber].questions;				
	
	
    
	tempObj = tempQuesArray.pop();											
	answer = tempObj.correctChoice;									

	
	document.getElementById("question").innerHTML = tempObj.question.toString(); 
//Dynamic display of questions     
	if(tempObj.questionType == 2){
       
    
            $("#answer").html('<p class="hw2-center hw2-large">Answer  </p>' +
            '<p class="hw2-center hw2-large"><input type="text" name="textbox" id="answerText" value=" " class="hw2-black" placeholder="Enter Answer!"></p>');
	}
	else if (tempObj.questionType == 1){
	
       	var choicesHtml="";
       	var currentQuestion = 0;
        var i;
            
        for (i = 0; i < tempObj.choices.length; i++) 
            {
                
                  
                choicesHtml += "<p class='hw2-center hw2-large'><input type='radio' name='quiz" + currentQuestion +
                "' class='choice' value='" + tempObj.choices[i] + "'>" +						
                " <label for='choice'>" + tempObj.choices[i] + "</label><br></p>";
               
                document.getElementById("answer").innerHTML = choicesHtml;
                
                
            } 
          
	}
   //display submit button to the user
	if(tempQuesArray.length == 0){
			document.getElementById("next").remove();
			document.getElementById("submit").style.display='inline';

	}
}


function updateScore(){
    
	if(tempObj.questionType == 2){
    
        //check the answers
        var ans = document.getElementById('answerText').value.toString().trim().toUpperCase();
        
        if (tempObj.correctChoice.toString() == "AJAX"){
            
            correctScore = correctScore +1 ;
            document.getElementById("rightScore").innerHTML = correctScore; 
        }
    	else if(ans == tempObj.correctChoice.toString().toUpperCase()){			
    			
                correctScore = correctScore + 1;
               
    			document.getElementById("rightScore").innerHTML = correctScore; 
    	}
    	else{
    		wrongScore = wrongScore + 1;
    		document.getElementById("wrongScore").innerHTML = wrongScore; 	
    	}
	}
	else if (tempObj.questionType == 1){
         
             
             if (!$(".choice[name='quiz0']:checked").val()) {
      
       wrongScore = wrongScore + 1;
       
       document.getElementById("wrongScore").innerHTML = wrongScore; 
    }
       else {
	     		
    $(".choice").each(function() {
        
        if($(this).is(':checked')){  
    	    
             if($(this).val() == tempObj.correctChoice.toString()){
        		
                correctScore = correctScore + 1;
                document.getElementById("rightScore").innerHTML = correctScore; 		
        	}
        	else{
        	wrongScore = wrongScore + 1;
    		document.getElementById("wrongScore").innerHTML = wrongScore;		
        	}
        }
        
    });
    }
	}	
    
		traverse();
}
    
    
function displayNext(){
	updateScore();
}   

function submit(){
     
	//hide buttons
	document.getElementById("question").style.display='none';
	document.getElementById("answer").style.display='none';
    document.getElementById("submit").style.display='none';
    
    //display Quit to the user
	document.getElementById("quit").style.display='inline';
    
	//display final score
	document.getElementById("displayScore").style.display='inline';
	
    document.getElementById("scorepara").style.display='inline';
    var xyz =  document.getElementById('rightScore').innerHTML; 
    document.getElementById("displayScore").innerHTML = xyz*100;
	
	
}

function quit(){
	var x;
	
	    if (confirm("Are you sure you want to quit?") == true) {
    		window.close();
    	}
        
	
}






/*
Coded by Orzo with special thanks to Birdy (for the idea + word list contributions)
Also thanks to w3schools, Mozilla Firefox, Stack Overflow, the Internet... and of course, Calliope Town <3
otherwise, this would not have been possible!
*/


var items = [];
var charries = [];
var states = [];
var char1;
var char2;
var char3;

$.get('https://rawgit.com/orzoxcv/calliope-roulette/master/items.txt', function(data) {
    items = data.split("\n");
});

$.get('https://rawgit.com/orzoxcv/calliope-roulette/master/states.txt', function(data) {
    states = data.split("\n");
});

// $.get('https://rawgit.com/orzoxcv/calliope-roulette/master/characters.txt', function(data) {
//     charries = data.split("\n");
// });

function randomValueFromArray(array){
  var random = Math.floor(Math.random()*(array.length-1))
  return array[random];
}

function initializeCharries(){
	var x = document.getElementById("myText").value;
	charries = x.split("\n");
	char1 = Math.floor(Math.random() * (charries.length));
	char2 = char1;
	while(char2 == char1){
		char2 = Math.floor(Math.random() * (charries.length));
	}
	if (charries.length>2){
		char3 = char2;
		while(char3 == char2 || char3 == char1){
			char3 = Math.floor(Math.random() * (charries.length-1));
		}
	}
}

function genScenario(){
	var text = document.getElementById("outputScenario");
	initializeCharries();
	
	//***RANDOMIZE MADLIBS***//
	var item = randomValueFromArray(items);
	var state = randomValueFromArray(states);

	//***GENERATE A SCENARIO***//
	var x = Math.floor(Math.random() * 8); //from 0-7
	
	var scenario = "For some reason, ";

	if (x==0){
		scenario += ":P1: owes :P2: :a(n): :xitem:."	
	}
	else if (x==1){
		scenario += ":P1: gives :P2: :a(n): :xitem:.";
	}
	else if (x==2){
		scenario += ":P1: sees :P2: walking around with :a(n): :xitem:";
		
		//***Check that the "item" makes sense***//
		var checklogic = item.substring(0,1);
		while (checklogic.localeCompare("*")==0) {
			item = randomValueFromArray(items);
		}
		
		//***Tack on some extra goodies!***//
		var addwhile = Math.floor(Math.random() * 2)+1;
		if (addwhile == 1){
			scenario += " while :xstate:.";
		} else {
			scenario += ".";
		}
		
		var plottwist = Math.floor(Math.random() * 2)+1;
		if (charries.length>2){
			if (plottwist == 1){
				scenario += " Plot-twist: It's :P3:'s.";
			}
		}
	}
	else if (x==3){
		scenario += ":P1: steals :P2:'s :xitem:."
	}
	else if (x==4){
		scenario += ":P1: needs to borrow :P2:'s :xitem:."
	}
	else if (x==5){
		scenario += ":P1: and :P2: are arguing over who gets the last :xitem:.";
		
		//***Check that the "item" makes sense***//
		var checklogic = item.substring(0,1);
		while (checklogic.localeCompare("*")==0) {
			item = randomValueFromArray(items);
		}
	}
	else if (x==6) {
		scenario += ":P1: is :state:, and :P2: is the last person they want to see."
	}
	else { //x==7
		scenario += ":P1: has :P2:'s :xitem:."
		var knowyet = Math.floor(Math.random() * 2)+1;
		if (knowyet == 1){
			scenario += " But :P2: doesn't know that. Yet.";
		}
	}


	//***MAD LIBS REPLACEAROO***//
	scenario = scenario.replace(/:P1:/g, charries[char1]);
	scenario = scenario.replace(/:P2:/g, charries[char2]);
	scenario = scenario.replace(/:xitem:/g, item);
	scenario = scenario.replace(/:xstate:/g, state);
	if (charries.length>2){
		scenario = scenario.replace(/:P3:/g, charries[char3]);
	}
	
	//***LOGIC STUFF***//
	scenario = scenario.replace(/\*/g, "");


	//***GRAMMAR STUFF***//
	var firstletteritem = item.substring(0,1);

	if (firstletteritem.localeCompare("a") == 0 || 
		firstletteritem.localeCompare("e") == 0 || 
		firstletteritem.localeCompare("i") == 0 ||
		firstletteritem.localeCompare("o") == 0 ||
		firstletteritem.localeCompare("u") == 0) {

		scenario = scenario.replace(":a(n):", "an");

	} else {
		scenario = scenario.replace(":a(n):", "a");
	}

	//***OUTPUT***//
	text.innerHTML = scenario;
}

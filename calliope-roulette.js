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
	char1 = Math.floor(Math.random() * (charries.length-1));
	char2 = char1;
	while(char2 == char1){
		char2 = Math.floor(Math.random() * (charries.length-1));
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

	//***GENERATE A SCENARIO***//

	var x = Math.floor((Math.random() * 6) + 0);
	

	var scenario = "For some reason, ";

	if (x==0){
		scenario += ":P1: owes :P2: :a(n): :xitem:."	
	}
	else if (x==1){
		scenario += ":P1: gives :P2: :a(n): :xitem:.";
	}
	else if (x==2){
		scenario += ":P1: sees :P2: walking around with :a(n): :xitem:";
		
		var w = Math.floor(Math.random() * 2)+1;
		if (w == 1){
			scenario += " while :xstate:.";
		} else {
			scenario += ".";
		}
		
		var y = Math.floor(Math.random() * 2)+1;
		if (charries.length>2){
			if (y == 1){
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
	}
	else {
		scenario += ":P1: has :P2:'s :xitem:."
		var y = Math.floor(Math.random() * 2)+1;
		if (y == 1){
			scenario += " But :P2: doesn't know that. Yet.";
		}
	}


	//***MAD LIBS REPLACEAROO***//
	var item = randomValueFromArray(items);
	var state = randomValueFromArray(states);

	scenario = scenario.replace(":P1:", charries[char1]);
	scenario = scenario.replace(":P2:", charries[char2]);
	scenario = scenario.replace(":xitem:", item);
	scenario = scenario.replace(":xstate:", state);
	if (charries.length>2){
		scenario = scenario.replace(":P3:", charries[char3]);
	}


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

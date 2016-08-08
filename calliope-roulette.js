
var items = [];
var charries = [];
var char1;
var char2;

$.get('https://rawgit.com/orzoxcv/calliope-roulette/master/items.txt', function(data) {
    items = data.split("\n");
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
}

function genScenario(){
	var text = document.getElementById("outputScenario");
	initializeCharries();

	//***GENERATE A SCENARIO***//

	var x = Math.floor((Math.random() * 5) + 0);

	var scenario = "For some reason, ";

	if (x==0){
		scenario += ":P1: owes :P2: :a(n): :xitem:."	
	}
	else if (x==1){
		scenario += ":P1: gives :P2: :a(n): :xitem:.";
	}
	else if (x==2){
		scenario += ":P1: sees :P2: walking around with :a(n): :xitem:."
	}
	else if (x==3){
		scenario += ":P1: steals :a(n): :xitem: from :P2:."
	}
	else if (x==4){
		scenario += ":P1: needs to borrow :P2:'s :xitem:."
	}
	else {
		scenario += ":P1: has :P2:'s :xitem:."
	}


	//***MAD LIBS REPLACEAROO***//
	var item = randomValueFromArray(items);

	scenario = scenario.replace(":P1:", charries[char1]);
	scenario = scenario.replace(":P2:", charries[char2]);
	scenario = scenario.replace(":xitem:", item);


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

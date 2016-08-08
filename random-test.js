var animals = [];

$.get('https://rawgit.com/orzoxcv/calliope-roulette/master/animals.txt', function(data) {
    animals = data.split("\n");
});

function myFunction() {
    var x = document.getElementById("testing");
    var y = Math.floor((Math.random() * animals.length) + 0);
    x.innerHTML = animals[y];
}

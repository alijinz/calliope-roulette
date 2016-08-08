var items = [];

$.get('https://rawgit.com/orzoxcv/calliope-roulette/master/animals.txt', function(data) {
    items = data.split("\n");
});

function myFunction() {
    var x = document.getElementById("testing");
    var y = Math.floor((Math.random() * 2) + 1);
    x.innerHTML = items[y];
}



var items = [];

$.get('https://rawgit.com/orzoxcv/calliope-roulette/master/animals.txt', function(data) {
    items = data.split("\n");
});

function myFunction() {
    var x = document.getElementById("testing");
    var y = Math.floor((Math.random() * items.length) + 0);
    x.innerHTML = items[y];
}

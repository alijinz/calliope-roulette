//var items = ["dog", "cat", "horse", "cow"];

function myFunction() {
    var x = document.getElementById("testing");
    var y = Math.floor((Math.random() * 2) + 1);
    x.innerHTML = items[y];
}

jQuery.get('https://rawgit.com/orzoxcv/calliope-roulette/master/animals.txt', function(data) {
    alert(data);
});

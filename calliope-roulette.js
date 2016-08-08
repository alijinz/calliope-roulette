var items = ["dog", "cat", "horse", "cow"];

function myFunction() {
    var x = document.getElementById("testing");
    var y = Math.floor((Math.random() * 4) + 0);
    x.innerHTML = items[y];
}

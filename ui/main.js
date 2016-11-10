var button = document.getElementById("counter");
counter = 0;
button.onclick = function() {
    alert("Hello! I am an alert box!!");
    counter = 1;
    var span = document.getElementById("count");
    span.innerHTML = counter.toString();
};

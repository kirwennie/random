var randomNumber=0;

function Random() {
    randomNumber=Math.floor(Math.random()*10);
    document.getElementById("Result").innerHTML = randomNumber;
}

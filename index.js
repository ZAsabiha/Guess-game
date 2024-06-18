const enter = document.getElementById("enter");
const again = document.getElementById("again");
const outputtext = document.getElementById("outputtext");

const random = Math.floor(Math.random() * 100) + 1;

function checknumber() {
    const input = document.getElementById('userinput').value;
    const userinput = parseInt(input, 10);

    if (isNaN(userinput)) {
        outputtext.innerHTML = "That's not a number!";
    } else if (userinput < 1 || userinput > 100) {
        outputtext.innerHTML = "It has to be between 1 and 100";
    } else if (userinput === random) {
        outputtext.innerHTML = "You guessed it right! It was " + random;
        outputtext.style.color = "pink";
    } else if (userinput > random) {
        outputtext.innerHTML = "You guessed it too high";
    } else if (userinput < random) {
        outputtext.innerHTML = "You guessed it too low";
    }
}

enter.addEventListener('click', checknumber);
again.addEventListener('click', function () {
    location.reload();
});

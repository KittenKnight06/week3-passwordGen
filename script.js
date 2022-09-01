// Creating variables values
var confirmLength;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;


const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const character = ["!", "#", "$", "%", "&", "'", "*", "+", ",", "-", ".", "/", "<", "=", ">", "?", "@", "^", "_", "~"];
const alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var toUpper = function (x) {
    return x.toUpperCase();
};

alphaUp = alpha.map(toUpper);

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function () {
    password = writePassword();
    document.getElementById("password").placeholder = password;
});

var choices;

//Generate password
function writePassword() {
   
    confirmLength = window.prompt("Please choose between 8 and 128 characters!");
    if (!confirmLength) {
        alert("This needs a value");
    } else if (confirmLength < 8 || confirmLength > 128) {

        confirmLength = window.prompt("You must choose between 8 and 128!");

    } else {
        confirmNumber = confirm("Will the password contain numbers?");
        confirmCharacter = confirm("Will the password contain special characters?");
        confirmUppercase = confirm("Will the password contain Uppercase letters?");
        confirmLowercase = confirm("Will the password contain Lowercase letters?");
    };

    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("You must choose at least one criteria!");
    }

    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
        choices = character.concat(number, alpha, alphaUp);
    }
    
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = character.concat(number, alphaUp);
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = character.concat(number, alpha);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = character.concat(alpha, alphaUp);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(alpha, alphaUp);
    }
    
    

    else if (confirmCharacter && confirmNumber) {
        choices = character.concat(number);

    } else if (confirmCharacter && confirmLowercase) {
        choices = character.concat(alpha);

    } else if (confirmCharacter && confirmUppercase) {
        choices = character.concat(alphaUp);
    }
    else if (confirmLowercase && confirmNumber) {
        choices = alpha.concat(number);

    } else if (confirmLowercase && confirmUppercase) {
        choices = alpha.concat(alphaUp);

    } else if (confirmNumber && confirmUppercase) {
        choices = number.concat(alphaUp);
    }
    

    
    else if (confirmCharacter) {
        choices = character;
    }
    else if (confirmNumber) {
        choices = number;
    }
    else if (confirmLowercase) {
        choices = alpha;
    }

    
    var password = [];
    for (var i = 0; i < confirmLength; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }

    var password = password.join("");
    UserInput(password);
    return password;
}

function UserInput(password) {
    document.getElementById("password").textContent = password;

}

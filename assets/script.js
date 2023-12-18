/* The Plan
1.X Click generate password button to initiate prompts to user about password criteria
2.X Allow user to select which criteria are included in the password using alert()
3.X Prompt user to choose password length btwn 8-128
4.X Prompt user to choose which characters to include lowercase, uppercase, numeric, special characters 
   (can be any combination of charcters)
5.X All inputs should be validated and a minimum of one criteria should be selected, if none are selected restart
6.X When all prompts are complete and at least one is chosen, generate a password which matches the criteria
7.X Display password on website
*/

// Assignment code here
var lowerCaseAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseAlphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var allNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var allSpecialCharacters = ["!","#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
var guaranteedCharacters = [];
var charactersToUse = [];
// var generatedPassword = "";

//Booleans
var hasLowercase = null;
var hasUppercase = null;
var hasNumbers = null;
var hasSpecials = null;


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  //console.log(password);
  
}

function generatePassword() {
  charactersToUse.length = 0;
  var generatedPassword = [];
  //Create a variable to store user input about password length
  var length = prompt("How long should your password be? Select a number between 8 and 128.");
  length = Number(length);
  //if the length is not between 8 and 128 make the user try again
  if (length < 8 || length > 128) {
    alert("Sorry that number is not between 8 and 128. Please try again.");
    return;
  }
  //console.log("Password length: " + length);

  //Create variables to store user input about types of characters to include
  hasLowercase = window.confirm("Would you like the password to contain lowercase letters?");
  //console.log("Lowercase: " + hasLowercase)
  hasUppercase = window.confirm("Would you like the password to contain uppercase letters?");
  //console.log("Uppercase: " + hasUppercase);
  hasNumbers = window.confirm("Would you like the password to contain numbers?");
  //console.log("Numbers: " + hasNumbers);
  hasSpecials = window.confirm("Would you like the password to contain special characters?");
  //console.log("Special characters: " + hasSpecials);
  
  //If statements check if at least 1 criteria was chosen, if not restart
  //Take all chosen criteria arrays and add them to the chosen characters array
  var chosenCriteria = 0;
  
  if (hasLowercase){
    chosenCriteria++;
    charactersToUse = charactersToUse.concat(lowerCaseAlphabet);
    guaranteedCharacters.push(lowerCaseAlphabet[Math.floor(Math.random()*lowerCaseAlphabet.length)]);
  }
  if (hasUppercase) {
    chosenCriteria++;
    charactersToUse = charactersToUse.concat(upperCaseAlphabet);
    guaranteedCharacters.push(upperCaseAlphabet[Math.floor(Math.random()*upperCaseAlphabet.length)]);
  }
  if (hasNumbers) {
    chosenCriteria++;
    charactersToUse = charactersToUse.concat(allNumbers);
    guaranteedCharacters.push(allNumbers[Math.floor(Math.random()*allNumbers.length)]);
  }
  if (hasSpecials) {
    chosenCriteria++;
    charactersToUse = charactersToUse.concat(allSpecialCharacters);
    guaranteedCharacters.push(allSpecialCharacters[Math.floor(Math.random()*allSpecialCharacters.length)]);
  }

  if (chosenCriteria < 1) {
    alert("Sorry, you must choose at least one criteria. Please try again")
    charactersToUse.length = 0;
    return;
  }

  //Actually generate a password of the desired length containing all selected characters
  for(var x=0; x<length; x++) {
    var randomIndex = Math.floor(Math.random()*charactersToUse.length);
    generatedPassword.push(charactersToUse[randomIndex]); // = generatedPassword + charactersToUse[randomIndex];
    //tempPassword = tempPassword + charactersToUse[randomIndex];
  }

  for(var i = 0; i<guaranteedCharacters.length; i++) {
    console.log(guaranteedCharacters[i]);
    generatedPassword[i] = guaranteedCharacters[i];
  }

  console.log("Your new password is: " + generatedPassword);

//turn the generatedPassword array into a string with no spaces
 return generatedPassword.join("");

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
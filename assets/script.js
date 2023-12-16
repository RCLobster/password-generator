/* The Plan
1.X Click generate password button to initiate prompts to user about password criteria
2. Allow user to select which criteria are included in the password using alert()
3. Prompt user to choose password length btwn 8-128
4. Prompt user to choose which characters to include lowercase, uppercase, numeric, special characters 
   (can be any combination of charcters)
5. All inputs should be validated and a minimum of one criteria should be selected, if none are selected restart
6. When all prompts are complete and at least one is chosen, generate a password which matches the criteria
7. Display password on website
*/

// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  alert("Let's make you a password. Choose which of the following criteria this password should meet:");

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

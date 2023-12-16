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
  //Create a variable to store user input about password length
  var length = prompt("How long should your password be? Select a number between 8 and 128.");
  length = Number(length);
  //if the length is not between 8 and 128 make the user try again
  if (length < 8 || length > 128) {
    alert("Sorry that number is not between 8 and 128. Please try again.");
    return;
  }
  console.log("Password length: " + length);

  //Create variables to store user input about types of characters to include
  var hasLowercase = window.confirm("Would you like the password to contain lowercase letters?");
  console.log("Lowercase: " + hasLowercase)
  var hasUppercase = window.confirm("Would you like the password to contain uppercase letters?");
  console.log("Uppercase: " + hasUppercase);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

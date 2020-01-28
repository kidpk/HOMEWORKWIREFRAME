//Assignment CODE
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var chars = "abcdefghijklmnopqrstuvwxyz";
  var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var nums = "0123456789";
  var syms = "!@#$%^&*=-_";
  var randTypes = ["char"]; // ['char', 'sym', 'num', 'upper']

  var length = prompt("Enter the number of characters in your password?");

  var yesnum = confirm("Do you want to have numbers in your password?");

  var yesSym = confirm("Do you want to have symbols in your password?");

  var yesupper = confirm("Do you want your password to contain uppercase?");

  var charArr = chars.split("");

  var numArr = nums.split("");

  var symsArr = syms.split("");

  var upperArr = upperChars.split("");

  if (yesnum === true) {
    randTypes.push("nums");
  }

  if (yesSym === true) {
    randTypes.push("syms");
  }
  if (yesupper === true) {
    randTypes.push("upperChars");
  }

  var pwd = "";

  for (var i = 0; i < length; i++) {
    var typeInd = Math.floor(Math.random() * randTypes.length);
    var type = randTypes[typeInd];
    if (type === "syms") {
      pwd += symsArr[i];
    } else if (type === "nums") {
      pwd += numArr[i];
    } else if (type === "upperChars") {
      pwd += upperArr[i];
    } else {
      pwd += charArr[Math.floor(Math.random() * charArr.length)];
    }
  }
  return pwd;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//  Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

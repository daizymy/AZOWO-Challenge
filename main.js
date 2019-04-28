window.onload = function() {
  "use strict";

  var form = document.getElementById("login-form");
  var pwd = document.getElementById("pwd");
  var pwdValidation = document.getElementById("pwd-validation");
  var validationResults = [];


  form.addEventListener("submit", function(event){
    var valid = validatePassword();
    if (valid != true){
      event.preventDefault();
    }
  });

  pwd.onkeyup = function(){
    validatePassword();
  };

  function validatePassword (){
    validationResults = [];
    //check min length;
    validate((pwd.value.length >= 8), "8+ characters");
    //check lowercase;
    validate((pwd.value.match(/[a-z]/g) !== null), "lowercase letter");
    //check uppercase;
    validate((pwd.value.match(/[A-Z]/g) !== null), "upper letters");
    // check numbers
    validate((pwd.value.match(/[0-9]/g) !== null), "numbers");
    //check special charcter;
    validate((pwd.value.match(/[^A-Za-z0-9 ]/g) !== null), "special character");

    pwdValidation.innerHTML = validationResults.join("");

    // children = document.querySelectorAll('.parent .child1');
    var invalidElements = document.querySelectorAll('#pwd-validation .invalid');
    return invalidElements.length == 0;
  }

  function validate(condition, msg){
      var className = (condition ? "valid" : "invalid");
      var result = '<p class="' + className + '">' + msg + '</p>'
      validationResults.push(result);
  }

}

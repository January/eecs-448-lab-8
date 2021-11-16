function validatePassword()
{
    var password = document.getElementById("pwd").value;
    var validator = document.getElementById("valid").value;

    if(password.length < 8 || validator.length < 8)
    {
        alert("Invalid: One or more of the passwords you've entered are less than 8 characters long.");
    }
    else if(password != validator)
    {
        alert("Invalid: Passwords don't match!");
    }
    else if(password == validator)
    {
        alert("Valid: Passwords match!");
    }
    else
    {
        alert("Oh no: Something else went wrong. This should never happen.");
    }
}
//Function to validate the form inputs
    function validateForm () {
//Get input values from the fields and trim extra spaces
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const zipCode = document.getElementById("zipCode").value.trim();

//Combine first and last name with a space in between
    const fullName = firstName + " " + lastName;

//Get the message output element
    const messageDiv = document.getElementById("message");

//Clear any previous messages
    messageDiv.innerHTML = "";

//Check if the full name exceeds 20 characters
    if (fullName.length > 20) {
        //Show a warning and stop the process
        messageDiv.innerHTML = "Error: Full name must be 20 characters or less.";
        return false; 
    }

//Regular expression to match exactly 5 digits for the zip code
    const zipCodePattern = /^\d{5}$/;

//If the zip code doesn't match the patter
if (!zipCodePattern.test(zipCode)) {
    //Show an error and stop
    messageDiv.innerHTML = "Error: Zip code must be 5 digits.";
    return false;
    }

//If both inputs are valid, display hidden message
    messageDiv.innerHTML = "Access granted! The secret message is: 'Hard work beats talent when talent doesn't work hard.'";

//Prevent form submission (stays on page)
return false;
}
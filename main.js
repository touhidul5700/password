function generatePassword() {
    // Get the password length from the input field
    var passwordLength = document.getElementById("password-length").value;
    
    // Define the characters to use in the password
    var charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+={[}]|\\:;\"'<,>.?/";

    // Initialize an empty string to store the password
    var password = "";

    // Generate a random password by selecting characters from the character set
    for (var i = 0; i < passwordLength; i++) {
        password += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }

    // Set the password field to the generated password
    document.getElementById("password").value = password;
}
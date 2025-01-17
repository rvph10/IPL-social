function isValidPassword(password) {
    // Check if password is empty
    if (!password) {
        return false;
    }

    // Check minimum length
    if (password.length < 8) {
        return false;
    }

    // Check for special character
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        return false;
    }

    // Check for number
    if (!/\d/.test(password)) {
        return false;
    }

    // Check for at least one letter
    if (!/[a-zA-Z]/.test(password)) {
        return false;
    }

    // Check for uppercase letter
    if (!/[A-Z]/.test(password)) {
        return false;
    }

    // Check for lowercase letter
    if (!/[a-z]/.test(password)) {
        return false;
    }

    // Check for IPL in any case
    if (/ipl/i.test(password)) {
        return false;
    }

    return true;
}

module.exports = { isValidPassword };
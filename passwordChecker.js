function isValidPassword(password) {
    // Check if password is empty
    if (!password || password.length === 0 ) {
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

    // Check for IPL in any case
    if (/ipl/i.test(password)) {
        return false;
    }

    return true;
}

module.exports = { isValidPassword };
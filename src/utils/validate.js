export const checkValidateData = (name, email, password) => {
    const isValidName = name !== "";
    const isValidEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
    const isValidPassword = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!#%&]).{8,}$/.test(password);
    return { name: !isValidName, email: !isValidEmail, password: !isValidPassword };
}
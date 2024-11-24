export const saveUserDetails = (user) => {
    const details = {
        displayName: user.displayName,
        email: user.email,
        tokens: user.stsTokenManager,
        uid: user.uid
    };
    window.sessionStorage.setItem("signedInUser", JSON.stringify(details));
}

export const getUserDetails = () => {
    return JSON.parse(window.sessionStorage.getItem("signedInUser"));
};

export const removeUserDetails = () => {
    window.sessionStorage.removeItem("signedInUser");
}
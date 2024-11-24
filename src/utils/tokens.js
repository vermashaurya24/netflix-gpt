export const saveUserDetails = (user) => {
    const details = {
        displayName: user.displayName,
        email: user.email,
        tokens: user.stsTokenManager,
        uid: user.uid
    };
    window.sessionStorage.setItem("signedInUser", details);
}

export const getUserDetails = () => {
    return window.sessionStorage.getItem("signedInUser");
};

export const removeUserDetails = () => {
    window.sessionStorage.removeItem("signedInUser");
}
export const saveUserDetails = (user) => {
    const details = {
        displayName: user.displayName,
        email: user.email,
        tokens: user.stsTokenManager,
        uid: user.uid
    };
    window.localStorage.setItem("signedInUser", details);
}

export const getUserDetails = () => {
    return window.localStorage.getItem("signedInUser");
};

export const removeUserDetails = () => {
    window.localStorage.removeItem("signedInUser");
}
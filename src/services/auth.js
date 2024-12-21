import api from "./config";

export const apiSignupStart = async (payload) => {
    return await api.post("/verification-code", payload);
}
export const apiSignupComplete = async (payload) => {
    return await api.post("/signup", payload);
}

export const apiLogin = async (payload) => {
    return await api.post("/login", payload);
}




export const apiLogout = async () => {
    return await api.post("/logout");
}



export const apiSendForgotPasswordCode = async (payload) => {
    return await api.post("/password-forgot", payload)
}
export const apiResetPassword = async (payload) => {
    return await api.post("/password-reset", payload)
}
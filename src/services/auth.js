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

export const apiCurrentUser = async () => {
    return await api.post("/current-user")
}


export const apiLogout = async () => {
    return await api.post("/logout");
}

export const apiLoginWithGoogle = async () => {
    return await api.get("/auth/google");
}
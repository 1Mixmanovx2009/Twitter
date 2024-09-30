import { createContext, useState } from "react";

export const Context = createContext()

export const AuthContext= ({children}) => {
    const [registerUser, setRegisterUser] = useState(JSON.parse(localStorage.getItem("registerUser")) || [])
    const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")) || null)

    localStorage.setItem("token", JSON.stringify(token))
    localStorage.setItem("registerUser", JSON.stringify(registerUser))
    return (
        <Context.Provider value={{token, setToken, registerUser, setRegisterUser}}>{children}</Context.Provider>
    )
}
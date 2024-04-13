import { createContext, useState } from "react"
import { useRouter } from "next/router"
import { API_URL } from "../config"
import secureLocalStorage from "react-secure-storage"

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)
    const [token, setToken] = useState(null)
    const router = useRouter();

    const login = async({email, hashPwd}) => {

        const authAPI = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, hashPwd})
        })

        const data = await authAPI.json()

        if(authAPI.ok){
            secureLocalStorage.setItem('token', data.access_token)
            //ini menyimpan data usernya
            setToken(data.access_token)
            setUser(data.user)
            router.push('/user/profile')
        } else {
            setError(data.message)
            setError(null)
        }
    }

    const register = async (user) => {
        const userAPI = await fetch(`${API_URL}/user/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })

        const data = await userAPI.json()

        if(userAPI.ok){
            setUser(data.user)
            router.push('/user/login')
        } else {
            setError(data.message)
            setError(null)
        }
    }

    const logout = () =>{
        secureLocalStorage.removeItem("token")
        setToken(null)
        setUser(null)
        router.push('/')
    }

    return (
        <AuthContext.Provider value={{user, error, token, login, logout, register}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext
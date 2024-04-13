import { useContext, useState } from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
import AuthContext from "../../context/AuthContext";

export default function LoginPage(){
    const [email,setEmail] = useState('')
    const [hashPwd,setHashPassword] = useState('')
    const {login, error} = useContext(AuthContext)

    const submitHandler = (e) => {
        e.preventDefault()
        login({email, hashPwd})
    }

    return(
        <Layout title="Login">
            <h2>Login</h2>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Email Address</label>
                    <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" id="hashPwd" name="hashPwd" value={hashPwd} onChange={(e) => setHashPassword(e.target.value)}/>
                </div>
                <button type="button" onClick={submitHandler} value="Login">LOGIN</button>
            </form>
            <p>
                Belum Punya akun? <Link href="/user/create">Create Account</Link>
            </p>
        </Layout>
    )
}
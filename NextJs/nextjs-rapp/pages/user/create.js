import { useContext, useState } from "react"
import AuthContext from "../../context/AuthContext"
import Layout from "../../components/Layout"
import Link from "next/link"

export default function CreateUserPage(){
    const [email, setEmail] = useState(null)
    const [userName, setUserName] = useState(null)
    const [hashPwd, setHashPwd] = useState(null)

    const {register, error} = useContext(AuthContext)

    const submitHandler = (e) => {
        e.preventDefault()
        register({userName, email, hashPwd, role: 'user'})
    }

    return(
        <Layout title="Create User">
            <h2>Create User</h2>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Username</label>
                    <input type="email" id="userName" name="userName" value={userName} onChange={(e) => setUserName(e.target.value)}/>
                </div>
                <div>
                    <label>Email Address</label>
                    <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" id="hashPwd" name="hashPwd" value={hashPwd} onChange={(e) => setHashPwd(e.target.value)}/>
                </div>
                <button type="submit" onClick={submitHandler} value="Create">Create</button>
            </form>
            <p>
                Sudah Punya akun? <Link href="/user/login">Login</Link>
            </p>
        </Layout>
    )
}
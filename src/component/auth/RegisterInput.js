// import { async } from '@firebase/util';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, {useState, useRef} from 'react'
import { useHistory } from "react-router-dom";
import { UserAuth } from '../context/AuthContext';

const RegisterInput = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [displayName, setUsername] = useState("");
    const [Error, setError] = useState("")
    const errRef = useRef()

const history = useHistory()
    const{ createUser }= UserAuth()
function dash() {
    history.push("/dashboard");
    window.location.reload()

}

    const handleSubmit = async (e)=> {
        e.preventDefault()
        try {
            await createUser(email, password)
            history.push("/verifymail")
            dash()
        } catch (e) {
            // setError(`Error occured${e.code}`)/
            // console.log)
            // alert(e.message)    
            errRef.current.style.display ="flex"
            switch (e.code) {
                case "auth/email-already-in-use":
                    setError("Email exists, LOGIN please")
                    break;
                    case "auth/network-request-failed":
                        setError("Network Error")
                    break;
                default: 
                alert("Error occured")
                    break;
            }
        }
    }

    function loginPage() {
        history.push("/signin");
        // alert("register now!")
    }



  return (
      
    <div>
        <p className='text-center '>Glad to have you on board</p>

        <form onSubmit={handleSubmit} className="flex flex-col">
            <div className='errBox w-3/4 md:w-2/4 h-10 hidden bg-red-500 m-auto mt-8 text-white flex align-center justify-center content-center' ref={errRef}>{Error}</div>
        <input
                    className="w-3/4 md:w-2/4 h-10 m-auto bg-gray-200 p-8 mt-8 rounded-lg focus:ring-2"
                    type="text"
                    placeholder="Username..."
                    value={displayName}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    className="w-3/4 md:w-2/4 h-10 m-auto bg-gray-200 p-8 mt-8 rounded-lg focus:ring-2"
                    type="email"
                    placeholder="Email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
               
                <input
                    className="w-3/4 md:w-2/4 h-10 m-auto bg-gray-200 p-8 mt-8 rounded-lg focus:ring-2"
                    type="password"
                    placeholder="Password..."
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                />
                <button
                    type="submit"
                    className="w-3/4 md:w-2/4 mt-12 bg-blue-600 m-auto text-white p-4 rounded-lg"
                >
                    Create an account.
                </button>
                <button className="w-2/4 md:w-1/4 m-auto mt-8 bg-white shadow">
                    Sign up with google.
                </button>
            </form>
            <div className="mt-12 m-auto text-center">
                Already have an account? <br />{" "}
                <button className="text-blue-600 underline" onClick={loginPage}>Login</button>
            </div>
    </div>
  )
}

export default RegisterInput
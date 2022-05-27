import { sendPasswordResetEmail } from "firebase/auth";
import React, {useState, useRef} from "react";
import { useHistory } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { auth } from "./Firebase";

// import {AiFillGoogleCircle} from 'react-icons/ai'
export const Input = (props) => {

    const [Error, setError] = useState("")

const {login, resetPassword} = UserAuth()

const errRef = useRef()

    function dash() {
        history.push("/dashboard");
    
    }

    const forgotPass = async () => {
        try {
            // write a line of code here to reset password
            await sendPasswordResetEmail(email, auth);
        } catch (e) {
            alert(e.message)
        }
    }

    const handleSubmit = async (e)=> {
        e.preventDefault()
        try {
            await login(email, password)
            dash()
        } catch (e) {
            setError(e.message)
            console.log(e.message)
            errRef.current.style.display ="flex"
            switch (e.code) {
                case "auth/email-already-in-use":
                    setError("Email exists, LOGIN please")
                    break;
                    case "auth/network-request-failed":
                        setError("Network Error")
                    break;
                    case "auth/wrong-password": 
                        setError("Wrong password.")
                        break;
                        case "auth/network-request-failed":
                            setError("Network Error");
                            break;
                        case "auth/weak-password":
                            setError("Password is too weak");
                        break;
                        case "auth/invalid-email":
                            setError("Invalid email");
                        break;
                        case "auth/operation-not-allowed":
                            setError("Operation not allowed");
                        break;
                        case "auth/user-disabled":
                            setError("User disabled");
                        break;
                        case "auth/user-not-found":
                            setError("User not found");
                        break;
                        case "auth/wrong-password":
                            setError("Wrong password");
                        break;
                        case "auth/too-many-requests":
                            setError("Too many requests");
                        break;
                        case "auth/requires-recent-login":
                            setError("Requires recent login");
                        break;
            }
        }

        const data = {
            email: email,
            pw: password
        }
        props.onAddData(data)
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory()
    function registerPage(e) {
        history.push("/register")
    }
    return (
        <div className="text-black text-center">
            <div className="mt-4">
                <p>It's always a pleasure to see you again.</p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col">
            <div className='errBox w-3/4 md:w-2/4 h-10 hidden bg-red-500 m-auto mt-8 text-white flex align-center justify-center content-center' ref={errRef}>{Error}</div>
                <input
                    className="w-3/4 md:w-2/4 h-10 m-auto bg-gray-200 p-8 mt-8 rounded-lg focus:ring-2"
                    type="email"
                    placeholder="Email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className="w-3/4 md:w-2/4  h-10 m-auto bg-gray-200 p-8 mt-8 rounded-lg focus:ring-2"
                    type="password"
                    placeholder="Password..."
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                />

                <button
                    type="submit"
                    className="w-3/4 md:w-2/4 mt-12 bg-blue-600 m-auto text-white p-4 rounded-lg"
                >
                    Login
                </button>
                
            </form>
            <button className=" w-3/4 md:w-2/4 m-auto  mt-2 text-blue-600 text-left" onClick={forgotPass}>
                    Forgot password
                </button>
            <div className="mt-12">
                Dont have an account? <br />{" "}
                <button className="text-blue-600 underline" onClick={registerPage}>Sign Up</button>
            </div>
        </div>
    );
};

// export default Input;

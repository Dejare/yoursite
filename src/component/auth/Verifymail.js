import React from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

const Verifymail = () => {
    const { user } = UserAuth();

    const verified = user.emailVerified
const history = useHistory()
    console.log(verified)
    function dashboard() {
      history.push("/dashboard")
    }
    return (
        <>
            {verified ? (
                <div className="home bg-white text-blue-600">
                <div className="flex flex-row justify-between p-8">
                    <div className="logo">Yoursite.</div>
                    <div>
                        <HiOutlineMenuAlt3 />
                    </div>
                </div>
                <div className="text-center mt-24 md:px-0 px-4">
                    <h1 className="coolvetica text-8xl py-8">
                        Verification Successful!
                    </h1>
                    <p className="mb-12">
                        You can now proceed to your account dashboard <br /> Happy Building!
                    </p>
                    <a
                        className="my-8 w-100 bg-blue-600 text-white rounded mt-2 text-left p-4 mr-4"
                        onClick={dashboard}
                    >
                        Go to dashboard
                    </a>
                    </div>
                    </div>
            ) : (
                <div className="home bg-white text-blue-600">
                    <div className="flex flex-row justify-between p-8">
                        <div className="logo">Yoursite.</div>
                        <div>
                            <HiOutlineMenuAlt3 />
                        </div>
                    </div>
                    <div className="text-center mt-24 md:px-0 px-4">
                        <h1 className="coolvetica text-8xl py-8">
                            Verify Account!
                        </h1>
                        <p className="mb-12">
                            A verification email has been sent your mail <br />{" "}
                            Follow the instructions in your mail to verify your
                            account.
                        </p>
                        <Link
                            className="my-8 w-100 bg-blue-600 text-white rounded mt-2 text-left p-4 mr-4"
                            to="#"
                        >
                            Resend Email
                        </Link>
                        <Link
                            className="my-8 w-100 bg-blue-600 text-white rounded mt-2 text-left p-4"
                            to="#"
                        >
                            Open Mail
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
};

export default Verifymail;

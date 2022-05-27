import React, {useEffect} from "react";
import Left from "./Left";
import "./dashboard.scss";
import Center from "./Center";
import { useHistory } from "react-router-dom";
import { UserAuth } from "../../../context/AuthContext.js";
import { sendEmailVerification } from "firebase/auth";
import { auth } from "../../auth/Firebase";
const Dashboard = () => {
    const history = useHistory();

    const { Verified, user, auth } = UserAuth();
    console.log(user)

    console.log(Verified);


    if (user != null || "undefined" != typeof user) {
        if (Verified) {
            history.push("/dashboard");
        } else {
          try {
            // write a line of code here to send email verificationyyyy
              sendEmailVerification(user, auth);
              console.log("first");
              history.push("/verifymail");
          } catch (e) {
              console.log(e.message);
          }
        }
    }
    else{
        history.push("/verifymail");
    }
    
    return (
        <div className="dashboard flex flex-row">
            <div className="dashboard_left bg-blue-600 flex-col hidden md:flex">
                <Left />
            </div>
            <div className="center">
                <Center />
            </div>
        </div>
    );
};

export default Dashboard;

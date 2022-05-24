import { useState, useEffect } from "react";
import "./styles/main.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./component/beforeLogin/Home";
import Verify from "./component/auth/Verify";
import Register from "./component/auth/Register";
import Project from "./component/afterSignIn/project/Project";
import { AuthContextProvider } from "./component/context/AuthContext";
// import Main from "./component/main/Main";
import Dashboard from "./component/afterSignIn/dashboard/Dashboard";
import { BrowserRouter } from "react-router-dom";
import Aboutproject from "./component/afterSignIn/project/Aboutproject";
import Index from "./component/templates/template1/Index";
import { FormContext } from "./component/context/FormContext";
function App() {
    function addData(data) {
        console.log(data);
        localStorage.setItem("data", JSON.stringify(data));
    }
useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data"));
    console.log(data);
}, [])
    const lsdata = JSON.parse(localStorage.getItem("data"));

    return (
        <AuthContextProvider>
            <BrowserRouter>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact={true} path="/dashboard">
                            <Dashboard />
                        </Route>
                        <Route
                            exact={true}
                            path="/register"
                            component={Register}
                        >
                            <Register />
                        </Route>
                        <Route exact={true} path="/signin">
                            <Verify />
                        </Route>
                        <Route path="/project">
                            <Project />
                        </Route>

                        <FormContext.Provider value={lsdata}>
                            <Route path="/newtransfer">
                                <Aboutproject onAddData={addData} />
                            </Route>
                            <Route path="/test">
                                <Index />
                            </Route>
                        </FormContext.Provider>
                        <Route path="*">
                            <h2>ERROR</h2>
                        </Route>
                    </Switch>
                </Router>
            </BrowserRouter>
        </AuthContextProvider>
    );
}

export default App;

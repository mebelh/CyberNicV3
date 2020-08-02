import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./components/pages/Home";
import Course from "./components/pages/Course";
// import CourseInfo from "components/pages/Course_info";
import SignIn from "./components/pages/auth/SignIn";
import SignUp from "./components/pages/auth/SignUp";
import SignOut from "./components/auth/SignOut";
import Users from "./components/admin/Users";
// import Films from "./components/pages/courses/Films";
import AdminHeader from "./components/admin/AdminHeader";
import AddCourse from "./components/pages/AddCourse";

import { Context } from "./context";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.scss";

export default function App() {
    const [user, setUser] = useState({});

    useEffect(() => {
        const raw = localStorage.getItem("user") || JSON.stringify({});
        setUser(JSON.parse(raw));
    }, []);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
    }, [user]);

    const onUserLogin = (user) => {
        setUser(user);
    };

    return (
        <Context.Provider value={{ onUserLogin, setUser, user }}>
            <div className="App">
                <Header />
                <AdminHeader />
                <BrowserRouter>
                    <Switch>
                        <Route path={"/"} exact>
                            <Home />
                        </Route>

                        <Route
                            path="/course/:id"
                            component={Course}
                            test={"asdasd"}
                        />

                        <Route path={"/auth/login"} component={SignIn} />
                        <Route path={"/auth/register"} component={SignUp} />
                        <Route path={"/auth/logout"} component={SignOut} />
                        <Route
                            path={"/admin/addCourse"}
                            component={AddCourse}
                        />
                        <Route path={"/admin/users"} component={Users} />
                        {/* <Route path={'/about'} component={About} /> */}
                        {/* <Route path={'/lectures'} component={Lectures} /> */}
                        {/* <Route path={'/library'} component={Libriary} /> */}
                        {/* <Route path={"/films"} component={Films} /> */}
                    </Switch>
                </BrowserRouter>
                <Footer />
            </div>
        </Context.Provider>
    );
}

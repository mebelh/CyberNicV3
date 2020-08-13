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
import Films from "./components/pages/Films";
import AdminHeader from "./components/admin/AdminHeader";
import AddCourse from "./components/pages/AddCourse";
import AddFilm from "./components/pages/AddFilm";
import ElBibl from "./components/pages/ElBiblPage";

import { Context } from "./context";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.scss";
import Conditions from "components/pages/conditions";
import { useHttp } from "hooks/http.hook";

export default function App() {
    const [user, setUser] = useState({});

    const { reqest } = useHttp();

    useEffect(() => {
        const raw =
            localStorage.getItem("user") || JSON.stringify({ login: "" });

        let parseRaw = JSON.parse(raw);

        console.log(parseRaw);

        if (!parseRaw.userId) {
            reqest("/api/admin/relogin", "POST", {
                login: parseRaw.login,
            }).then((data) => {
                setUser(data);
            });
        } else {
            setUser(JSON.parse(raw));
        }
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

                        <Route path="/course/:id" component={Course} />

                        <Route path={"/auth/login"} component={SignIn} />
                        <Route path={"/auth/register"} component={SignUp} />
                        <Route path={"/auth/logout"} component={SignOut} />
                        <Route
                            path={"/admin/addCourse"}
                            component={AddCourse}
                        />
                        <Route path={"/admin/users"} component={Users} />
                        <Route path={"/admin/addfilm"} component={AddFilm} />
                        <Route path={"/conditions"} component={Conditions} />
                        <Route path={"/elbibl"} component={ElBibl} />
                        {/* <Route path={'/library'} component={Libriary} /> */}
                        <Route path={"/films"} component={Films} />
                    </Switch>
                </BrowserRouter>
                <Footer />
            </div>
        </Context.Provider>
    );
}

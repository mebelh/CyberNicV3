import React, {useState, useEffect, useCallback} from "react"

import Header from "./components/Header"
import Footer from "./components/Footer"

import Home from "./components/pages/Home"
import Course from "./components/pages/Course"
import EditCourse from "./components/pages/EditCourse"
import SignIn from "./components/pages/auth/SignIn"
import SignUp from "./components/pages/auth/SignUp"
import SignOut from "./components/auth/SignOut"
import Users from "./components/admin/Users"
import Films from "./components/pages/Films"
import AdminHeader from "./components/admin/AdminHeader"
import AddCourse from "./components/pages/AddCourse"
import AddFilm from "./components/pages/AddFilm"
import ElBibl from "./components/pages/ElBiblPage"

import { Context } from "./context"

import { BrowserRouter, Switch, Route } from "react-router-dom"

import "./App.scss"
import Conditions from "components/pages/conditions"
import { useStorage } from "./hooks/storage.hook"

export default function App() {
    const [user, setUser] = useState({ login: "" })

    const { storage } = useStorage()

    useEffect(() => {
        let parseRaw = storage('user') || user
        setUser(parseRaw);
    }, [])

    useEffect(
        () => {
            storage('user', user)
        },
    [user])

    const logOut = useCallback(() => {
        setUser({ login: "" })
        window.location.replace('/')
    }, [])

    return (
        <Context.Provider value={{ setUser, user, logOut }}>
            <div className="App">
                <Header />
                <AdminHeader />
                <BrowserRouter>
                    <Switch>
                        <Route path={"/"} exact>
                            <Home />
                        </Route>

                        <Route path="/course/:id/edit" component={EditCourse} />
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

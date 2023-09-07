import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SigninForm from "../pages/signin/signin";
import SignupForm from "../pages/signup/signup";
import { AuthRoute } from "./AuthRoute";
import { ProtectedRoute } from "./ProtectedRoute";
import Dashboard from "../components/Dashboard";


export const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path={"/"} element={<AuthRoute><SigninForm /></AuthRoute>}></Route>
                    <Route exact path={"/signup"} element={<AuthRoute><SignupForm /></AuthRoute>}></Route>
                    <Route exact path={"/dashboard"} element={<ProtectedRoute><Dashboard /></ProtectedRoute>}></Route>
                </Routes></BrowserRouter>
        </div>

    )
}
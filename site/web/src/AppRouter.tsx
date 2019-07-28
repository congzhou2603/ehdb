import * as React from "react";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import Home from "./components/Home";

export const AppRouter: React.StatelessComponent<{}> = () => {
    return (
        <BrowserRouter>
            <Route path="/" component={Home} />
        </BrowserRouter>
    );
};
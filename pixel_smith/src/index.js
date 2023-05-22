import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {makeServer} from "./server";
import {BrowserRouter as Router} from "react-router-dom";
import {ApiProvider, ApiContext} from "./contexts/ApiContext";
import {AuthContext, AuthProvider} from "./contexts/AuthContext";
import {FilterProvider, FilterContext} from "./contexts/FiltersContext";

// Call make Server
makeServer();
export {ApiContext, AuthContext, FilterContext}

ReactDOM.render(
    <React.StrictMode>
    <Router>
        <ApiProvider>
            <FilterProvider>
                <AuthProvider>
                    <App/>
                </AuthProvider>
            </FilterProvider>
        </ApiProvider>
    </Router>
</React.StrictMode>, document.getElementById("root"));

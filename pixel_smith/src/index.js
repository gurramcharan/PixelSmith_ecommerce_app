import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {makeServer} from "./server";
import {BrowserRouter as Router} from "react-router-dom";
import {ApiProvider, ApiContext} from "./contexts/ApiContext";
import {AuthContext, AuthProvider} from "./contexts/AuthContext";
import {FilterProvider, FilterContext} from "./contexts/FiltersContext";
import {AddressContext, AddressProvider} from "./contexts/AddressContext";

// Call make Server
makeServer();
export {ApiContext, AuthContext, FilterContext, AddressContext}

ReactDOM.render(
    <React.StrictMode>
    <Router>
        <ApiProvider>
            <FilterProvider>
                <AuthProvider>
                    <AddressProvider>
                        <App/>
                    </AddressProvider>
                </AuthProvider>
            </FilterProvider>
        </ApiProvider>
    </Router>
</React.StrictMode>, document.getElementById("root"));

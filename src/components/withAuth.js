import React from "react";
import { Navigate } from "react-router-dom";



function withAuth(component) {
    return(props) => {
        if(localStorage.getItem("token")) {
            return <component {...props}/>
        }
        return <Navigate to="./Login" replace />
    }
}

export default withAuth
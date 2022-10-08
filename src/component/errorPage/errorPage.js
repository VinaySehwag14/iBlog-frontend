import React from "react";
import {  Link } from "react-router-dom";

const PageNotFound = () => {
    return(<>
        <h3>404 Page Not Found</h3>
        <h3>Move to Home Page : <Link to="/">Home</Link></h3>
    </>)
}

export default PageNotFound;
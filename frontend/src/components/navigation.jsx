import { useState } from "react";
import logout from "../assets/logout.svg";

const Navigation = () => {

    return(
        <header className="navbar">

            <div className="navbar__title">
                <h1>Blogger</h1>
            </div>

            <div className="navbar__routes">
                <a href="#">Home</a>
                <a href="#">Friends</a>
                <a href="#">Posts</a>
            </div>

            <div className="navbar__logout">
                <a href="#">Logout</a>
                <img src={logout} className="svg"/>   
            </div>

        </header>
    );

};

export default Navigation;
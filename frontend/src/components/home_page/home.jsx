import { useState } from "react";
import LeftBar from "./leftBar";

const Home = () => {

    return(
        <main className="main_home">

            <LeftBar />

            <section className="main_home__news_feed"></section>

            <section className="main_home__right_bar"></section>

        </main>
    );

};

export default Home;
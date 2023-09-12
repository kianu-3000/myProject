import { useState } from "react";

const Home = () => {

    return(
        <main className="main_home">

            <section className="main_home__left_bar">
                <div className="left_bar__create_post">
                    <div className="create_post__profile">
                        <span>Username</span>
                    </div>

                    <div>
                        <form action="">
                           <textarea name="createPost" id="post" placeholder="Create Post. . ."></textarea>
                        </form>
                    </div>
                </div>
            </section>

            <section className="main_home__news_feed"></section>

            <section className="main_home__right_bar"></section>

        </main>
    );

};

export default Home;
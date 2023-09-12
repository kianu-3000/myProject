import { useState } from "react";
import album from "../../assets/album.svg";

const Home = () => {

    return(
        <main className="main_home">

            <section className="main_home__left_bar">
                <div className="left_bar__create_post">
                    <div className="create_post__profile">
                        <span>Username</span>
                    </div>

                    <div className="create_post__post">
                        <form action="">
                           <textarea name="createPost" id="post" placeholder="Create Post. . ."></textarea>
                        </form>

                        <div>
                            <label htmlFor="file_upload" className="post__file_upload_label">
                                <img src={album} alt="" className="upload_label__logo"/>
                            </label>
                            <input type="file" className="post__file" id="file_upload"/>
                            <button type="submit">Create Post</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="main_home__news_feed"></section>

            <section className="main_home__right_bar"></section>

        </main>
    );

};

export default Home;
import album from "../../assets/album.svg";
const LeftBar = () => {
    return(
        <section className="main_home__left_bar">
            
            <div className="left_bar__create_post">
                {/* User Profile */}
                <div className="create_post__profile">
                    <span>Username</span>
                </div>

                {/* Create Post */}
                <div className="create_post__post">
                    <form action="">
                        <textarea name="createPost" id="post" placeholder="What's on your mind ?"></textarea>
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

            {/* Online Friends */}
            <div className="left_bar__see_online">
                <div className="see_online__title">
                    <span>Online</span>
                </div>

                <div className="see_online__friends">
                    <div className="friends__info">Kianu</div>
                </div>
            </div>

        </section>
    );
}

export default LeftBar;
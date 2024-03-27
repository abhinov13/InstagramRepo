import { useLocation } from "react-router-dom";
import CreatePostViewModel from "./CreatePostViewModel"

const CreatePost = (props) => {
    const {
        imgSrc,
        setDescription,
        uploadRequest,
        updateImage,
        file
    } = CreatePostViewModel(props, useLocation());

    return <div className="banner_wrapper">
        <div className="upload">
            <div className="banner_header">Create New Post
                <img src="/close.svg" alt="close button" style={{ height: "80%", float: "right", marginRight: "2%", cursor: "pointer" }} onClick={() => { props.setCreate(false) }} />
            </div>
            <div style={{ backgroundColor: "#444444", height: "0.01rem", width: "100%" }} className="centre_vertically" />
            <div className="create_post_seperator">
                <div style={{ width: "63%" }}>
                    {
                        !file || (file && !file.type === "video/mp4") ? <img src={imgSrc} alt="original post" style={{ height: "100%", width: "100%", objectFit: "contain" }} />
                            :
                            <video src={imgSrc} alt="original post" style={{ height: "100%", width: "100%", objectFit: "contain" }} controls />
                    }
                </div>
                <div style={{ width: "33%" }} className="create_post_control">
                    <div style={{width: "100%", overflow: "hidden"}}>Description</div>
                    <textarea onChange={(e) => { setDescription(e.target.value) }} maxLength="1000" />
                    <label for="image-upload">Select Image</label>
                    <input id="image-upload" type="file" style={{ display: "none" }} accept="image/*, video/*" onChange={(e) => { updateImage(e) }} />
                    <label onClick={uploadRequest}>Create Post</label>
                </div>
            </div>

        </div>
    </div>
}

export default CreatePost;
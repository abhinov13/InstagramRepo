import ProfilePictureUploaderViewHandler from "./ProfilePictureUploaderViewHandler";

const ProfilePictureUploader = (props) => {
    const {
        updateImage,
        imgSrc,
        uploadRequest,
        removeImage,
        discardChanges,
        initStyle
    } = ProfilePictureUploaderViewHandler(props);

    return (
        <div className="profile_uploader_wrapper" style={initStyle}>
            <div>
                <div>
                    <img src={imgSrc} alt="placeholder" />
                </div>
                <div>
                    <div>
                        <label for="image-upload">Select Image</label>
                        <input id="image-upload" type="file" style={{ display: "none" }} accept="image/*" onChange={(e) => { updateImage(e) }} />
                        <label onClick={removeImage}>Remove Image</label>
                        <label onClick={uploadRequest}>Save</label>
                        <label onClick={discardChanges} style={{ backgroundColor: "#b33939" }}>Discard Changes</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePictureUploader;
import { useEffect, useState } from "react";
import { RemoveProfilePicture, UploadProfilePicture } from "../../../../../Domain/UseCase/User/ProfilePicture";
import { useUser } from "../../../../Context/UserContext/UserContext";
import GetUser from "../../../../../Domain/UseCase/User/GetUser";

const ProfilePictureUploaderViewHandler = (props) => {

    const [imgSrc, setImgSrc] = useState("/user.svg");
    const [file, setFile] = useState(null);
    const { username } = useUser();
    const [initStyle, setInitStyle] = useState({ opacity: "0" });

    useEffect(() => setInitStyle({ opacity: 1 }), []);

    useEffect(
        () => {
            if (username != null) {
                GetUser()
                    .execute(username)
                    .then(({ data }) => {
                        setImgSrc(data.profilePictureUrl);
                    })
            }
        }, [username]
    )

    const updateImage = (e) => {
        if (e.target.files[0] == null) {
            setImgSrc('/user.svg');
            setFile(null);
        }
        else {
            setImgSrc(URL.createObjectURL(e.target.files[0]));
            setFile(e.target.files[0]);
        }
    }

    const removeImage = () => {
        setImgSrc("/user.svg");
        setFile(null);
    }

    const uploadRequest = () => {
        if (file == null) {
            RemoveProfilePicture()
                .execute(username)
                .then(({ data }) => {
                    if (data != null)
                        window.location.reload();
                })
        }
        else {
            UploadProfilePicture()
                .execute(username, file)
                .then(({ data }) => {
                    if (data != null) {
                        window.location.reload();
                    }
                })
        }
        props.showProfileUploader(false);
    }

    function discardChanges() {
        props.showProfileUploader(false);
    }

    return {
        updateImage,
        imgSrc,
        uploadRequest,
        removeImage,
        discardChanges,
        initStyle
    }
}

export default ProfilePictureUploaderViewHandler;
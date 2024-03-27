import { useEffect, useState } from "react";
import { Create } from "../../../../../../Domain/UseCase/Post/Create";
import { useUser } from "../../../../../Context/UserContext/UserContext";
import { useNavigate } from "react-router-dom";

const CreatePostViewModel = (props, location) => {
    const [imgSrc, setImgSrc] = useState("/addImage.svg");
    const [file, setFile] = useState(null);
    const [description, setDescription] = useState("");
    const { username } = useUser();
    const navigate = useNavigate();

    const uploadRequest = () => {
        props.setCreate(false);
        Create()
            .execute(file, username, description)
            .then(({ data }) => {
                if (data) {
                    if (props.postLoader != null && location.pathname.toLowerCase() === '/home')
                        props.postLoader();
                    else if (location.pathname !== '/home')
                        navigate('/home');
                    else
                        alert('Oops! UI has an error');
                }
                else {
                    console.log("error ");
                }
            });
    }

    useEffect(() => {
        console.log(file);
    }, [file])

    const updateImage = (e) => {
        if (e.target.files[0] == null) {
            setImgSrc('/addImage.svg');
            setFile(null);
        }
        else {
            setImgSrc(URL.createObjectURL(e.target.files[0]));
            setFile(e.target.files[0]);
        }
    }

    return {
        imgSrc,
        file,
        setDescription,
        uploadRequest,
        updateImage
    }
}

export default CreatePostViewModel;
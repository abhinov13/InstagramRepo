import { useState } from "react";
import { Like, Unlike } from "../../../../../../../Domain/UseCase/Post/LikeHandler";
import { useUser } from "../../../../../../Context/UserContext/UserContext";
const LikeButtonViewHandler = ({ postUsername, postId, likedBy, setLikedBy }) => {

    const likedStyle = { like: { opacity: "1" }, notLike: { opacity: "0" } };
    const notLikedStyle = { like: { opacity: "0" }, notLike: { opacity: "1" } };

    const { username } = useUser();
    const initialState = likedBy.includes(username) ? likedStyle : notLikedStyle;
    const [style, setStyle] = useState(initialState);



    function toggleLike() {
        if (JSON.stringify(style) === JSON.stringify(likedStyle)) {
            setStyle(notLikedStyle);
            Unlike()
                .execute(username, postUsername, postId)
                .then(({ data }) => {
                    if (data) {
                        const list = likedBy.filter((comp) => (comp !== username));
                        setLikedBy(list);
                    }
                });
        }
        else {
            setStyle(likedStyle);
            Like()
                .execute(username, postUsername, postId)
                .then((data) => {
                    console.log("likedby list before");
                    console.log(likedBy);
                    console.log(data);
                    const list = [...likedBy, username];
                    console.log("likedby list after");
                    console.log(list);
                    setLikedBy(list);
                });
        }
    }

    return {
        style,
        toggleLike
    }
}

export default LikeButtonViewHandler;
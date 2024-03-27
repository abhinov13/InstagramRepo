import { useState, useEffect } from "react";

const PostContainerViewModel = ({ postLoader }) => {
    const [postUsername, setPostUsername] = useState("");

    useEffect(
        () => {
            postLoader();
        }, [postLoader]
    );

    const [data, setData] = useState(null);

    function resetPopupParams() {
        setData(null);
    }

    function getPopupParams(data, postUsername) {
        data = { ...data, resetPopupParams };
        setData(data);
        setPostUsername(postUsername);
    }

    return {
        getPopupParams,
        data,
        postUsername
    }
}

export default PostContainerViewModel;
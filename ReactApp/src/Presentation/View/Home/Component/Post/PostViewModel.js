import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const PostViewModel = (props) => {

    const navigate = useNavigate();
    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const [muted, setMuted] = useState(false);
    const [displayMute, setDisplayMute] = useState(false);

    function viewComment() {
        props.getPopupParams(props, props.username);
    }

    const [likedBy, setLikedBy] = useState(props.likedBy);
    const [commentCount, setCommentCount] = useState(props.commentCount);

    function goToUser() {
        navigate("/home/user/" + props.username);
    }

    function hasAudio (video) {
        return video.mozHasAudio ||
        Boolean(video.webkitAudioDecodedByteCount) ||
        Boolean(video.audioTracks && video.audioTracks.length);
    }

    function handlePlayPause() {
        if (!playing) {
            setPlaying(true);
            videoRef.current.play();
        }
        else {
            setPlaying(false);
            videoRef.current.pause();
        }
        if(!displayMute && hasAudio(videoRef.current))
        {
            setDisplayMute(true);
        }
    }

    function handleMute() {
        const mute = !muted;
        setMuted(mute);
        videoRef.current.muted = mute;
    }

    return {
        viewComment,
        likedBy,
        setLikedBy,
        commentCount,
        setCommentCount,
        goToUser,
        videoRef,
        handlePlayPause,
        playing,
        handleMute,
        muted,
        displayMute
    }
}

export default PostViewModel;
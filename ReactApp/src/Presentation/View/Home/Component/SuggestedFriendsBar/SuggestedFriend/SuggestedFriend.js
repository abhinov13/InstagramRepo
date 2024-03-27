import SuggestedFriendViewHandler from "./SuggestedFriendViewHandler";

const SuggestedFriend = (props) => {

    const { onClickHandler } = SuggestedFriendViewHandler(props);

    return (
        <div className="person">
            <div style={{ width: "6vw", height: "6vw" }}>
                <div className="person_image">
                    <img src={props.src ? props.src : "/user.svg"} alt="Person" />
                </div>
            </div>
            <div style={{ width: "50%", height: "60%" }}>
                <div>
                    {props.username}
                </div>
                <div style={{ color: "gray" }}>
                    {props.name}
                </div>
            </div>
            <div onClick={() => onClickHandler()} style={{ width: "20%", height: "100%", color: "#0095F6", marginLeft: "auto", fontSize: "0.8rem", cursor: "pointer" }}>
                {props.option}
            </div>
        </div>
    )
};

export default SuggestedFriend;
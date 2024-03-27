import GetTimeElapsed from "../../../../../../../Domain/UseCase/Utils/GetTimeElapsed";

const PostNotification = (props) => {
    return (
        <>
            <div>
                <img src={props.src ? props.src : "/user.svg"} alt="user" style={{ cursor: "pointer" }} onClick={() => props.goToUser(props.username)} /> &nbsp; {props.username} created a post. &nbsp; <span>{GetTimeElapsed(props.date)} ago</span>
            </div>
        </>
    )
};

export default PostNotification;
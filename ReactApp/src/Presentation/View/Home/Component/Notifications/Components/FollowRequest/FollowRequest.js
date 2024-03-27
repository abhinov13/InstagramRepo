import GetTimeElapsed from "../../../../../../../Domain/UseCase/Utils/GetTimeElapsed";
import FollowRequestViewHandler from "./FollowRequestViewHandler"

const FollowRequest = (props) => {

    const { following, follow, unfollow } = FollowRequestViewHandler(props);
    return (
        <>
            <div> <img src={props.src ? props.src : "/user.svg"} alt="user" style={{ cursor: "pointer" }} onClick={() => props.goToUser(props.username)} /> &nbsp; {props.username} started following you. &nbsp; <span>{GetTimeElapsed(props.date)} ago</span></div>
            <div className="notification_follow_button">
                {
                    following ?
                        <div onClick={unfollow}>
                            Unfollow
                        </div>
                        :
                        <div onClick={follow}>
                            Follow
                        </div>
                }
            </div>
        </>
    )
}

export default FollowRequest;
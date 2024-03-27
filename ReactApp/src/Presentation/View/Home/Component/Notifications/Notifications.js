import CommentNotifications from "./Components/CommentNotifications/CommentNotifications";
import FollowRequest from "./Components/FollowRequest/FollowRequest";
import PostNotification from "./Components/PostNotifications.js/PostNotification";
import NotificationsViewHandler from "./NotificationsViewHandler";

const Notifications = () => {
    const { notifications, followers, goToUser } = NotificationsViewHandler();

    return (
        <div className="notifications">
            {
                notifications.map((notification) => {
                    if (notification.type === "Friend Request") {
                        return <div><FollowRequest goToUser={goToUser} src={notification.fromUrl} username={notification.from} date={notification.date} followers={followers} /></div>
                    }
                    else if (notification.type === "Comment") {
                        return <div><CommentNotifications goToUser={goToUser} src={notification.fromUrl} username={notification.from} date={notification.date} /></div>
                    }
                    else if (notification.type === "Post") {
                        return <div><PostNotification goToUser={goToUser} src={notification.fromUrl} username={notification.from} date={notification.date} /></div>
                    }
                    else {
                        return "";
                    }
                })
            }
        </div>
    )
};

export default Notifications;
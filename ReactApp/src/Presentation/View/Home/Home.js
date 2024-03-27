import { Route, Routes, Navigate } from "react-router-dom";
import SideBar from "./Component/SideBar/SideBar";
import PostsContainer from "./PostsContainer/PostsContainer";
import HomeViewModel from "./HomeViewModel";
import PeopleContainer from "./PeopleYouMayKnow/PeopleContainer";
import SuggestedFriendsBar from "./Component/SuggestedFriendsBar/SuggestedFriendsBar";
import Search from "./Component/Search/Search";
import { WebSocketProvider } from "../../Context/WSContext/WSContext";
import { StompSessionProvider } from "react-stomp-hooks";
import Notifications from "./Component/Notifications/Notifications";
import User from "../User/User";
import Chat from "./Component/Chat/Chat";
const Home = () => {
    const {
        posts,
        postLoader
    } = HomeViewModel();
    return (
        <StompSessionProvider url={'http://13.51.48.38:8080/notifications'}>
            <WebSocketProvider>
                <div className="homepage_wrapper">
                    <SideBar isOpen={true} postLoader={postLoader} />
                    <Routes>
                        <Route path="/PeopleYouMayKnow" Component={PeopleContainer} />
                        <Route path="/Search" Component={Search} />
                        <Route path="/" element={<><PostsContainer posts={posts} postLoader={postLoader} /> <SuggestedFriendsBar /> </>} />
                        <Route path="/Notifications" Component={Notifications} />
                        <Route path="/User/:profileUsername" Component={User} />
                        <Route path="/Chat" Component={Chat} />
                        <Route path='/*' element={<Navigate to='/NotFound' />} />
                    </Routes>
                </div>
            </WebSocketProvider>
        </StompSessionProvider>
    );
}

export default Home;
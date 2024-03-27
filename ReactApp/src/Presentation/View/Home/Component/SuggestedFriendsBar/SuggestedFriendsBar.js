import SuggestedFriend from "./SuggestedFriend/SuggestedFriend";
import SuggestedFriendsViewHandler from "./SuggestedFriendsBarViewHandler";

const SuggestedFriendsBar = () => {

    const { recommended,
        goToRecommendedFriendsPage,
        username,
        name,
        src,
        loadSuggestedFriends } = SuggestedFriendsViewHandler();

    return (
        <div className="people_container">
            <SuggestedFriend option='Log Out' src={src} username={username} name={name} />
            <div style={{ alignSelf: "center", width: "85%", display: "flex", flexDirection: "row", justifyContent: "space-between", fontSize: "0.8rem", marginTop: "2%" }} >
                <div style={{ color: "gray" }}>Suggested for you</div>
                <div style={{ cursor: "pointer" }} onClick={() => { goToRecommendedFriendsPage() }}>See all</div>
            </div>

            {recommended.map((user) => (<SuggestedFriend key={user.username} src={user.src} option='Follow' name={user.name} username={user.username} loadSuggestedFriends={loadSuggestedFriends} />))}

        </div>
    )
}

export default SuggestedFriendsBar;
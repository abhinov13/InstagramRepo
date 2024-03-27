import SideBarViewModel from "./SideBarViewModel";
import CreatePost from "./Component/CreatePost";

const SideBar = (props) => {

   const {
      create,
      setCreate,
      goToHome,
      goToSearch,
      goToNotifications,
      goToUser,
      goToChat,
      type,
      logOut
   } = SideBarViewModel();

   if (props.isOpen) {
      return <>
         {create ? <CreatePost setCreate={setCreate} postLoader={props.postLoader} /> : null}
         <div className="side_bar">
            {/**<img src="/instaLogoDark.svg" className="sidebar_logo" alt="Home icon" /> */}
            <div className="app_logo" />
            <div className="app_options">
               <div onClick={goToHome}><img src="/home.svg" alt="Home icon" /> <span className="side_bar_button_text">Home</span></div>
               <div onClick={goToSearch}><img src="/search.svg" alt="Search icon" /> <span className="side_bar_button_text">Search</span></div>
               {/**
                * <div style={{cursor: "not-allowed"}} title="coming soon"><img src="/compass.svg" alt="Explore icon" /> <span className="side_bar_button_text">Explore</span></div>
               <div style={{cursor: "not-allowed"}} title="coming soon"><img src="/reels.svg" alt="Reels icon" /> <span className="side_bar_button_text">Reels</span></div>
               
                */}
               <div onClick={goToChat} ><img src="/messenger.svg" alt="Messenger icon" /> <span className="side_bar_button_text">Messages</span></div>
               <div onClick={goToNotifications}>
                  <img src={type.length === 0 ? "/heart.svg" : "/whiteHeart.svg"} alt="Notifications icon" />
                  <span className="side_bar_button_text">Notifications</span>
               </div>
               <div onClick={() => { setCreate(true) }}><img src="/create.svg" alt="Create Post icon" /> <span className="side_bar_button_text">Create</span></div>
               <div onClick={goToUser} ><img src="/user.svg" alt="profile icon" /> <span className="side_bar_button_text">Profile</span></div>
               {/**
                * <div><img src="/menu.svg" alt="menu icon" /> <span className="side_bar_button_text">More</span></div>
                */}
                <div style={{marginTop: "auto"}} onClick={() => logOut()}><img src="/logOut.svg" alt="menu icon" /> <span className="side_bar_button_text">Log Out</span></div>
            </div>
         </div>
      </>
   }
   else {
      return <>
         <div className="side_bar_small">
            <img src="instaSmallLogo.svg" className="sidebar_small_logo" alt="Home icon" />
            <div>
               <div><img src="/home.svg" alt="Home icon" /></div>
               <div><img src="/search.svg" alt="Home icon" /></div>
               <div><img src="/compass.svg" alt="Home icon" /></div>
               <div><img src="/reels.svg" alt="Home icon" /></div>
               <div><img src="/messenger.svg" alt="Home icon" /></div>
               <div><img src="/heart.svg" alt="Home icon" /></div>
               <div onClick={() => { setCreate(true) }}><img src="/create.svg" alt="Home icon" /></div>
               <div><img src="/user.svg" alt="Home icon" /></div>
               <div style={{cursor: "not-allowed"}} ><img src="/menu.svg" alt="Home icon" /></div>
            </div>
         </div>
      </>
   }
};

export default SideBar;
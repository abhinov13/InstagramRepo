import SearchPerson from "../Component/SearchPerson/SearchPerson";
import PeopleContainerViewHandler from "./PeopleContainerViewHandler";
const PeopleContainer = () => {
    const { people, following } = PeopleContainerViewHandler();
    return (
        <div className="suggested_container">
            <div>Suggested</div>
            {
                people?.map((person) => {
                    return <div className="suggested_person">
                        <SearchPerson
                            username={person.user.username}
                            fullName={person.user.name}
                            common={person.common.map((user) => (user.username))}
                            followers={following}
                            src={person.user.profilePictureUrl}
                        />
                    </div>
                })
            }
        </div>
    )
}

export default PeopleContainer;
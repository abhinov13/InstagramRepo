import SearchPerson from "../../../SearchPerson/SearchPerson";
import { SearchResultsViewHandler } from "./SearchResultsViewHandler";
const SearchResults = ({ data }) => {

    const { followers } = SearchResultsViewHandler();

    return (
        <div className="search_container">
            {data?.map((person) => (
                <div key={person.username} className="suggested_person">
                    <SearchPerson
                        username={person.username}
                        fullName={person.name}
                        common={[]}
                        followers={followers}
                        src={person.profilePictureUrl}
                    />
                </div>
            ))}
        </div>
    )
}

export default SearchResults;
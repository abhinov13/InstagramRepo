import SearchResults from "./Components/SearchResults/SearchResults";
import SearchViewHandler from "./SearchViewHandler";

const Search = () => {

    const { search,
        updateSearchKey,
        //searchOption,
        //updateSearchOption,
        data } = SearchViewHandler();

    return (
        <div className="search_wrapper">
            <form onSubmit={(e) => { search(e) }} className="search_input">
                <input type="text" onChange={updateSearchKey} placeholder="Search..." />
                <button type="submit" style={{ cursor: 'pointer' }}><img src="/search.svg" alt="search" style={{ height: '100%' }} /></button>
            </form>

            {/**
             * <div className="search_option">
                <div style={searchOption === 'Accounts' ? { borderBottom: '1px solid white' } : {}} onClick={() => updateSearchOption('Accounts')}>Accounts</div>
                <div style={searchOption === 'Posts' ? { borderBottom: '1px solid white' } : {}} onClick={() => updateSearchOption('Posts')}>Posts</div>
            </div>
             */}

            <SearchResults data={data} />

        </div>
    )
}

export default Search;
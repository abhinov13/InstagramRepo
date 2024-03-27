import SearchPersonViewHandler from "./SearchPersonViewHandler";

const SearchPerson = (props) => {

    const { followed,
        follow,
        common,
        goToUser } = SearchPersonViewHandler(props);

    return (
        <>
            <div> <img src={props.src ? props.src : '/user.svg'} alt="Person" onClick={goToUser} style={{cursor: "pointer"}}/> </div>
            <div style={{ flex: "1" }}>
                <div onClick={goToUser} style={{cursor: "pointer"}}>{props.username}</div>
                <div>{props.fullName}</div>
                {common != null ? <div>{common}</div> : null}
            </div>
            <div style={{ width: "15%" }}>
                <button style={{ height: "65%", width: "100%", minHeight: "20px", minWidth: "60px" }} onClick={() => { follow() }} >
                    {followed ? 'Following' : 'Follow'}
                </button>
            </div>
        </>
    )
}

export default SearchPerson;
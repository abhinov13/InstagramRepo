import { useState } from "react";
import { SearchUser } from "../../../../../Domain/UseCase/Search/SearchUser";
import { useUser } from "../../../../Context/UserContext/UserContext";

const SearchViewHandler = () => {
    
    const [searchKey,setSearchKey] = useState('');
    const [searchOption,setSearchOption] = useState('Accounts');
    const [data,setData] = useState([]);

    const updateSearchOption = (option) =>{
        setSearchOption(option);
    }

    const updateSearchKey = (e) => {
        setSearchKey(e.target.value);
    }

    const {username} = useUser();

    const search = (e) => {
        e.preventDefault();
        SearchUser()
        .execute(searchKey)
        .then(({data}) => {
            data = data.filter(({username: selfUsername}) => (selfUsername !== username))
            setData(data);
        })
    }

    return {
        search,
        updateSearchKey,
        updateSearchOption,
        searchOption,
        data
    }
}

export default SearchViewHandler;
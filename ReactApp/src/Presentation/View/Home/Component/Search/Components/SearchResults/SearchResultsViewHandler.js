import { useEffect, useState } from "react";
import { useUser } from "../../../../../../Context/UserContext/UserContext"
import {  GetFollowing } from "../../../../../../../Domain/UseCase/Follow/GetUsers";

export const SearchResultsViewHandler = () => {
    const {username} = useUser();
    const [followers,setFollowers] = useState([]);
    useEffect(
        () => {
            GetFollowing()
            .execute(username)
            .then(
                ({data}) => {
                    if(data != null)
                    {
                        setFollowers(data);
                    }
                }
            )
        }, [username]
    );

    return {
        followers
    }
};
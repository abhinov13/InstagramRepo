import { searchUser } from "../DataSource/search_datasource";

export const findUser = async (key) => {
    try {
        const {data} = await searchUser(key);
        console.log("searching users");
        return {data: data, error: null};
    } catch (error) {
        console.log("error while searching user");
        return {data: null, error: error};
    }
}
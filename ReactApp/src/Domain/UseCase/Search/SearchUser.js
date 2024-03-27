import { findUser } from "../../../Data/Repository/search_repository"

export const SearchUser = () => {
    return {
        execute: async (key) => {
            const { data, error } = await findUser(key);
            return { data, error };
        }
    }
}
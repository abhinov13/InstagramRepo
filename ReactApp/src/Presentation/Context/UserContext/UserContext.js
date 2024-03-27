import { createContext, useContext, useEffect, useState } from "react";
import GetUser from "../../../Domain/UseCase/User/GetUser";

const Context = createContext();

const UserContext = ({ children }) => {
    const [username, setUsername] = useState(null);
    const [name,setName] = useState(null);
    useEffect(() => {
        if(username != null)
        {
            GetUser()
            .execute(username)
            .then(({data}) => {
                setName(data.name);
            });
        }
        else if(localStorage.getItem("username") != null)
        {
            setUsername(localStorage.getItem("username"));
        }
    }, [username])

    const store = {
        username,
        setUsername,
        name
    }
    return (
        <Context.Provider value={store}>
            {children}
        </Context.Provider>
    )

}

export default UserContext;

export const useUser = () => {
    return useContext(Context);
};
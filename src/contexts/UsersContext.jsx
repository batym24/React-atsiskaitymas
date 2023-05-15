import { createContext } from "react";
import { useReducer } from "react";

const UsersContext = createContext()

const USERS_ACTION_TYPE = {
    ADD: 'addNewUser'
}

const reducer = (state, action) => {
    switch (action.type){
        case USERS_ACTION_TYPE.ADD:
            fetch(`http://localhost:8080/users`, {
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(action.data)
            })
            return [...state, action.data]
    }
}

const UsersProvider = ({children}) => {

    const [users, setUsers] = useReducer(reducer, [])

    return ( 
        <UsersContext.Provider
            value={{
                setUsers,
                USERS_ACTION_TYPE
            }}
        >
            {children}
        </UsersContext.Provider>
     );
}
 
export default UsersContext;
export {UsersProvider}
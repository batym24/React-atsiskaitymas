import { createContext } from "react";

const UsersContext = createContext()

const UserProvider = ({children}) => {
    return ( 
        <UsersContext.Provider
            value={{

            }}
        >
            {children}
        </UsersContext.Provider>
     );
}
 
export default UsersContext;
export {UserProvider}
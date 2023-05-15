import { createContext } from "react";

const PostContext = createContext()

const PostProvider = ({children}) => {
    return ( 
        <PostContext.Provider
            value={{

            }}
        >
            {children}
        </PostContext.Provider>
     );
}
 
export default PostContext;
export {PostProvider}
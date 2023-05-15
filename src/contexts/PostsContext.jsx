import { createContext } from "react";
import { useReducer, useEffect } from "react";

const PostContext = createContext()

const ACTION_TYPES = {
    GET: 'getAllPosts'
}

const reducer = (state, action) => {
    switch (action.type){
        case ACTION_TYPES.GET: 
        return action.data
    }
}

const PostProvider = ({children}) => {

    const [posts, setPosts] = useReducer(reducer, []) 

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
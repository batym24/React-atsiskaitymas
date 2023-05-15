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

    useEffect (() => {
        fetch('http://localhost:8080/posts')
        .then(res => res.json())
        .then(data => setPosts({
            type: ACTION_TYPES.GET,
            data: data
        }))
    }, [])

    console.log(posts)

    return ( 
        <PostContext.Provider
            value={{
                ACTION_TYPES,
                posts,
                setPosts
            }}
        >
            {children}
        </PostContext.Provider>
     );
}
 
export default PostContext;
export {PostProvider}
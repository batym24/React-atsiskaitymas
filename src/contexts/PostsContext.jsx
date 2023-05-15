import { createContext } from "react";
import { useReducer, useEffect } from "react";

const PostsContext = createContext()

const ACTION_TYPES = {
    GET: 'getAllPosts',
    ADD: 'addNewPosts'
}

const reducer = (state, action) => {
    switch (action.type){
        case ACTION_TYPES.GET: 
            return action.data
            case ACTION_TYPES.ADD:
                fetch(`http://localhost:8080/posts`, {
                    method: 'POST',
                    headers: {'Content-type': 'application/json'},
                    body: JSON.stringify(action.data)
                })
                return [...state, action.data]
    }   
}

const PostsProvider = ({children}) => {

    const [posts, setPosts] = useReducer(reducer, [])

    useEffect (() => {
        fetch('http://localhost:8080/posts')
        .then(res => res.json())
        .then(data => setPosts({
            type: ACTION_TYPES.GET,
            data: data
        }))
    }, [])

    return ( 
        <PostsContext.Provider
            value={{
                ACTION_TYPES,
                posts,
                setPosts
            }}
        >
            {children}
        </PostsContext.Provider>
     );
}
 
export default PostsContext;
export {PostsProvider}
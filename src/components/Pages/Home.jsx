import styled from "styled-components";
import { useContext } from "react";
import PostContext from "../../contexts/PostsContext";
import Card from "../Molecules/Cards";


const StyledMain = styled.main`
    display: flex;
    flex-wrap: wrap;
`

const Home = () => {

    const {posts} = useContext(PostContext)

    return ( 
        <StyledMain>
            {
                posts.map(post => <Card
                    key={post.id}
                    post = {post}
                />)
            }
        </StyledMain>
     );
}
 
export default Home;
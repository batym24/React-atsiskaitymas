import styled from "styled-components";
import { useContext } from "react";
import PostContext from "../../contexts/PostsContext";
import Card from "../Molecules/Cards";


const StyledMain = styled.main`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding: 30px;

    > div {
        border: 2px solid black;
        width: 250px;
        padding: 10px;
        background-color: #f7f7f7;

    }

    > div > p {
        font-size: 0.9rem;
    }
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
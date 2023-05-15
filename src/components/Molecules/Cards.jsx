import styled from "styled-components";

const StyledDiv = styled.div`
    
`

const Card = ({post}) => {
    return ( 
        <StyledDiv>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
        </StyledDiv>
     );
}
 
export default Card;
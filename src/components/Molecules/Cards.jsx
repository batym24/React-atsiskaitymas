import styled from "styled-components";

const StyledDiv = styled.div`
    margin: 5px;
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
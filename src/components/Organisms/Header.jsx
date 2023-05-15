import styled from "styled-components";

const StyledHeader = styled.header`
    
`

const Header = () => {
    return ( 
        <StyledHeader>
            <div>
                <img src="https://w7.pngwing.com/pngs/235/872/png-transparent-react-computer-icons-redux-javascript-others-logo-symmetry-nodejs-thumbnail.png" alt="logo" />
            </div>
            <div>
                <button>Login</button>
                <button>Register</button>
            </div>
        </StyledHeader>
     );
}
 
export default Header;
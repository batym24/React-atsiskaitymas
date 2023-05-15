import styled from "styled-components";
import {Link} from "react-router-dom"

const StyledHeader = styled.header`
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-bottom: 2px solid gray;

    button {
        padding: 10px 30px;
        margin: 5px;
        background-color: #82d7f7;
        border: none;
        border-radius: 5px;
        font-size: 1rem;
        font-weight: 600;
    }

    img {
        width: 80px;
    }
`

const Header = () => {
    return ( 
        <StyledHeader>
            <div>
                <img src="https://daily-dev-tips.com/ezoimgfmt/cdn.hashnode.com/res/hashnode/image/upload/v1647492266631/rH6yDfWyJ.png?ezimgfmt=rs:380x337/rscb2/ngcb2/notWebP" alt="logo" />
            </div>
            <div>
                <Link to='/login'><button>Login</button></Link>
                <Link to= '/register'><button>Register</button></Link>
            </div>
        </StyledHeader>
     );
}
 
export default Header;
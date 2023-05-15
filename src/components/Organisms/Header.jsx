import styled from "styled-components";
import {Link} from "react-router-dom"
import UsersContext from "../../contexts/UsersContext";
import { useContext } from "react";

const StyledHeader = styled.header`
    height: 70px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 20px;
    border-bottom: 2px solid gray;
    background-color: white;
    position: relative;

    .user {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        img {
            width: 50px
        }
    }

    button {
        padding: 10px 30px;
        margin: 5px;
        background-color: #82d7f7;
        border: none;
        border-radius: 5px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
    }

    .logo {
        position: absolute;
        top: 15px;
        left: 15px;
        
        img {
            width: 80px;
        }
    }
    .nav a {
        text-decoration: none;
        font-size: 1.4rem;
        padding: 15px;
        font-weight: 700;
        color: #82d7f7;
    }
`

const Header = () => {

    const {currentUser, setCurrentUser} = useContext(UsersContext)

    return ( 
        <StyledHeader>
            {
                currentUser ? 
                <div className="logo">
                    <Link to="/">
                        <img src="https://daily-dev-tips.com/ezoimgfmt/cdn.hashnode.com/res/hashnode/image/upload/v1647492266631/rH6yDfWyJ.png?ezimgfmt=rs:380x337/rscb2/ngcb2/notWebP" alt="logo" />
                    </Link>
                </div> :
                <div className="logo">
                    <img src="https://daily-dev-tips.com/ezoimgfmt/cdn.hashnode.com/res/hashnode/image/upload/v1647492266631/rH6yDfWyJ.png?ezimgfmt=rs:380x337/rscb2/ngcb2/notWebP" alt="logo" />
                </div>
                
            }
            {
                currentUser &&
                <div className="nav">
                    <Link to='/'>Home</Link>
                    <Link to='/add'>Add</Link>
                </div> 

            }
            {
                currentUser ?
                <div className="user">
                    <img src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg" alt="user logo" />
                    <span>{currentUser.email}</span>
                    <button onClick={() => setCurrentUser(null)}>Log out</button>
                </div> :
                    <>
                        <Link to='/login'><button>Login</button></Link>
                        <Link to= '/register'><button>Register</button></Link>                
                    </>
            }
            <div>

            </div>
        </StyledHeader>
     );
}
 
export default Header;
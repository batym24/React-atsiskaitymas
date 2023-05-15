import styled from "styled-components";

const StyledFooter = styled.footer`
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-top: 2px solid gray;
    height: 50px;
    font-size: 1.3rem;
`

const Footer = () => {
    return ( 
        <StyledFooter>
            <p>
            Copyright © 2023 by Mantas Baty
            </p>
        </StyledFooter>
     );
}
 
export default Footer;
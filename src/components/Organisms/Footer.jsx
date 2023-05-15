import styled from "styled-components";

const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-top: 2px solid gray;
    height: 80px;
    font-size: 1.5rem;
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
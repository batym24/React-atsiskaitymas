import styled from "styled-components";
import {useFormik} from 'formik'
import * as yup from 'yup'

const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Register = () => {

    const values = {
        email: '',
        password: '',
        passwordCheck: ''
    }

    const validationSchema = yup.object({
        
    })

    return ( 
        <StyledMain>
            <h1>Registration</h1>
            <form>

            </form>
        </StyledMain>
     );
}
 
export default Register;
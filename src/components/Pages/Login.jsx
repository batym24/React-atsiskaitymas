import styled from "styled-components";
import {useFormik} from 'formik'
import * as yup from 'yup'

const StyledMain = styled.main`
    
`

const Login = () => {

    const values = {
        email: '',
        password: ''
    }

    const validationSchema = yup.object({
        email: yup.string()
        .email('Enter a valid email')
        .required('This input is required'),
        password: yup.string()
        .matches(
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,20}$/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
          )
        .required("This input is required")
    })

    return ( 
        <StyledMain>
            <h1>Login</h1>
            <form>

            </form>
        </StyledMain>
     );
}
 
export default Login;
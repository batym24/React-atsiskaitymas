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
                <div>
                    <label htmlFor="email">Provide your email</label>
                    <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    value={''}
                    onChange={""}
                    onBlur={""}
                    />
                </div>
                <div>
                    <label htmlFor="password">Provide your password</label>
                    <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    value={''}
                    onChange={""}
                    onBlur={""}
                    />
                </div>
                <div>
                    <label htmlFor="passwordCheck">Repeat the password</label>
                    <input 
                    type="password" 
                    name="passwordCheck" 
                    id="passwordCheck" 
                    value={''}
                    onChange={""}
                    onBlur={""}
                    />
                </div>
                <input type="submit" value={"Register"} />
            </form>
        </StyledMain>
     );
}
 
export default Register;
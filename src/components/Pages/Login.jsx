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

    const formik = useFormik({
        initialValues: values,
        validationSchema: validationSchema,
        onSubmit: (values) => {

        }
    })

    return ( 
        <StyledMain>
            <h1>Login</h1>
            <form>
                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                    type="email"
                    name="email"
                    id="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                    {
                        (formik.touched.email && formik.errors.email) && 
                        <p style={{color:"tomato"}}>{formik.errors.email}</p>
                    }
                </div>
                <div>
                    <label htmlFor="password">Email</label>
                    <input 
                    type="password"
                    name="password"
                    id="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                    {
                        (formik.touched.password && formik.errors.password) && 
                        <p style={{color:"tomato"}}>{formik.errors.password}</p>
                    }
                </div>
                <input type="login" value={"Login"} />
            </form>
        </StyledMain>
     );
}
 
export default Login;
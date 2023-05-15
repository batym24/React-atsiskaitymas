import styled from "styled-components";
import {useFormik} from 'formik'
import * as yup from 'yup'

const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    width: 500px;
    margin: 20px auto;
    padding: 30px;
    border-radius: 5px;
    background-color: #f7f7f7;

    form {
        display: flex;
        flex-direction: column;

        label {
            font-size: 1.1rem;
            padding: 5px;
        }

        input {
            width: 300px;
            padding: 5px;
        };

        input[type='submit'] {
            padding: 10px;
            width: 200px;
            margin: auto;
        }
    }

    form > div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

const Register = () => {

    const values = {
        email: '',
        password: '',
        passwordCheck: ''
    }

    const validationSchema = yup.object({
        email: yup.string()
        .email("This input must be valid email")
        .required("This input is required"),
        password: yup.string()
        .matches(
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,20}$/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
          )
        .required("This input is required"),
        passwordCheck: yup.mixed()
        .oneOf([yup.ref('password')], 'Passwords must match')
        .required("This input is required"),
    })

    const formik = useFormik({
        initialValues: values,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values)
        }
    })

    return ( 
        <StyledMain>
            <h1>Registration</h1>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="email">Provide your email</label>
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
                        <p style={{color: 'tomato'}}>{formik.errors.email}</p>
                    }
                </div>
                <div>
                    <label htmlFor="password">Provide your password</label>
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
                        <p style={{color: 'tomato'}}>{formik.errors.password}</p>
                    }
                </div>
                <div>
                    <label htmlFor="passwordCheck">Repeat the password</label>
                    <input 
                    type="password" 
                    name="passwordCheck" 
                    id="passwordCheck" 
                    value={formik.values.passwordCheck}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                    {
                        (formik.touched.passwordCheck && formik.errors.passwordCheck) && 
                        <p style={{color: 'tomato'}}>{formik.errors.passwordCheck}</p>
                    }
                </div>
                <input type="submit" value={"Register"} />
            </form>
        </StyledMain>
     );
}
 
export default Register;
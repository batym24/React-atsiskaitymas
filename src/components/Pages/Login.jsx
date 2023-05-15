import styled from "styled-components";
import {useFormik} from 'formik'
import * as yup from 'yup'
import UsersContext from "../../contexts/UsersContext";
import { useContext} from "react";
import {useNavigate} from 'react-router-dom'

const StyledMain = styled.main`
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    width: 500px;
    margin: 60px auto;
    padding: 30px;
    border-radius: 5px;
    background-color: #f7f7f7;
    min-height: calc(100vh - 130px);

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
            margin: 20px auto;
        }
    }

    form > div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

const Login = () => {

    const {users, setCurrentUser, currentUser, setNotValid, notValid} = useContext(UsersContext)

    const navigate = useNavigate()

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
        onSubmit: (values,) => {
            const logedInUser = users.find(user => values.email === user.email && values.password == user.password)
            if(logedInUser){
                setCurrentUser(logedInUser)
                setNotValid(null)
                navigate('/')
            }
            else {
                setNotValid(true)
            }
        }
    })

    return ( 
        <StyledMain>
            <h1>Login</h1>
            <form onSubmit={formik.handleSubmit}>
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
                    <label htmlFor="password">Password</label>
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
                <input type="submit" value={"Login"} />
            </form>
            {
                    notValid &&
                    <p style={{textAlign:"center", color:"tomato"}}>Email or password not correct</p>
            }
        </StyledMain>
     );
}
 
export default Login;
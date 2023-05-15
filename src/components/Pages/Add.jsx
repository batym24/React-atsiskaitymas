import styled from "styled-components";
import {useFormik} from 'formik'
import * as yup from 'yup'
import {v4 as generateId} from 'uuid'
import { useContext } from "react";
import PostContext from "../../contexts/PostsContext";

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
            margin: 20px auto;
        }
    }

    form > div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

const Add = () => {

    const values = {
        title: "",
        body: ""
    }

    const validationSchema = yup.object({
        title: yup.string()
        .required('Input is required')
        .max(50, "You can't add more than 50 symbols"),
        body: yup.string()
        .required('Input is required')
        .max(255, "You can't add more than 255 symbols")
    })

    const formik = useFormik({
        initialValues: values,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const newPost = {
                id: generateId(),
                title: values.title,
                body: values.body 
            }
        }
    })

    return ( 
        <StyledMain>
            <h1>Add new post</h1>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input 
                    type="text" 
                    name="title"
                    id='title'
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                    {
                        (formik.touched.title && formik.errors.title) &&
                        <p style={{color: "tomato"}}>{formik.errors.title}</p>
                    }
                </div>
                <div>
                    <label htmlFor="title">Description</label>
                    <textarea 
                    name="body"
                    id='body'
                    cols="50"
                    rows="10"
                    value={formik.values.body}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                    {
                        (formik.touched.body && formik.errors.body) &&
                        <p style={{color: "tomato"}}>{formik.errors.body}</p>
                    }
                </div>
                <input type="submit" value={"Add"} />
            </form>
        </StyledMain>
     );
}
 
export default Add;
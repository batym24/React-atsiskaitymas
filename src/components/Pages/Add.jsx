import styled from "styled-components";
import {useFormik} from 'formik'
import * as yup from 'yup'
import {v4 as generateId} from 'uuid'

const StyledMain = styled.main`
    
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

            </form>
        </StyledMain>
     );
}
 
export default Add;
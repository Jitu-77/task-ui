import * as Yup from 'yup';

export const LoginValidators = ()=>{
    const validationSchema = Yup.object({
        username:Yup.string()
        .required("User name is required")
        .matches(/^[a-zA-Z0-9]+$/),
        password:Yup.string()
        .required("Password is required")
    })
    return validationSchema
}

export const SignUpValidators = ()=>{
    const validationSchema = Yup.object({
        username : Yup.string().required("User name is required").matches(/^[a-zA-Z0-9]+$/),
        password : Yup.string().required("Password is required"),
        email : Yup.string().required("Email is required"),
        avatar : Yup.mixed()
    })
    return validationSchema
}

export const TasksValidators = ()=>{
    const validationSchema = Yup.object({
        title : Yup.string().required("Title is required"),
        subTitle : Yup.string().required("sub title is required"),
        description : Yup.string().required("Description is required"),
        supportingDocuments : Yup.mixed()
    })
    return validationSchema
}

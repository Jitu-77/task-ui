import React, { useEffect } from 'react'
import './TaskDetails.css'
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import BackButton from '../assets/back.png';
import { Formik,Form , ErrorMessage } from 'formik'
import {TasksValidators} from '../utilities/Utils.js'
import {PostResponse} from '../utilities/api.js'
import {GetByIdResponse} from '../utilities/api.js'
import {userDetails} from '../utilities/userContext.jsx'
import {UpdateByIdResponse} from '../utilities/api.js'
import {postTask,updateTaskById} from '../features/task/taskSlice.js'
import { useDispatch } from 'react-redux';
function TaskDetails() {
      const dispatch = useDispatch()
     const {user,setUser} = userDetails();
     console.log(user,"USER DET")  
  const [initialValues,setInitialValues] = React.useState({
    title : "",
    subTitle : "",
    description : "",
    supportingDocuments : []
  })
  const [loading, setLoading] = React.useState(false);
   const {_id} = useParams()
   console.log("USERID",_id)
      const navigate = useNavigate();
    const handleBack=()=>{
    navigate("/dashboard")
  }
    const handleSubmit=async (values)=>{
      const formData = new FormData()
      formData.append('title',values.title);
      formData.append('subTitle',values.subTitle);
      formData.append('description',values.description);
      // formData.append('supportingDocuments',values.supportingDocuments)
         values.supportingDocuments.forEach((file) => {
          formData.append("supportingDocuments", file);
        });
      console.log(formData,"Form Data")
      if(_id){
        console.log(values)
        const {supportingDocuments,...payload}=values
        //-----replaced----------
        // const response = await UpdateByIdResponse('tasks/updateById/'+_id,payload)
        // if(response){
        //   console.log(response,"<------->")
        //    navigate("/dashboard")
        // }

        dispatch(updateTaskById({id:_id,payload}))
        navigate("/dashboard")
      }else{
        dispatch(postTask(formData))
        navigate("/dashboard")
        //-----replaced----------
        // const response = await PostResponse('tasks/create',formData)
        // if(response){
        //   console.log(response,"<------->")
        //    navigate("/dashboard")
        // }      
      }
      // navigate("/dashboard")
  }
  useEffect(()=>{
    async function fetchData(){
      if (!_id) return;
        const getResponse = await GetByIdResponse('tasks/getById/'+_id)
        console.log(getResponse,"------>")
        if(getResponse){
          let data = getResponse.data
          console.log("HERE")
          setInitialValues({
            title: data[0]?.title || "",
            subTitle: data[0]?.subTitle || "",
            description: data[0]?.description || "",
            supportingDocuments: [],
          });
        }
    }
      fetchData()
  },[_id])
  return (
    <div className='taskDetailsContainer'>
        <div className='headerSection'>
                {_id ? 'TaskDetails' : 'Create Task Details'}
        </div>
        <div onClick={handleBack}>
          {/* <img src='./back.png' className='backButton'/> */}
          <img src={BackButton} className='backButton'/>
        </div>
        <Formik initialValues={initialValues} validationSchema={TasksValidators}  onSubmit={handleSubmit} enableReinitialize={true}>
        {({values,errors,handleChange,handleBlur,setFieldValue})=>(
          <>
          <Form>
            <div className='formContainerSection'>
              <div className='inputField'>
              <label>Title</label>
              <input 
                  className='inputStyle' 
                  type='text'
                  name='title'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values?.title}
                  />
              </div>

              <div className='inputField'>
              <label>Sub Title</label>
              <input 
                  className='inputStyle' 
                  type='text'
                  name='subTitle'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values?.subTitle}
                  />
              </div>

              <div className='inputField'>
              <label>Description</label>
              <input 
                  className='inputStyle' 
                  type='text'
                  name='description'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values?.description}
                  />
              </div>

              <div className='inputField'>
                    <label>Supporting Documents</label>
                    <label htmlFor="supportingDocuments" className='customFileUpload'>Choose Files</label>              
                    <input 
                    className='inputFileStyle' 
                    type='file'
                    multiple
                    id="supportingDocuments" 
                    onChange={(e)=>{
                      console.log(e,"<------------>");
                      const files = Array.from(e.currentTarget.files);
                      // setFieldValue("supportingDocuments", files);
                      setFieldValue("supportingDocuments",  [
                        ...(values.supportingDocuments || []),
                         ...files,
                      ]);
                    }}
                    onBlur={handleBlur}
                     />
              </div>

              {/* <div className='submitForm' onClick={(e)=>{
                e.preventDefault();
                handleSubmit(values);
              }
              }>
                Submit
              </div> */}
              <button className='submitForm'>
               {_id ? 'Update' : 'Submit'}
              </button>
            </div> 
          </Form>
          </>
        )}        
        </Formik>
    </div>
  )
}

export default TaskDetails
import React, {useState} from 'react'
import { useFormik } from 'formik'
import { Input } from 'rsuite'
import RegisterStyle from './register.module.css'
import { userSchema } from '../../schemas'
import { Link } from 'react-router-dom'
// import fire from '../../../firebase/firebase'

const onSubmit = async (values, actions) => {
  console.log(actions)
  await new Promise((resolve) => setTimeout(resolve, 500));
  actions.resetForm();
}


export function User() {
  const {values, isSubmitting, onBlur, errors, handleChange, handleBlur, handleSubmit} = useFormik({
    initialValues: {
        name: "",
        age: 0,
        email: "",
        password: ""
    },
    validationSchema: userSchema,
    onSubmit
  })
  // console.log(handleChange)
  // console.log(handleBlur)
  console.log(values)
  // console.log(errors)
  /*console.log(isSubmitting)
  console.log(handleChange)
  console.log(handleSubmit)
  */
 let input_error = RegisterStyle.input_error
 let input = RegisterStyle.input
  return (
    <div className={RegisterStyle.container}>
      <form onSubmit = {handleSubmit} autoComplete='off'>
        <label htmlFor='name'
        className={RegisterStyle.label}> Name </label>
        <br />
        <input 
        value = {values.name}
        onBlur = {handleBlur}
        onChange = {handleChange}
        id = "name"
        type = "text" 
        className={errors.name ? input_error: input}       
        />
        {errors.name && (<p>{errors.name}</p>)}
        <br />
        <label htmlFor='age'> Age </label>
        <br />
        <input 
        value = {values.age}
        onBlur = {handleBlur}
        onChange = {handleChange}
        id = "age"
        type = "number"
        className={errors.age ? input_error: input} 
        />
        {errors.age && (<p>{errors.age}</p>)}
        <br />
        <label htmlFor='email'> Email </label>
        <br />
        <input 
        value = {values.email}
        onBlur = {handleBlur}
        onChange = {handleChange}
        id = "email"
        type = "email"
        className={errors.email ? input_error: input} 
        />
        {errors.email && (<p>{errors.mail}</p>)}
        <br />
        <label htmlFor='password'> Password </label>
        <br />
        <input 
        value = {values.password}
        onBlur = {handleBlur}
        onChange = {handleChange}
        id = "password"
        type = "password"
        className={errors.password ? input_error: input} 
        />
        {errors.password && (<p>{errors.password}</p>)}
        <br />
        <button
        type = 'submit'
        className={RegisterStyle.submit}
        > Submit </button>
    </form>
    <p style = {{margin: "0px 20px"}}> Already have account? 
    <Link to="/login"> <button style = {{display: "inline-block", margin: "0px 20px"}}> Login </button></Link> 
    </p>
    </div>
    
  )
}
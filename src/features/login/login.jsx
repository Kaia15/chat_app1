import React from 'react'
import { Form, useFormik } from 'formik'
import LoginStyle from './login.module.css'
import { loginSchema } from '../schemas'
import { Link } from 'react-router-dom'

const onSubmit = async(values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 500))
    alert("Register successfully!")
    actions.resetForm()
}

export function Login() {
    const {values, errors, handleBlur, handleSubmit, handleChange, onChange, onBlur, isSubmitting } = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: loginSchema,
        onSubmit,
    })
    console.log(errors)
    let input_error = LoginStyle.input_error
    let input = LoginStyle.input
    return (
    <div className={LoginStyle.container}>
        <form onSubmit = {handleSubmit} autoComplete='off'>
            <label htmlFor = "email"
            className={LoginStyle.label}> Email </label>
            <br />
            <input
            value = {values.email}
            type = "email"
            id = "email"
            onChange = {handleChange}
            className={errors.email ? input_error : input}
            />
            {errors.email && (<p> {errors.email} </p>)}
            <br />
            <label htmlFor = "password"
            className={LoginStyle.label}> Password </label>
            <br />
            <input
            value = {values.password}
            type = "password"
            id = "password"
            onChange = {handleChange}
            className={errors.password ? input_error : input}
            />
            {errors.password && (<p> {errors.password} </p>)}
            <br />
            <button
            className={LoginStyle.submit}
            type = "submit">
                Login
            </button>
        </form>
        <p> Not a member yet? 
        <Link to="/signup"> 
        <button style = {{display: "inline-block", backgroundColor: 'white', border: "none"}}> Register </button>
        </Link></p>
    </div>
    )
}
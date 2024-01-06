import React, { useState } from 'react'
import { useForm} from 'react-hook-form'
import { toast } from 'react-toastify'

export default function Register() {

  const {register,handleSubmit, watch, formState:{errors, isSubmitSuccessful}} = useForm()
  const [password, setPassword] = useState('');

  const FormSubmitHandler = (data)=>{
    toast("Form Submitted")
    console.log('data:', data)
  }
  const PasswordChange = (e) => {
    setPassword(e.target.value);
  };




  return (
    <div className='form-container'>
      <fieldset>
        <h1>Create Account</h1>
        <form onSubmit={handleSubmit(FormSubmitHandler)}>
            <div className='success'>
            {isSubmitSuccessful && <p>Registration Successful</p>}
            </div>

            <label>First Name: </label>
            <input type="text" name='firstName' {...register("firstName", {required:'Enter First Name', minLength:{value:3, message:'Enter minimum 3 letters'}, maxLength:{value:30, message:"Name can't be more than 30 characters"}})}/>
            <p className='err'>{errors.firstName?.message}</p>

            <label>Email: </label>
            <input type="text" name='email' {...register("email", {required:'Enter email', pattern:{value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/, message:'Invalid email address'}})}/>
            <p className='err'>{errors.email?.message}</p>

            <label>Password: </label>
            <input type="password" {...register('password', {required: 'Password is required',minLength:{value:10, message:'Enter minimum 10 characters'}, maxLength:{value:30, message:'Password cannot be more than 30 characters'},pattern:{value:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/, message:"Invalid Password"}})} onChange={PasswordChange}/>
            <p className='err'>{errors.password?.message}</p>

            <label>Repeat Password: </label>
            <input type="password" name='repeatPassword' {...register('repeatPassword', {required: 'Repeat Password is required', validate: (value) => value === password || 'Passwords do not match',})}/>
            <p className='err'>{errors.repeatPassword?.message}</p>
            <div className='terms'>
              <input type="checkbox" name='terms' {...register("terms", {required:'You must agree our terms and conditions'})}/>
              <p>I agree all statements in <u>Terms of service</u></p>
            </div>
              <p className='err'>{errors.terms?.message}</p>
            <input type="submit" value={'Sign Up'}/>


        </form>
      </fieldset>
    </div>
  )
}

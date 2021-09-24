import React from 'react';
import useForm from './useForm';
import validate from './validateInfo';
import './Form.css';

const FormSignup = ({submitForm}) => {
    const {handleChange, values, handleSubmit, errors} 
    = useForm(submitForm,
      validate
    );


    return (
       <div className='form-content-right'>
           <form className='form' onSubmit={handleSubmit}>
               <h1>Sign Up
               </h1>

               <div className='form-inputs'>
                   <label htmlFor='name'
                   className='form-label'>
                       Full Name
                    </label>
                    <input 
                    id='name'
                    type='text' 
                    name='' 
                    className='form-input'
                    placeholder='Enter your Full Name'
                    value={values.name}
                    onChange={handleChange}
                    />
                    {errors.name && <p>{errors.name}</p>} 
               </div>

               <div className='form-inputs'>
                   <label htmlFor='Phone Number'
                   className='form-label'>
                       Phone Number
                    </label>
                    <input 
                    id='number'
                    type='number' 
                    name='number' 
                    className='form-input'
                    placeholder='Enter your Phone Number'
                    value={values.number}
                    onChange={handleChange}
                    />
                    {errors.number && <p>{errors.number}</p>} 
               </div>

               <div className='form-inputs'>
                   <label htmlFor='email'
                   className='form-label'>
                       Email
                    </label>
                    <input 
                    id='email'
                    type='email' 
                    name='email' 
                    className='form-input'
                    placeholder='Enter your email'
                    value={values.email}
                    onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>} 
               </div>

               <div className= 'form-inputs' >
                   <label htmlFor= 'DateOfBirth'
                   className= 'form-label'>
                       Date Of Birth
                    </label>
                    <input 
                    id='text'
                    type='password'
                    name='password'
                    className='form-input'
                    placeholder='min age 18'
                    value={values.password}
                    onChange={handleChange}
                    />
                    {errors.password && <p>{errors.password}</p>} 
               </div>


               <button className='form-input-btn' type='submit'>
                   Sign Up
               </button>
               

           </form>
       </div>
    );
};

export default FormSignup

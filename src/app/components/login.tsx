import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useLazyTableQuery } from '../services/tableApi';
import { useLoginMutation } from '../services/loginApi';


type Login = {
    email: string;
    password: string;
    personal_data_access: boolean;
}


export const Login = () => {
  const {
    handleSubmit,
    register,
  }=useForm<Login>({
    mode: 'onChange', 
    reValidateMode: 'onBlur',
    defaultValues: {
        email: '',
        password: '',
        personal_data_access: true
    }
  })
  const[login]=useLoginMutation()
  const navigate = useNavigate()
  const [triggertableCuery]=useLazyTableQuery()

    const onSubmit = async (data:Login)=> {
      try {
        await login(data).unwrap()
        navigate('/table')
      } catch (error: string | any) {
       console.log(error)
      }
    }
    return (<div className='flex justify-center h-screen w-screen items-center'>    
        <form className='flex flex-col gap-6' onSubmit={handleSubmit(onSubmit)}>
       <input
        {...register("email")}
       className='border-2 border-slate-200 rounded-md w-60' 
       name ="email"
       type="email"
       /> 
       <input
        {...register("password")}
       className='border-2 border-slate-200 rounded-md w-60'
       name ="password"
       type="password"
       /> 
       <div className="flex gap-2 justify-end">
        <button className='w-40 bg-slate-200 rounded-md' color='primary' type='submit' >
          Войти
        </button>
       </div>
    </form>
    </div>

  )
}

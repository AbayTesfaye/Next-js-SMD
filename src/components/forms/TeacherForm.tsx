'use client'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import InputField from '../InputField';

const schema = z.object({
  username: z.string().min(3, { message: 'Username must be at least 3 characters long!' }).max(3, { message: 'Username most be at least 20 characters long!' }),
  email: z.string().email({ message: 'Invalid eamil address!' }),
  password: z.string().min(8,{ message: 'Password must be at least 8 characters long!' }),
  firstName: z.string().min(1,{ message: 'First name is required!' }),
  lastName: z.string().min(1,{ message: 'Last name is required!' }),
  phone: z.string().min(1,{ message: 'Phone name is required!' }),
  address: z.string().min(1,{ message: 'Address name is required!' }),
  bloodType: z.string().min(1,{ message: 'Blood Type is required!' }),
  birthday: z.date({ message: 'Birthday name is required!' }),
  sex: z.enum(['male','female'], {message:'sex is required'}),
  img: z.instanceof(File, {message: 'Image is required'})
});
const TeacherForm = ({type,data}:{type:'create' | 'update'; data?:any;}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: zodResolver(schema),
      });
     
      const onSubmit =  handleSubmit(data=>{
             console.log(data);    
      })
  return (
    <form className='flex flex-col gap-8' onSubmit={onSubmit}>
       <h1 className='text-xl font-semibold'>Create a new teacher</h1>
       <span className='text-xs text-gray-400 font-medium'>Authentication Information</span>
       <div className='flex justify-between gap-4'>
       <InputField 
         label='username' 
         name='username' 
         defaultValue={data?.username} 
         register={register} 
         error={errors.username}
         />
        <InputField 
         label='Email' 
         name='email' 
         type='email'
         defaultValue={data?.email} 
         register={register} 
         error={errors.emai}
         />
        <InputField 
         label='Password' 
         name='password' 
         type='password'
         defaultValue={data?.password} 
         register={register} 
         error={errors.password}
         />
       </div>
        
       <span className='text-xs text-gray-400 font-medium'>Personal Information</span>
       <div className='flex justify-between gap-4 flex-wrap'>
       <InputField 
         label='First Name' 
         name='firstName' 
         defaultValue={data?.firstName} 
         register={register} 
         error={errors.firstName}
         />
        <InputField 
         label='Last Name' 
         name='lastName' 
         defaultValue={data?.lastName} 
         register={register} 
         error={errors.lastName}
         />
        <InputField 
         label='Phone' 
         name='phone' 
         defaultValue={data?.phone} 
         register={register} 
         error={errors.phone}
         />
        <InputField 
         label='Address' 
         name='address' 
         defaultValue={data?.address} 
         register={register} 
         error={errors.address}
         />
        <InputField 
         label='Blood Type' 
         name='bloodType' 
         defaultValue={data?.bloodType} 
         register={register} 
         error={errors.bloodType}
         />
        <InputField 
         label='Birthday' 
         name='birthday' 
         defaultValue={data?.birthday} 
         register={register} 
         error={errors.birthday}
         type='date'
         />
         </div>
       <button className='bg-blue-400 text-white p-2 rounded-md'>
        {type === 'create' ? "Create" :"Update"}
       </button>
    </form>
  )
}

export default TeacherForm
'use client'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { log } from 'node:console';

const schema = z.object({
  username: z.string().min(3, { message: 'Username must be at least 3 characters long!' }).max(3, { message: 'Username most be at least 20 characters long!' }),
  email: z.string().email({ message: 'Invalid eamil address!' }),
  password: z.string().min(8,{ message: 'Password must be at least 8 characters long!' }),
  firstName: z.string().min(1,{ message: 'First name is required!' }),
  lastName: z.string().min(1,{ message: 'Last name is required!' }),
  phone: z.string().min(1,{ message: 'Phone name is required!' }),
  address: z.string().min(1,{ message: 'Address name is required!' }),
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
       <div className='flex flex-col gap-2 w-full md:w-1/4'>
       <label htmlFor="" className='text-xs text-gray-500'>Username</label>
       <input type="text" {...register('username')} className='ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm' />
       {errors.username?.message && <p className='text-red-400 text-xs'>{errors.username?.message.toString()} </p>}
       </div>
       <span className='text-xs text-gray-400 font-medium'>Personal Information</span>
       <button className='bg-blue-400 text-white p-2 rounded-md'>
        {type === 'create' ? "Create" :"Update"}
       </button>
    </form>
  )
}

export default TeacherForm
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast, Toaster } from 'sonner';

type Input = {
  name: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
};

const Form = () => {
  const { register, handleSubmit, reset } = useForm<Input>();

  const onSubmit = async (data: Input) => {
    try {
      const response = await axios.post('/api/post.json', data);
      if (response.status === 200) {
        toast('Email sent successfully');
        reset();
      }
    } catch (error) {
      console.error(error);
      toast('An error occurred, please try again');
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='w-full xl:w-1/2 backdrop-opacity-10 bg-slate-800/30 shadow-indigo-600 shadow-lg flex flex-col p-4 md:p-6 gap-5 rounded-2xl'
    >
      <h2 className='text-2xl font-semibold'>Let's work together</h2>
      <label className='flex gap-2'>
        <input
          type='text'
          placeholder='Name'
          className='text-xs w-full p-2 bg-slate-700/50 border-2 border-slate-700/50 rounded-md outline-indigo-900'
          {...register('name', {
            required: 'Name is required',
            minLength: { value: 2, message: 'Name is too short' },
          })}
        />
        <input
          id='lastNameInput'
          type='text'
          placeholder='Last Name'
          className='text-xs w-full p-2 bg-slate-700/50 border-2 border-slate-700/50 rounded-md outline-indigo-900'
          {...register('lastName', {
            required: 'Last Name is required',
            minLength: { value: 2, message: 'Last Name is too short' },
          })}
        />
      </label>
      <input
        id='contactInput'
        type='text'
        placeholder='email@email.com'
        className='text-xs w-full p-2 bg-slate-700/50 border-2 border-slate-700/50 rounded-md outline-indigo-900'
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
            message: 'Invalid email',
          },
        })}
      />
      <select
        id='select'
        className='text-xs w-full p-2 bg-slate-700/50 border-2 border-slate-700/50 rounded-md outline-indigo-900'
        {...register('subject', { required: 'Subject is required' })}
      >
        <option value=''>Select...</option>
        <option value='option1' className='bg-slate-800 py-1'>
          Option 1
        </option>
        <option value='option2' className='bg-slate-800 py-1'>
          Option 2
        </option>
        <option value='option3' className='bg-slate-800 py-1'>
          Option 3
        </option>
      </select>
      <textarea
        id='message'
        placeholder='Message'
        className='text-xs w-full p-2 bg-slate-700/50 border-2 border-slate-700/50 rounded-md outline-indigo-900 resize-none'
        rows={5}
        {...register('message', {
          required: 'Message is required',
          minLength: { value: 8, message: 'Message is too short' },
        })}
      ></textarea>
      <button
        id='send-email'
        className='text-xs w-full p-2 bg-indigo-700/50 border-2 border-indigo-700/50 rounded-md'
      >
        Send Email
      </button>
    </form>
  );
};

export default Form;

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { ZodType, z } from 'zod';

export type RegisterFormData = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};
const Register = () => {
  const schema: ZodType<RegisterFormData> = z
    .object({
      username: z.string().min(2).max(30),
      email: z.string().email(),
      password: z.string().min(6).max(20),
      confirmPassword: z.string().min(6).max(20),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: 'Passwords do not match',
      path: ['confirmPassword'],
    });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterFormData>({ resolver: zodResolver(schema) });

  const onSubmit = handleSubmit((formData: RegisterFormData) => {
    console.log(formData);
    // TODO: implement login
    reset();
  });
  const handleLoginClick = () => {
    const registerModal = document.getElementById('register-modal');
    const loginModal = document.getElementById('login-modal');
    if (registerModal) {
      (registerModal as HTMLDialogElement).classList.add('hidden');
    }
    if (loginModal) {
      (loginModal as HTMLDialogElement).showModal();
    }
  };
  return (
    <div>
      <dialog id='register-modal' className='modal bg-white p-0'>
        <div className='modal-box bg-white'>
          <form method='dialog'>
            {/* if there is a button in form, it will close the modal */}
            <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
              ✕
            </button>
          </form>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8 bg-white'>
            <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
              Create an account
            </h2>
            <form
              onSubmit={onSubmit}
              className='space-y-4 md:space-y-6'
              action='#'
            >
              <div>
                <label
                  htmlFor='username'
                  className='block mb-2 text-sm font-medium text-gray-900'
                >
                  Username
                </label>
                <input
                  type='text'
                  id='username'
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 '
                  placeholder='Your name'
                  {...register('username')}
                />
                {errors.username && (
                  <span className='text-red-500'>
                    {errors.username.message}
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='block mb-2 text-sm font-medium text-gray-900'
                >
                  Your email
                </label>
                <input
                  type='email'
                  id='email'
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 '
                  placeholder='name@mail.com'
                  {...register('email')}
                />
                {errors.email && (
                  <span className='text-red-500'>{errors.email.message}</span>
                )}
              </div>
              <div>
                <label
                  htmlFor='password'
                  className='block mb-2 text-sm font-medium text-gray-900 '
                >
                  Password
                </label>
                <input
                  type='password'
                  id='password'
                  placeholder='••••••••'
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5'
                  {...register('password')}
                />
                {errors.password && (
                  <span className='text-red-500'>
                    {errors.password.message}
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor='confirm-password'
                  className='block mb-2 text-sm font-medium text-gray-900 '
                >
                  Confirm password
                </label>
                <input
                  type='password'
                  id='confirm-password'
                  placeholder='••••••••'
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5'
                  {...register('confirmPassword')}
                />
                {errors.confirmPassword && (
                  <span className='text-red-500'>
                    {errors.confirmPassword.message}
                  </span>
                )}
              </div>
              <div>
                <button
                  type='submit'
                  // TODO: add logic to disable button
                  disabled={false}
                  className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                >
                  Create an account
                </button>
              </div>
            </form>
            <p className='mt-10 text-center text-sm text-gray-500'>
              Already have an account?{' '}
              <button
                className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500 underline ml-2'
                onClick={handleLoginClick}
              >
                Login here
              </button>
            </p>
          </div>
        </div>
      </dialog>
    </div>
  );
};
export default Register;

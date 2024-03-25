import { ZodType, z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export type LoginFormData = {
  email: string;
  password: string;
};

const Login = () => {
  const schema: ZodType<LoginFormData> = z.object({
    email: z.string().email(),
    password: z.string().min(6).max(20),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormData>({ resolver: zodResolver(schema) });

  const onSubmit = handleSubmit((formData: LoginFormData) => {
    console.log(formData);
    // TODO: implement login
    reset();
  });

  const handleRegisterClick = () => {
    const registerModal = document.getElementById('register-modal');
    const loginModal = document.getElementById('login-modal');
    if (loginModal) {
      (loginModal as HTMLDialogElement).classList.add('hidden');
    }
    if (registerModal) {
      (registerModal as HTMLDialogElement).showModal();
    }
  };

  return (
    <div>
      <dialog id='login-modal' className='modal bg-white p-0'>
        <div className='modal-box bg-white'>
          <form method='dialog'>
            {/* if there is a button in form, it will close the modal */}
            <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
              ✕
            </button>
          </form>
          <div className='flex flex-col justify-center bg-white min-h-screen px-6 py-6 lg:px-8'>
            <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
              <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
                Sign in to your account
              </h2>
            </div>

            <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
              <form
                onSubmit={onSubmit}
                className='space-y-6'
                action='#'
                method='POST'
              >
                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Email address
                  </label>
                  <div className='mt-2'>
                    <input
                      type='email'
                      id='email'
                      className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 '
                      placeholder='name@mail.com'
                      {...register('email')}
                    />
                    {errors.email && (
                      <span className='text-red-500'>
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <div className='flex items-center justify-between'>
                    <label
                      htmlFor='password'
                      className='block text-sm font-medium leading-6 text-gray-900'
                    >
                      Password
                    </label>
                  </div>
                  <div className='mt-2'>
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
                </div>

                <div>
                  <button
                    type='submit'
                    // TODO: add logic to disable button
                    disabled={false}
                    className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                  >
                    Sign in
                  </button>
                </div>
              </form>

              <p className='mt-10 text-center text-sm text-gray-500'>
                Not a member?
                <button
                  onClick={handleRegisterClick}
                  className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500 underline ml-2'
                >
                  Register
                </button>
              </p>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};
export default Login;

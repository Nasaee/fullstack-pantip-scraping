import { GoSearch } from 'react-icons/go';
import { IoMenuOutline } from 'react-icons/io5';

const HeaderMobile = () => {
  const handleLoginClick = () => {
    const loginModal = document.getElementById('login-modal');
    if (loginModal) {
      (loginModal as HTMLDialogElement).showModal();
    }
  };

  const handleRegisterClick = () => {
    const registerModal = document.getElementById('register-modal');
    if (registerModal) {
      (registerModal as HTMLDialogElement).showModal();
    }
  };

  return (
    <div className='flex justify-between px-2 md:hidden '>
      <div className='px-5 py-3 relative flex-1'>
        <div className='w-7 h-7 absolute top-1/2 -translate-y-1/2 left-8'>
          <GoSearch className='w-full h-auto ' />
        </div>
        <input
          placeholder='ค้นหาบน Pantip...'
          type='text'
          className=' w-full rounded-full pl-12 pr-4 py-3 bg-white shadow-custom1'
        />
      </div>

      <div className='dropdown dropdown-end my-auto'>
        <div tabIndex={0} role='button' className='m-1'>
          <IoMenuOutline className='text-3xl hover:text-violet-600' />
        </div>
        <ul className='p-4 shadow-custom1 menu dropdown-content z-[1] rounded-box w-52 flex flex-col gap-5 bg-white'>
          <li>
            <button
              type='button'
              className='hover:text-violet-600'
              onClick={handleRegisterClick}
            >
              สมัครสมาชิก
            </button>
          </li>
          <li>
            <button
              type='button'
              className='hover:text-violet-600'
              onClick={handleLoginClick}
            >
              เข้าสู่ระบบ
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default HeaderMobile;

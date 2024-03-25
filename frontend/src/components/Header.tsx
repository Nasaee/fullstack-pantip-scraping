import { IoMdMenu } from 'react-icons/io';
import { Link, NavLink } from 'react-router-dom';
import { BsChatDots } from 'react-icons/bs';
import { PiUsersThreeLight } from 'react-icons/pi';
import { GoSearch } from 'react-icons/go';
import { useEffect, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
  const [isSearchFocus, setIsSearchFocus] = useState(false);
  const [hiddenTopNav, setHiddenTopNav] = useState(false);

  useEffect(() => {
    const announceSection = document.getElementById('announce');

    const intersectionObserverFn = function (
      entries: IntersectionObserverEntry[]
    ) {
      const [entry] = entries;

      if (!entry.isIntersecting) {
        setHiddenTopNav(true);
      } else {
        setHiddenTopNav(false);
      }
    };

    const headerObserver = new IntersectionObserver(intersectionObserverFn, {
      root: null,
      threshold: 0,
      rootMargin: `0px`,
    });

    if (announceSection) {
      headerObserver.observe(announceSection);
    }
  }, []);

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
    <header className='hidden md:flex justify-between gap-3 pt-4 pb-6'>
      <div className='flex items-center  pl-5 pr-3 self-start'>
        <Link to='/' className='font-bold text-violet-600 text-xl'>
          <p>Pantip</p>
        </Link>
      </div>
      <div className='flex-1 flex flex-col items-center gap-4'>
        <nav id='top-nav' className={hiddenTopNav ? 'hidden' : 'flex gap-4'}>
          <NavLink
            to='/post-question'
            className='flex items-center gap-2 py-3 px-4 rounded-full hover:bg-gray-200 hover:text-black transition-all'
          >
            <span>ตั้งกระทู้</span>
            <BsChatDots />
          </NavLink>
          <NavLink
            to='/community'
            className='flex items-center gap-2 py-3 px-4 rounded-full hover:bg-gray-200 hover:text-black transition-all'
          >
            <span>คอมมูนิตี้</span>
            <PiUsersThreeLight />
          </NavLink>
        </nav>
        <div className='self-stretch'>
          <div className='relative w-full lg:w-[50%] mx-auto'>
            <input
              type='text'
              placeholder='ค้นหาบน Pantip...'
              className='block shadow-custom1 focus:shadow-custom2 outline-none rounded-full text-xl p-4 pl-6 w-full mx-4 bg-white'
              onFocus={() => setIsSearchFocus(true)}
              onBlur={() => setIsSearchFocus(false)}
            />
            <button
              className='absolute top-1/2 -translate-y-1/2 -right-2 flex items-center text-white rounded-full'
              style={{ background: isSearchFocus ? '#7048e8' : 'transparent' }}
            >
              <div className='grid place-items-center w-12 h-12 rounded-full bg-violet-600'>
                <GoSearch className='md:text-xl lg:text-2xl' />
              </div>
              <span
                className={
                  isSearchFocus
                    ? 'grid place-items-center w-auto h-12 bg-violet-600 transition-all md:text-md lg:text-lg rounded-full pr-3'
                    : 'w-0 hidden transition-all'
                }
              >
                Search
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className='pr-3'>
        <div className='dropdown dropdown-end'>
          <button
            tabIndex={0}
            role='button'
            className='btn m-1 text-3xl border border-slate-300 py-2 px-3 rounded-full text-gray-500 bg-white hover:bg-white'
          >
            <IoMdMenu className='hidden lg:inline-block' />
            <FaUserCircle />
          </button>
          <ul
            tabIndex={0}
            className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 bg-transparent'
          >
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
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Header;

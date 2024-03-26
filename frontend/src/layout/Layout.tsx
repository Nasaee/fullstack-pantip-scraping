import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import HeaderMobile from '../components/HeaderMobile';
import Rooms from '../components/Rooms';
import SideBarMenu from '@/components/SideBarMenu';
import Footer from '@/components/Footer';
import Login from '@/components/Login';
import Register from '@/components/Register';

const Layout = () => {
  return (
    <div className='font-thai text-gray-500 bg-white z-50'>
      <div className='sticky top-0 left-0 right-0 bg-white z-1000'>
        <div className='border-2 border-slate-200'>
          <Header />
          <HeaderMobile />
        </div>
        <Rooms />
      </div>
      <main className='flex min-h-screen mx-auto pb-20'>
        <aside className='hidden md:block pt-5  bg-white'>
          <SideBarMenu />
        </aside>
        <div className='flex-1 border-l-2 border-slate-300'>
          <Outlet />
        </div>
        <Login />
        <Register />
      </main>
      <Footer />
    </div>
  );
};
export default Layout;

import { menu } from '@/data';
import { RootState } from '@/store/rootReducer';
import { toggleSidebar } from '@/store/ui-controls/uiControlsSlice';
import { IoMenuOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const SideBarMenu = () => {
  const dispatch = useDispatch();
  const isSideBarOpen = useSelector(
    (state: RootState) => state.uiControls.isSidebarOpen
  );
  const toggleSidebarMenu = () => {
    dispatch(toggleSidebar());
  };
  return (
    <nav className='flex flex-col gap-3'>
      <div className='flex justify-center px-4 mb-5'>
        <button
          className='grid place-items-center w-8 h-8 bg-gray-400 hover:bg-violet-500 text-white rounded-full'
          onClick={toggleSidebarMenu}
        >
          <IoMenuOutline className='text-xl' />
        </button>
      </div>

      {menu.map((item) => {
        const { id, title, path, icon: Icon } = item;
        return (
          <NavLink
            key={id}
            to={path}
            className={({ isActive, isPending }) =>
              isPending
                ? 'flex px-3 py-3 font-semibold hover:bg-violet-600 hover:text-white'
                : isActive
                ? 'flex px-3 py-3 font-semibold bg-violet-600 text-white'
                : 'flex px-3 py-3 font-semibold hover:bg-violet-600 hover:text-white'
            }
          >
            <div className='w-16 grid place-items-center'>
              <Icon className='text-2xl' />
            </div>
            {isSideBarOpen && <p className='pr-6'>{title}</p>}
          </NavLink>
        );
      })}
      <hr className='w-[90%] mx-auto mt-6' />
    </nav>
  );
};
export default SideBarMenu;

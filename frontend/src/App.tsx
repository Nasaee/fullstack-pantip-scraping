import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import PostQuestion from './pages/PostQuestion';
import Community from './pages/Community';
import PantipPick from './pages/PantipPick';
import PantipHit from './pages/PantipHit';
import Explore from './pages/Explore';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/post-question',
          element: <PostQuestion />,
        },
        {
          path: '/community',
          element: <Community />,
        },
        {
          path: '/my-feed',
          element: <Community />,
        },
        {
          path: '/pantip-pick',
          element: <PantipPick />,
        },
        {
          path: '/pantip-hit',
          element: <PantipHit />,
        },
        {
          path: '/explore',
          element: <Explore />,
        },
      ],
    },
    {
      path: '*',
      element: <Navigate to='/' />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

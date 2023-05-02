import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './layouts/Main';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';


import { loadData } from './Loader/Loader';
import ErrorPage from './components/error-page';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main/>,
      children: [
        {path: '/', element:<Home/>},
        {path: '/shop', element:<Shop/>,
          loader: async () =>{
            return (await loadData()).products
          }
        },
        {path: '/orders', element:<Orders/>,
          loader: async () =>{
            return loadData()
          }
        },
        {path: '/login', element:<Login/>},
        {path: '/signup', element:<Logout/>},

      ],
      errorElement: <ErrorPage/>
    },
  ]);
  return (
    <div className='App'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

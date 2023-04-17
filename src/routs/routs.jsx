import { createBrowserRouter } from 'react-router-dom';
import App from '../layout/App';
import Home from '../pages/Home/Home/Home';





const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])

export default router ; 
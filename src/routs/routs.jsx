import { createBrowserRouter } from 'react-router-dom';
import App from '../layout/App';
import NewsLayout from '../layout/NewsLayout';
import Category from '../pages/Home/Category/Category';
import Home from '../pages/Home/Home/Home';
import News from '../pages/News/News';





const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <Category></Category>
            },
            
        ]
    },
    {
        path: '/news',
        element: <NewsLayout></NewsLayout>,
        children:[
            {
                path: ':id',
                element:<News></News>
            }
        ]
    }
])

export default router ; 
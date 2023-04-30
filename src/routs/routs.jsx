import { Navigate, createBrowserRouter } from 'react-router-dom';
import App from '../layout/App';
import LogInLayout from '../layout/LogInLayout';
import NewsLayout from '../layout/NewsLayout';
import Category from '../pages/Home/Category/Category';
import Login from '../pages/LogIn/LogInpage';
import News from '../pages/News/News';
import Registration from '../pages/Registration/Registration';
import TermsAndConditions from '../pages/Shared/TermsAndConditions/TermsAndConditions';
import PrivateRoute from './PrivateRoute';





const router = createBrowserRouter([
    {
        path: '/',
        element: <LogInLayout></LogInLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to='/category/0'></Navigate>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Registration></Registration>
            },
            {
                path: 'terms',
                element: <TermsAndConditions></TermsAndConditions>
            }
        ]
    },
    {
        path: 'category',
        element: <App></App>,
        children: [
           
            {
                path: ':id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
            
        ]
    },
    {
        path: '/news',
        element: <NewsLayout></NewsLayout>,
        children:[
            {
                path: ':id',
                element:<PrivateRoute><News></News></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`) 
            }
        ]
    }
])

export default router ; 
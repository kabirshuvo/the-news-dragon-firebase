import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({Children}) => {
    const {user} = useContext(AuthContext);
    const location = useLocation();

        if(user){
        return Children;
    }
    return <Navigate state={{from: location}} to='/login' replace></Navigate>;
};

export default PrivateRoute;


/**
 * 1. check user is logged in or not
 * 2. if user is logged in , allow user to vist the private route.
 * 3. Else redirect the user to the login page
*/


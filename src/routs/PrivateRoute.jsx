import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({Children}) => {
    const {user} = useContext(AuthContext);
    if(user){
        return Children;
    }
    return <Navigate to='/login'></Navigate>;
};

export default PrivateRoute;


/**
 * 1. check user is logged in or not
 * 2. if user is logged in , allow user to vist the private route.
 * 3. Else redirect the user to the login page
*/


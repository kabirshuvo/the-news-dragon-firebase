import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNavBar from '../pages/Shared/TopNavBar/TopNavBar';

const LogInLayout = () => {
    return (
        <div>
            <TopNavBar></TopNavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default LogInLayout;
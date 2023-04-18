import React from 'react';
import { Button } from 'react-bootstrap';
import { FaBeer, FaFacebook, FaGithub, FaGoogle, FaTiktok, } from 'react-icons/fa';

const RightNavBar = () => {
    return (
        <div>
            <h3>Right Nav Bar <FaBeer/></h3>
        <div className='d-flex flex-column gap-4'  aria-label="LogIn">
                <Button variant="primary"><FaGoogle/> LogIn With Google</Button>
                <Button variant="secondary"> <FaGithub/> LogIn With GitHub</Button>
        </div>

        <div className='d-flex flex-column gap-2 mt-5'  aria-label="Social">
                <Button variant="primary"> <FaFacebook/> FaceBook</Button>
                <Button variant="secondary">    Twiter</Button>
                <Button variant="secondary">  <FaTiktok/> Tiktok</Button>
        </div>
        </div>
    );
};

export default RightNavBar;
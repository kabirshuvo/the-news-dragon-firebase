import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaGooglePlus, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import Qzone from '../QZone/Qzone';

const RightNavBar = () => {
    return (
    <div>
            <h3>LogIn With</h3>
        <div className='d-flex flex-column gap-4'  aria-label="LogIn">
                <Button variant="primary"><FaGoogle/> LogIn With Google</Button>
                <Button variant="secondary"> <FaGithub/> LogIn With GitHub</Button>
        </div>
        <div>
            <h3 className='mt-5'>Follow Us On</h3>
            <ListGroup>
                    <ListGroup.Item> <FaFacebook></FaFacebook> FaceBook</ListGroup.Item>
                    <ListGroup.Item> <FaLinkedinIn></FaLinkedinIn> Linked-In</ListGroup.Item>
                    <ListGroup.Item> <FaTwitter></FaTwitter> Twiter</ListGroup.Item>
                    <ListGroup.Item> <FaInstagram></FaInstagram> InstaGrame</ListGroup.Item>
                    <ListGroup.Item> <FaGooglePlus></FaGooglePlus> GooglePlus</ListGroup.Item>
            </ListGroup>
        </div>

       <h3 className='mt-5'> The Q Zone Section</h3>

        <Qzone></Qzone>

    </div>
    );
};

export default RightNavBar;
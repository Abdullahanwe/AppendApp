import React, { useState, useEffect } from 'react';
import Style from './Footer.module.css';
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <section className={`${Style['bg-foot']} pb-16`}>
                <div className='container  mx-auto grid grid-cols-12 row-span-1 pt-10 px-6  gap-4'>
                    <div className='md:col-span-5 col-span-12'>
                        <h2 className='text-3xl font-bold'>Append</h2>
                        <p className='py-5'>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
                        <div className={`flex gap-3 ${Style['icon-foot']}`}>
                            <span><FaXTwitter /></span>
                            <span><FaFacebook /></span>
                            <span><FaInstagram /></span>
                            <span><FaLinkedin /></span>
                        </div>
                    </div>
                    <div className='md:col-span-2 col-span-6'>
                        <h2 className='text-xl font-medium'>Useful Links</h2>
                        <div className={`${Style['style-p-foot']}`}>
                            <p>Home</p>
                            <p>About us</p>
                            <p>Services</p>
                            <p>Terms of service</p>
                            <p>Privacy policy</p>
                        </div>
                    </div>
                    <div className='md:col-span-2 col-span-6'>
                        <h2 className='text-xl font-medium'>Our Services</h2>
                        <div className={`${Style['style-p-foot']}`}>
                            <p>Web Design</p>
                            <p>Web Development</p>
                            <p>Product Management</p>
                            <p>Marketing</p>
                            <p>Graphic Design</p>
                        </div>
                    </div>
                    <div className='md:col-span-3 col-span-12'>
                        <h2 className='text-xl font-medium'>Contact Us</h2>
                        <div className={`${Style['style-p-foot']}`}>
                            <p>A108 Adam Street</p>
                            <p>New York, NY 535022</p>
                            <p>United States</p>
                            <p> <span className='font-medium'>Phone:</span>  +1 5589 55488 55</p>
                            <p> <span className='font-medium'>Email:</span>  info@example.com</p>
                        </div>
                    </div>
                </div>
                <div className={`container mx-auto mt-5 py-4 ${Style['bg-sub-foot']}`}>
                    <div className='text-center'>
                        <p>© Copyrights <span className='font-medium'>Append</span>  All Rights Reserved</p>
                        <p>Designed by BootstrapMade</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Footer;

import React from 'react';
import Style from './Contact.module.css'
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";


const Contact = () => {
    return (
        <>
            <section className='container mx-auto mt-20 mb-14'>
                <div className="title text-center">
                    <h2 className={`${Style['title-services']} text-3xl font-bold font-sans`}>Contact</h2>
                    <p className='text-gray-500 p-5'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                </div>

                <div className='grid md:grid-cols-2 gap-3 py-9' data-aos="fade-up">
                    <div className='grid md:grid-cols-2 gap-3'>
                        <div className={`${Style['bg-cont-contact']}`}>
                            <CiLocationOn className={`${Style['icon-contact']}`}/>
                            <h2 className='text-xl font-medium py-2'>Address</h2>
                            <p>A108 Adam Street</p>
                            <p>New York, NY 535022</p>
                        </div>
                        <div className={`${Style['bg-cont-contact']}`}>
                            <IoCallOutline className={`${Style['icon-contact']}`}/>
                            <h2 className='text2xl font-medium py-2'>Call Us</h2>
                            <p>+1 5589 55488 55</p>
                            <p>+1 6678 254445 41</p>
                        </div>
                        <div className={`${Style['bg-cont-contact']}`}>
                            <MdOutlineMail className={`${Style['icon-contact']}`}/>
                            <h2 className='text-xl font-medium py-2'>Email Us</h2>
                            <p>info@example.com</p>
                            <p>contact@example.com</p>
                        </div>
                        <div className={`${Style['bg-cont-contact']}`}>
                            <FaRegClock className={`${Style['icon-contact']}`}/>
                            <h2 className='text-xl font-medium py-2'>Open Hours</h2>
                            <p>Monday - Friday</p>
                            <p>9:00AM - 05:00PM</p>
                        </div>
                    </div>
                    <div className={`${Style['bg-form']} text-center`}>
                        <form action="">
                            <div className='grid md:grid-cols-2 gap-2'>
                                <input type="text" placeholder='Your Name' className='p-2 border-2 border-slate-400 rounded focus:border-orange-800 outline-none'/>
                                <input type="email" placeholder='Your Email' className='p-2 border-2 border-slate-400 rounded focus:border-orange-800 outline-none' />
                            </div>
                            <div className='grid md:grid-cols-1 my-3'>
                            <input type="text" placeholder='Subject' className='p-2 border-2 border-slate-400 rounded focus:border-orange-800 outline-none'/>
                            </div>
                            <div className=' grid md grid-cols-1'>
                                <textarea placeholder='Message' maxRows={9} className='p-2 border-2 border-slate-400 rounded focus:border-orange-800 outline-none'></textarea>
                            </div>
                            <button className={`${Style['btn']}`}>Send Message</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;

import React from 'react';
import Style from './Services.module.css'
import { PiBriefcaseLight } from "react-icons/pi";
import { BsBarChart } from "react-icons/bs";
import { IoSunnyOutline } from "react-icons/io5";
import { BsCardChecklist } from "react-icons/bs";
import { BsBinocularsFill } from "react-icons/bs";
import { BsFillCalendar3WeekFill } from "react-icons/bs";


const Services = () => {
    return <>
        <section className='container mx-auto mt-20 mb-14'>
            
            <div className="title text-center">
                <h2 className={`${Style['title-services']} text-3xl font-bold font-sans`}>Services page</h2>
                <p className='text-gray-500 p-5'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>
            <div className="container mx-auto grid  sm:grid-cols-2 gap-8 mt-14 mb-14 p-6">
                <div className={`${Style['icon-serves']}`}  data-aos="fade-up">
                <hr />
                    <PiBriefcaseLight className='text-6xl'/>
                    <h3 className='text-2xl'>Lorem Ipsum</h3>
                    <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                </div>
                <div  className={`${Style['icon-serves']}`}  data-aos="fade-up">
                <hr />
                <IoSunnyOutline className='text-6xl'/>
                    <h3 className='text-2xl'>Nemo Enim</h3>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                </div>
                <div  className={`${Style['icon-serves']}`}  data-aos="fade-up">
                <hr />
                <BsBarChart className='text-6xl'/>
                    <h3 className='text-2xl'>Sed ut perspiciatis</h3>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                </div>
                <div  className={`${Style['icon-serves']}`}  data-aos="fade-up">
                <hr />
                <BsCardChecklist className='text-6xl'/>
                    <h3 className='text-2xl'>Dolor Sitema</h3>
                    <p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                </div>
                <div  className={`${Style['icon-serves']}`}  data-aos="fade-up">
                <hr />
                <BsBinocularsFill className='text-6xl'/>
                    <h3 className='text-2xl'>Magni Dorores</h3>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
                <div  className={`${Style['icon-serves']}`}  data-aos="fade-up">
                <hr />
                <BsFillCalendar3WeekFill className='text-6xl pt-1'/>
                <h3 className='text-2xl'>Eiusmod Tempor</h3>
                    <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
                </div>
            </div>
        </section>
    </>
}

export default Services;

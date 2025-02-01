import React, { useEffect, useState } from 'react';
import style from './About.module.css'
import { GoArrowRight } from "react-icons/go";
import { useLocation } from 'react-router-dom';
import { FiActivity } from "react-icons/fi";
import { FiCommand } from "react-icons/fi";
import { FiTrendingUp } from "react-icons/fi";
import { BsBuildings } from "react-icons/bs";
import Aos from 'aos';
import 'aos/dist/aos.css'
const Counter = ({ end, delay, time }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = Math.ceil(end / (time / delay));
        const interval = setInterval(() => {
            start += increment;
            if (start >= end) {
                start = end;
                clearInterval(interval);
            }
            setCount(start);
        }, delay);

        return () => clearInterval(interval);
    }, [end, delay, time]);

    return <span>{count}</span>;
};
const About = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === '/home') {

        }
    })
    return < >
        <section className={` ${style['bg-section']}  mx-auto  sm:text-xl p-5 ${location.pathname === '/about' ? 'min-h-screen  mx-auto flex justify-center items-center' : ' flex justify-center items-center '}`}>
            <div className={`${style['mt-sm']} grid lg:grid-cols-2 gap-2 sm:mt-14 sm:mb-14 sm:grid-cols-1`}>
                <div className='container  p-5 ' data-aos="fade-up">
                    <h3 className={`${style['bg-about']} ${style['text-color']} text-lg font-medium inline-block p-2 rounded-md`}>
                        About Us
                    </h3>
                    <h2 className={`${style['bg-section']} mt-3 font-bold text-2xl leading-10 `}>Ducimus rerum libero reprehenderit cumque</h2>
                    <p className='mt-5 mb-5'>Ipsa sint sit. Quis ducimus tempore dolores impedit et dolor cumque alias maxime. Enim reiciendis minus et rerum hic non. Dicta quas cum quia maiores iure. Quidem nulla qui assumenda incidunt voluptatem tempora deleniti soluta.</p>
                    <button className={`${style['buttom-read']} rounded-lg flex items-center`}>Read More  <span className='pl-1'><GoArrowRight /></span> </button>
                </div>

                <div className='grid lg:grid-cols-2 gap-10 md:grid-cols-2 sm:grid-cols-1' data-aos="fade-up">
                    <div className='grid gap-5 mt-5'>
                        <div className={`${style['icon-box']}`}>
                            <BsBuildings />
                            <h2 className='text-2xl font-medium '>Eius provident</h2>
                            <p>Magni repellendus vel ullam hic officia accusantium ipsa dolor omnis dolor voluptatem</p>
                        </div>
                        <div className={`${style['icon-box']} mt-3`}>
                            <FiActivity />
                            <h2>Rerum aperiam</h2>
                            <p>Autem saepe animi et aut aspernatur culpa facere. Rerum saepe rerum voluptates quia</p>
                        </div>
                    </div>
                    <div className='grid gap-5 mb-5'>
                        <div className={`${style['icon-box']}`}>
                            <FiCommand />
                            <h2>Veniam omnis</h2>
                            <p>Omnis perferendis molestias culpa sed. Recusandae quas possimus. Quod consequatur corrupti</p>
                        </div>
                        <div className={`${style['icon-box']}`}>
                            <FiTrendingUp />
                            <h2>Delares sapiente</h2>
                            <p>Sint et dolor voluptas minus possimus nostrum. Reiciendis commodi eligendi omnis quideme lorenda</p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
        <section className={`${style['bg-section2']}`}>
            <div className="container mx-auto p-4 text-center grid sm:grid-cols-4 justify-around items-center " data-aos="fade-up">
                <p className="text-white text-4xl ">
                    <Counter end={232} delay={10} time={1000} />
                    <br />
                    <p className='text-sm'>Client</p>
                </p>
                <p className="text-white text-4xl ">
                    <Counter end={521} delay={10} time={1000} />
                    <br />
                    <p className='text-sm'>Projects</p>
                </p>
                <p className="text-white text-4xl ">
                    <Counter end={1453} delay={10} time={1000} />
                    <br />
                    <p className='text-sm'>Hours Of Support</p>
                </p>
                <p className="text-white text-4xl ">
                    <Counter end={32} delay={10} time={1000} />
                    <br />
                    <p className='text-sm'>Workers</p>
                </p>
            </div>
        </section>


    </>
}

export default About;

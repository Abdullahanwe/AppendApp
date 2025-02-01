import React from 'react';
import Navbar from '../Navbar/Navbar'
import About from '../About/About'
import style from './Home.module.css'
import Services from '../Services/Services'
import Protofolio from '../Portfolio/Portfolio'
import Price from '../Price/Price'
import Team from '../Team/Team';
import img1 from './../../img/client-1.png'
import img2 from './../../img/client-2.png'
import img3 from './../../img/client-3.png'
import img4 from './../../img/client-4.png'
import img5 from './../../img/client-6.png'
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';

const Home = () => {


    return (
        <>
            <div className={style['bg-home']}>
                <div className=" text-white flex   items-start flex-col justify-center min-h-screen ">
                    <div className="container mx-auto p-4">
                        <h2 className='sm:text-3xl lg:text-5xl font-semibold 'data-aos="fade-up" data-aos-duration="1000" >Welcome to Our Website</h2>
                        <p className='py-4 md:text-xl text-xs' data-aos="fade-up" data-aos-duration="2000">We are team of talented designers making websites with Bootstrap</p>
                        <div className=' p-2  relative lg:w-2/5 md:w-2/6 sm:w-2/6' data-aos="fade-up" data-aos-duration="2000">
                            <input type="email" placeholder='Enter Your email ...' className='focus:outline-none w-full p-3 rounded text-black ' />
                            <button type='submit' className={style['btn']} >Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid  " data-aos="fade-up">
                <div className="container gap-4 cursor-pointer justify-items-center mx-auto grid  md:grid-cols-5 sm:grid-cols-3 sm:justify-items-center lg:justify-around pt-10 pb-10">
                    <img src={img1} alt="img1" className='w-20 opacity-35 hover:opacity-100 transition-all' />
                    <img src={img2} alt="img2" className='w-20 opacity-35 hover:opacity-100 transition-all' />
                    <img src={img3} alt="img3" className='w-20 opacity-35 hover:opacity-100 transition-all' />
                    <img src={img4} alt="img4" className='w-20 opacity-35 hover:opacity-100 transition-all' />
                    <img src={img5} alt="img5" className='w-20 opacity-35 hover:opacity-100 transition-all' />
                </div>
            </div>
            <About />
            <Services/>
            <Protofolio/>
            <Price/>
            <Team/>
            <Blog/>
            <Contact/>
        </>
    );
}

export default Home;

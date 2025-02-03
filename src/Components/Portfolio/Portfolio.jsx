import React, { useState } from 'react';
import Style from './Protofolio.module.css'
import img1 from '../../img/features-light-2 (1).jpg'
import img2 from '../../img/features-light-1 (1).jpg'
import img3 from '../../img/features-light-3 (1).jpg'
import imgS1 from '../../img/masonry-portfolio-1 (1).jpg'
import imgS2 from '../../img/masonry-portfolio-2 (1).jpg'
import imgS3 from '../../img/masonry-portfolio-3 (1).jpg'
import imgS4 from '../../img/masonry-portfolio-4 (1).jpg'
import imgS5 from '../../img/masonry-portfolio-5 (1).jpg'
import imgS6 from '../../img/masonry-portfolio-6 (1).jpg'
import imgS7 from '../../img/masonry-portfolio-7 (1).jpg'
import imgS8 from '../../img/masonry-portfolio-8 (1).jpg'
import imgS9 from '../../img/masonry-portfolio-9 (1).jpg'
import { FaCheck } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { CiLink } from "react-icons/ci";



const Portfolio = () => {

    const tabs = [
        { id: 'all', label: 'All', content: 'All Content' },
        { id: 'brand', label: 'Brand', content: 'Brand Content' },
        { id: 'design', label: 'Design', content: 'Design Content' },
        { id: 'graphic', label: 'Graphic', content: 'Graphic Content' },
    ];

    const portfolioItems = [
        { id: 1, category: 'all', img: imgS1, Name: 'product1' },
        { id: 2, category: 'all', img: imgS6, Name: 'product6' },
        { id: 3, category: 'all', img: imgS2, Name: 'product2' },
        { id: 4, category: 'all', img: imgS5, Name: 'product5' },
        { id: 5, category: 'all', img: imgS8, Name: 'product8' },
        { id: 6, category: 'all', img: imgS3, Name: 'product3' },
        { id: 7, category: 'all', img: imgS4, Name: 'product4' },
        { id: 8, category: 'all', img: imgS7, Name: 'product7' },
        { id: 9, category: 'all', img: imgS9, Name: 'product9' },
    ];

    const brandIds = [1, 7, 8];
    const designIds = [3, 4, 9];
    const graphicIds = [6, 2, 5];

    const [activeTab, setActiveTab] = useState('all');

    return (
        <>
            <div className="container mx-auto mt-20 mb-14">
                <div className="title text-center">
                    <h2 className={`${Style['title-services']} text-3xl font-bold font-sans`}>Features</h2>
                    <p className='text-gray-500 p-5'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                </div>
                <div className={`${Style['sm']} md:flex md:p-4`}>
                    <div className=" " data-aos="fade-right">
                        <h3 className='text-2xl p-2 font-bold'>Corporis temporibus maiores provident</h3>
                        <p className='text-gray-600 p-2'>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                        <button className={`${Style['btn']}`}>Get Started</button>
                    </div>
                    <div className={`${Style['static-img']} grid sm:grid-cols-1 sm:grid-rows-1 `} data-aos="fade-left" >
                        <img src={img1} alt="img1" className={`${Style['static-back']} `} />
                        <img src={img2} alt="img2" className={`${Style['static-front']}`} />
                    </div>
                </div>
            </div>
            <div className={`${Style['sm2']} container mx-auto mt-20 mb-14 flex gap-6`}>
                <div className={`${Style['static-im']} grid sm:grid-cols-1 sm:grid-rows-1 p-4 `} data-aos="fade-right">
                    <img src={img3} alt="img1" className={`${Style['img3']} `} />
                </div>
                <div className={`${Style['sm']} md:flex md:p-4`}>
                    <div className=" " data-aos="fade-left">
                        <h3 className='text-2xl p-2 font-bold'>Sunt consequatur ad ut est nulla</h3>
                        <p className='text-gray-600 p-2'>Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque.</p>
                        <p className='text-gray-600 p-2 flex'>
                            <FaCheck className='text-red-400 me-1' />Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p className='text-gray-600 p-2 flex'>
                            <FaCheck className='text-red-400 me-1' />
                            Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                        <p className='text-gray-600 p-2 flex'>
                            <FaCheck className='text-red-400 me-1' />
                            Facilis ut et voluptatem aperiam. Autem soluta ad fugiat</p>
                        <button className={`${Style['btn']}`}>Get Started</button>
                    </div>
                </div>
            </div>
            {/*  */}
            <div className="container mx-auto text-center py-10">
                <div className="title text-center">
                    <h2 className={`${Style['title-services']} text-3xl font-bold font-sans`}>Portfolio</h2>
                    <p className='text-gray-500 p-5'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                </div>
                <ul className="flex justify-center space-x-4 mb-8">
                    {tabs.map((tab) => (
                        <li key={tab.id}>
                            <button
                                className={`px-4 py-2 font-semibold ${activeTab === tab.id ? 'text-white bg-black' : 'text-black'
                                    } rounded`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.label}
                            </button>
                        </li>
                    ))}
                </ul>

                <div className={` sm:columns-2  lg:columns-3 py-10 px-4 sm:py-20 gap-4 gap-y-3  ${activeTab !== 'all'} `}
                    
                >
                    {portfolioItems
                        .filter((item) => {
                            if (activeTab === 'all') return true;
                            if (activeTab === 'brand' && brandIds.includes(item.id)) return true;
                            if (activeTab === 'design' && designIds.includes(item.id)) return true;
                            if (activeTab === 'graphic' && graphicIds.includes(item.id)) return true;
                            return false;
                        })
                        .map((item) => (
                            <div key={item.id} className={`bg-white  shadow-lg break-inside-avoid mb-4 relative rounded-lg ${Style['card-proto']} overflow-hidden`}
                                data-aos="fade-up"

                            >
                                <img
                                    src={item.img}
                                    alt={`portfolio${item.id}`}
                                    className="w-full rounded-lg  cursor-pointer"
                                />
                                <div className={`${Style['content-card']}  p-3`}>
                                    <div>
                                        <h2 className="text-lg font-semibold text-start mb-2">{item.Name}</h2>
                                        <p>Lorem, ipsum dolor.</p>
                                    </div>
                                    <div className="flex justify-center text-2xl font-medium space-x-4">
                                        <CiCirclePlus />
                                        <CiLink />
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </>
    );
}

export default Portfolio;

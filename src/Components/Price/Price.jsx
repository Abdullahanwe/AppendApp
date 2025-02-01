import React, { useState } from 'react';
import Style from './Price.module.css'
import { FiBox } from "react-icons/fi";
import { FaCheck } from "react-icons/fa";
import { BiX } from "react-icons/bi";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";

const FAQItem = ({ qustion, answr ,count}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (<>
            <div className=' border-2 p-2 rounded-lg shadow  '>
                <div className='  '>
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className={`ml-2 p-1 w-full flex justify-between items-center content-start ${ !isExpanded? " ": "text-red-700"} `}
                    >
                    <p className={`${Style['pric-item']}`}> <span>{count}</span> {qustion}</p>
                        {isExpanded ? <FaChevronDown /> : <FaChevronRight />}
                    </button>
                </div>
                <div
                    className={`overflow-hidden transition-all duration-300 ${isExpanded ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
                        }`}
                >
                    <p className="text-gray-600">
                        {answr}
                    </p>
                </div>
            </div>

        </>
    )

}
const Price = () => {

    const faqData = [
        {
            count:1,
            qustion: "Non consectetur a erat nam at lectus urna duis?",
            answr: "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non."
        },
        {
            count:2,
            qustion: "Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?",
            answr: "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui."
        },
        {
            count:3,
            qustion: "Dolor sit amet consectetur adipiscing elit pellentesque?",
            answr: "Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis"
        },
        {
            count:4,
            qustion: "Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?",
            answr: "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui."
        },
        {
            count:5,
            qustion: "Tempus quam pellentesque nec nam aliquam sem et tortor consequat?",
            answr: "Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in"
        },
    ];
    return (
        <>
            <section className='container mx-auto mt-20 mb-14 '>
                <div className="title text-center">
                    <h2 className={`${Style['title-services']} text-4xl font-bold font-sans`}>Pricing</h2>
                    <p className='text-gray-500 p-5'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                </div>
                <div className={`container mx-auto grid md:grid-cols-3 sm:grid-cols-1 text-center pt-24 pb-24 ps-16 pe-16 ${Style['parent-card']}`}>
                    <div className='p-2'>
                        <div className='shadow-lg rounded-xl py-10 px-4 space-y-3 '>
                            <div className='flex flex-col items-center'>
                                <h3 className='text-2xl font-bold'>Free Plan</h3>
                                <div className={`${Style['parent-svg']} relative p-4 mt-4 mb-4`}>
                                    <FiBox className={`${Style['svg-box']}  z-50`} />
                                </div>
                                <p className={`text-3xl ${Style['color-mont']}`}><span><sup>$</sup>0</span> / month</p>
                            </div>
                            <div className='text-center pt-6 pb-6 leading-8 '>
                                <p className='flex '><FaCheck className='mx-2 text-green-600' /> Quam adipiscing vitae proin</p>
                                <p className='flex '><FaCheck className='mx-2 text-green-600' /> Nec feugiat nisl pretium</p>
                                <p className='flex '><FaCheck className='mx-2 text-green-600' /> Nulla at volutpat diam uteera</p>
                                <p className={`flex ${Style['color-mont']}`}><BiX className='mx-2 text-2xl' /> <del> Nulla at volutpat diam uteera</del></p>
                                <p className={`flex ${Style['color-mont']}`}><BiX className='mx-2 text-2xl' /> <del> Nulla at volutpat diam uteera</del></p>
                            </div>
                            <div>
                                <button className={`${Style['btn']}`}>Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className='p-3 scale-110 z-10 ' >
                        <div className='shadow-lg rounded-xl py-10  px-4 space-y-3  border-red-700 border-2'>
                            <div className='flex flex-col items-center'>
                                <h3 className='text-2xl font-bold'>Business Plan</h3>
                                <div className={`${Style['parent-svg']} relative p-4 mt-4 mb-4`}>
                                    <FiBox className={`${Style['svg-box']} z-50`} />
                                </div>
                                <p className={`text-3xl ${Style['color-mont']}`}><span><sup>$</sup>29</span> / month</p>
                            </div>

                            <div className='text-center pt-6 pb-6 leading-8'>
                                <p className='flex '><FaCheck className='mx-2 text-green-600' /> Quam adipiscing vitae proin</p>
                                <p className='flex'><FaCheck className='mx-2 text-green-600' /> Nec feugiat nisl pretium</p>
                                <p className='flex'><FaCheck className='mx-2 text-green-600' /> Nulla at volutpat diam uteera</p>
                                <p className='flex'><FaCheck className='mx-2 text-green-600' /> Nulla at volutpat diam uteera</p>
                                <p className='flex'><FaCheck className='mx-2 text-green-600' /> Nulla at volutpat diam uteera</p>
                            </div>
                            <div>
                                <button className={`${Style['btn']}`}>Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className='p-2' >
                        <div className='shadow-lg rounded-xl py-10 px-4 space-y-3'>
                            <div className='flex flex-col items-center'>
                                <h3 className='text-2xl font-bold'>Developer Plan</h3>
                                <div className={`${Style['parent-svg']} relative p-4 mt-4 mb-4`}>
                                    <FiBox className={`${Style['svg-box']} z-50`} />
                                </div>
                                <p className={`text-3xl ${Style['color-mont']}`} ><span><sup>$</sup>49</span>  / month</p>
                            </div>
                            <div className='text-center pt-6 pb-6 leading-8'>
                                <p className='flex'><FaCheck className='mx-2 text-green-600' /> Quam adipiscing vitae proin</p>
                                <p className='flex'><FaCheck className='mx-2 text-green-600' /> Nec feugiat nisl pretium</p>
                                <p className='flex'><FaCheck className='mx-2 text-green-600' /> Nulla at volutpat diam uteera</p>
                                <p className='flex'><FaCheck className='mx-2 text-green-600' /> Nulla at volutpat diam uteera</p>
                                <p className='flex'><FaCheck className='mx-2 text-green-600' /> Nulla at volutpat diam uteera</p>
                            </div>
                            <div>
                                <button className={`${Style['btn']}`}>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container mx-auto flex md:flex-row flex-col  px-8 gap-3 '>
                    <div className='' >

                        <h2 className='text-4xl '>Frequently Asked <span className='font-bold'>Questions</span></h2>
                        <p className='text-gray-600 fa-stack mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit</p>
                    </div>
                    <div className='flex flex-col gap-3' >
                        {faqData.map((faq, index) => (
                            <FAQItem key={index} count={faq.count} qustion={faq.qustion} answr={faq.answr} />
                        ))}
                    </div>
                </div>
            </section>

        </>
    );
}

export default Price;

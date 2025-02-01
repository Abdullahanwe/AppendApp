import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import style from './Navebar.module.css'
import { FiAlignJustify } from "react-icons/fi";

const Navbar = () => {

    const location = useLocation();
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isStic, setStic] = useState(false);
    useEffect(() => {

        const handleScroll = () => {
            if (location.pathname === '/about' || location.pathname === '/services' || location.pathname === '/portfolio' || location.pathname === '/team' || location.pathname === '/blog' || location.pathname === '/contact' || location.pathname === '/price') {
                setStic(true);
                return;
            }
            setStic(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [location.pathname])




    return (
        <>
            <nav
                className={` fixed top-0 left-0 right-0 z-50 flex justify-between items-center lg:px-5 lg:py-3  capitalize  ${isStic ? 'bg-gray-100 text-black shadow-md' : 'bg-transparent text-white'} `}
            >
                <Link to='' className='text-2xl font-semibold flex items-center'>Append <span className=' items-start text-red-700 text-5xl font-bold '>.</span></Link>
                <button className='text-3xl lg:hidden ' onClick={()=> setMenuOpen(!isMenuOpen)}>
                    <FiAlignJustify />

                </button>
                <ul
                    className={`flex flex-col lg:flex-row lg:gap-5 lg:items-center absolute lg:static top-16 left-0 right-0 ps-9   bg-gray-100  lg:bg-transparent  ${isMenuOpen ? 'block text-black' : 'hidden lg:flex'} `}
                >
                    <li><Link to="">Home</Link></li>
                    <li><Link to="about">About</Link></li>
                    <li><Link to="services">Services</Link></li>
                    <li><Link to="portfolio">Portfolio</Link></li>
                    <li><Link to="price">Price</Link></li>
                    <li><Link to="team">Team</Link></li>
                    <li><Link to="blog">Blog</Link></li>
                    <li><Link to="contact">Contact</Link></li>
                </ul>

            </nav>
        </>
    );
}
// const Navbar = () => {
//     const location = useLocation(); // للحصول على الصفحة الحالية
//     const [isStic, setStic] = useState(false);

//     useEffect(() => {
//         if (location.pathname === '/about') {
//             // إذا كنت في صفحة About، لا نضيف مستمع للتمرير
//             setStic(true);
//             return;
//         }

//         const handleScroll = () => {
//             setStic(window.scrollY > 0);
//         };

//         window.addEventListener('scroll', handleScroll);

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, [location.pathname]);

//     return (
//         <>
//             <nav
//                 className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-5 py-3 capitalize transition-all duration-300 ease-in-out ${location.pathname === '/about'
//                         ? 'bg-white text-black shadow-md'
//                         : isStic
//                             ? 'bg-gray-100 text-black shadow-md'
//                             : 'bg-transparent text-white'
//                     }`}
//             >
//                 <Link
//                     to="/"
//                     className="text-2xl font-semibold flex items-center transition-colors duration-300 ease-in-out"
//                 >
//                     Append
//                     <span className="items-start text-red-700 text-5xl font-bold">.</span>
//                 </Link>
//                 <ul className="flex justify-around gap-5">
//                     <li>
//                         <Link
//                             to="/"
//                             className="hover:text-red-700 transition-colors duration-300 ease-in-out"
//                         >
//                             Home
//                         </Link>
//                     </li>
//                     <li>
//                         <Link
//                             to="/about"
//                             className="hover:text-red-700 transition-colors duration-300 ease-in-out"
//                         >
//                             About
//                         </Link>
//                     </li>
//                     <li>
//                         <Link
//                             to="/services"
//                             className="hover:text-red-700 transition-colors duration-300 ease-in-out"
//                         >
//                             Services
//                         </Link>
//                     </li>
//                     <li>
//                         <Link
//                             to="/portfolio"
//                             className="hover:text-red-700 transition-colors duration-300 ease-in-out"
//                         >
//                             Portfolio
//                         </Link>
//                     </li>
//                     <li>
//                         <Link
//                             to="/team"
//                             className="hover:text-red-700 transition-colors duration-300 ease-in-out"
//                         >
//                             Team
//                         </Link>
//                     </li>
//                     <li>
//                         <Link
//                             to="/blog"
//                             className="hover:text-red-700 transition-colors duration-300 ease-in-out"
//                         >
//                             Blog
//                         </Link>
//                     </li>
//                     <li>
//                         <Link
//                             to="/contact"
//                             className="hover:text-red-700 transition-colors duration-300 ease-in-out"
//                         >
//                             Contact
//                         </Link>
//                     </li>
//                 </ul>
//             </nav>
//         </>
//     );
// };


export default Navbar;


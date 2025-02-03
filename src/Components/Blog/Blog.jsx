import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Style from './Blog.module.css'
import img1 from '../../img/testimonials-1 (1).jpg';
import img2 from '../../img/testimonials-2 (1).jpg';
import img3 from '../../img/testimonials-3 (1).jpg';
import img4 from '../../img/testimonials-4 (1).jpg';
import img5 from '../../img/testimonials-5 (1).jpg';
import { RiStarSFill } from "react-icons/ri";
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import blog1 from '../../img/blog-1.jpg';
import blog2 from '../../img/blog-2.jpg';
import blog3 from '../../img/blog-3.jpg';
import blog4 from '../../img/blog-author.jpg';
import blog5 from '../../img/blog-author-2.jpg';
import blog6 from '../../img/blog-author-3.jpg';

const Blog = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dotsClass: "slick-dots custom-dots",

    };
    return (
        <>
            <section className='bg-white-400'>
                <div className='container mx-auto mt-20 mb-14'>
                    <div className="title text-center">
                        <h2 className={`${Style['title-services']} text-4xl font-bold font-sans`}>Blog</h2>
                        <p className='text-gray-500 p-5'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                    </div>
                    <div className='flex flex-col md:flex-row py-10 '>
                        <div className='md:w-1/3 w-full flex px-2  md:flex-col'>
                            <div  data-aos="fade-up">
                                <h2 className='text-3xl font-bold my-3'>Testimonials</h2>
                                <p >Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>

                            </div>
                        </div>
                        <div className='md:w-2/3 w-full h-auto px-8 bg-slate-100 rounded-lg shadow-lg ' data-aos="fade-down">
                            <Slider {...settings}>
                                <div className='p-4'>
                                    <div className='flex items-center'>
                                        <img src={img1} className='rounded-full w-28' alt="" />
                                        <div className='px-3'>
                                            <h2>Saul Goodman</h2>
                                            <p>Ceo & Founder</p>
                                            <span className='flex text-yellow-400 gap-1'><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /></span>
                                        </div>
                                    </div>
                                    <p>
                                        <q className=''>
                                            Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                        </q>
                                    </p>
                                </div>
                                <div className='p-4'>
                                    <div className='flex items-center'>
                                        <img src={img2} className='rounded-full w-28' alt="" />
                                        <div className='px-3'>
                                            <h2>Saul Goodman</h2>
                                            <p>Ceo & Founder</p>
                                            <span className='flex text-yellow-400 gap-1'><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /></span>
                                        </div>
                                    </div>
                                    <p>
                                        <q>
                                            Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                                        </q>
                                    </p>
                                </div>
                                <div className='p-4'>
                                    <div className='flex items-center'>
                                        <img src={img3} className='rounded-full w-28' alt="" />
                                        <div className='px-3'>
                                            <h2>Saul Goodman</h2>
                                            <p>Ceo & Founder</p>
                                            <span className='flex text-yellow-400 gap-1'><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /></span>
                                        </div>
                                    </div>
                                    <p>
                                        <q>  Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                                        </q>

                                    </p>
                                </div>
                                <div className='p-4'>
                                    <div className='flex items-center'>
                                        <img src={img4} className='rounded-full w-28' alt="" />
                                        <div className='px-3'>
                                            <h2>Saul Goodman</h2>
                                            <p>Ceo & Founder</p>
                                            <span className='flex text-yellow-400 gap-1'><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /></span>
                                        </div>
                                    </div>
                                    <p>
                                        <q>
                                            Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                                        </q>
                                    </p>
                                </div>
                                <div className='p-4'>
                                    <div className='flex items-center'>
                                        <img src={img5} className='rounded-full w-28' alt="" />
                                        <div className='px-3'>
                                            <h2>Saul Goodman</h2>
                                            <p>Ceo & Founder</p>
                                            <span className='flex text-yellow-400 gap-1'><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /></span>
                                        </div>
                                    </div>
                                    <p>
                                        <q>
                                            Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                                        </q>
                                    </p>
                                </div>


                            </Slider>
                        </div>
                    </div>
                </div>

            </section>
            <section className='container mx-auto'>
                <div className="title text-center">
                    <h2 className={`${Style['title-services']} text-3xl font-bold font-sans`}>Recent Posts</h2>
                    <p className='text-gray-500 p-5'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                </div>
                <div className='grid md:grid-cols-3 gap-3' >
                    <Card variant="outlined" sx={{  }} data-aos="fade-right">
                        <CardOverflow>
                            <AspectRatio ratio="2">
                                <img src={blog1} alt="" />
                            </AspectRatio>
                        </CardOverflow>
                        <CardContent>
                            <Typography level="body-sm">Politics</Typography>
                            <Typography level="title-md">Dolorum optio tempore voluptas dignissimos</Typography>
                        </CardContent>
                        <CardOverflow variant="soft" sx={{ bgcolor: 'white' }}>
                            <CardContent orientation="horizontal">
                                <Typography
                                    level="body-xs"
                                    textColor="text.secondary"
                                    sx={{ fontWeight: 'md' }}
                                >
                                    <img src={blog4} alt="" className='rounded-full w-10' />
                                </Typography>
                                <Typography
                                    level="body-xs"
                                    textColor="text.secondary"
                                    sx={{ fontWeight: 'md' }}
                                >
                                    <p className={`${Style['styl-p-card']}`}>
                                        Maria Doe
                                    </p>
                                    <p className='text-gray-500'>Jan 1, 2022</p>
                                </Typography>
                            </CardContent>
                        </CardOverflow>
                    </Card>
                    <Card variant="outlined" data-aos="fade-up" >
                        <CardOverflow>
                            <AspectRatio ratio="2">
                                <img src={blog2} alt="" />
                            </AspectRatio>
                        </CardOverflow>
                        <CardContent>
                            <Typography level="body-sm">Sports</Typography>
                            <Typography level="title-md">Nisi magni odit consequatur autem nulla dolorem</Typography>
                        </CardContent>
                        <CardOverflow variant="soft" sx={{ bgcolor: 'white' }}>
                            {/* <Divider inset="context" /> */}
                            <CardContent orientation="horizontal">
                                <Typography
                                    level="body-xs"
                                    textColor="text.secondary"
                                    sx={{
                                        fontWeight: 'md',
                                    }}
                                >
                                    <img src={blog5} alt="" className='rounded-full w-10' />
                                </Typography>
                                {/* <Divider orientation="vertical" /> */}
                                <Typography
                                    level="body-xs"
                                    textColor="text.econdary"
                                    sx={{
                                        fontWeight: 'md',
                                    }}
                                >
                                    <p className={`${Style['styl-p-card']}`}> Allisa Mayer</p>
                                    <p className='text-gray-500'>Jun 5, 2022</p>
                                </Typography>
                            </CardContent>
                        </CardOverflow>
                    </Card>
                    <Card variant="outlined" data-aos="fade-left"  >
                        <CardOverflow>
                            <AspectRatio ratio="2">
                                <img src={blog3} alt="" />

                            </AspectRatio>
                        </CardOverflow>
                        <CardContent>
                            <Typography level="body-sm">Entertainment</Typography>
                            <Typography level="title-md">Possimus soluta ut id suscipit ea ut in quo quia et soluta</Typography>
                        </CardContent>
                        <CardOverflow variant="soft" sx={{ bgcolor: 'white' }}>
                            <CardContent orientation="horizontal">
                                <Typography
                                    level="body-xs"
                                    textColor="text.secondary"
                                    sx={{ fontWeight: 'md' }}
                                >
                                    <img src={blog6} alt="" className='rounded-full w-10' />
                                </Typography>
                                <Typography
                                    level="body-xs"
                                    textColor="text.secondary"
                                    sx={{ fontWeight: 'md' }}
                                >
                                    <h2 className={`${Style['styl-p-card']}`}>Mark Dower </h2>
                                    <p className='text-gray-500'>Jun 22, 2022</p>
                                </Typography>
                            </CardContent>
                        </CardOverflow>
                    </Card>
                </div>
            </section>
        </>
    );
}

export default Blog;

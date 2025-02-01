import React from 'react';
import Style from '../Team/Team.module.css'
import img1 from '../../img/team-1 (1).jpg'
import img2 from '../../img/team-2 (1).jpg'
import img3 from '../../img/team-3 (1).jpg'
import img4 from '../../img//team-4 (1).jpg'
import img5 from '../../img/team-5 (1).jpg'
import img6 from '../../img/team-6 (1).jpg'
import { CiFacebook } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Data = ({ img, name, job, infrmation }) => {

    return (<>
        <div className={`p-6 text-center ${Style['parent-team']}`}>

            <div className='relative '>
                <img src={img} alt={name} className={`${Style['team-img']}`} />
                <div className={`${Style['lear-img']}`}></div>
                <div className={`${Style['icon-team']} `}> 
                <CiFacebook />
                <FaLinkedin />
                <FaInstagram />
                <FaXTwitter />
                </div>
            </div>
            <div > 
                <h2 className='text-xl font-medium '>{name}</h2>
                <h3 className={`${Style['font-p-team']}`}>{job}</h3>
                <p>{infrmation}</p>
            </div>

        </div>
    </>
    )
}
const Team = () => {
    const teamData = [
        {
            img: img1,
            name: "Walter White",
            job: "Chief Executive Officer",
            infrmation: "liquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum distinctio dire flow",
        },
        {
            img: img2,
            name: "Sarah Jhonson",
            job: "Product Manager",
            infrmation: "Labore ipsam sit consequatur exercitationem rerum laboriosam laudantium aut quod dolores exercitationem ut",
        },
        {
            img: img3,
            name: "William Anderson",
            job: "CTO",
            infrmation: "Illum minima ea autem doloremque ipsum quidem quas aspernatur modi ut praesentium vel tque sed facilis at qui",
        },
        {
            img: img4,
            name: "Amanda Jepson",
            job: "Accountant",
            infrmation: "Magni voluptatem accusamus assumenda cum nisi aut qui dolorem voluptate sed et veniam quasi quam consectetur",
        },
        {
            img: img5,
            name: "Brian Doe",
            job: "Marketing",
            infrmation: "Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velit",
        },
        {
            img: img6,
            name: "Josepha Palas",
            job: "Operation",
            infrmation: "Sint sint eveniet explicabo amet consequatur nesciunt error enim rerum earum et omnis fugit eligendi cupiditate vel",
        },
    ]
    return (
        <>
            <section className='container mx-auto mt-20 mb-14'>
                <div className="title text-center">
                    <h2 className={`${Style['title-services']} text-4xl font-bold font-sans`}>Team</h2>
                    <p className='text-gray-500 p-5'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                </div>
                <div className='grid  md:grid-cols-3 sm:grid-cols-2 gap-3 ' data-aos="fade-down">
                    {teamData.map((data, index) => (
                        <Data key={index} img={data.img} name={data.name} job={data.job} infrmation={data.infrmation} />
                    ))}

                </div>
            </section>
                <div className={`${Style['bg-sec2-team']}`}>
                    <div className='container mx-auto text-center py-32'>
                        <h2 className='text-3xl font-bold'>Call To Action</h2>
                        <p className='font-medium py-6'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <button className={`${Style['btn']}`}>Call To Action</button>
                    </div>
                </div>
        </>
    );
}

export default Team;

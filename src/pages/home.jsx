import { React, useState } from 'react'
import "../styles/home.css";
import { FaAngleRight } from "react-icons/fa";
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom";
import Sidebar from './navebar';


const home = (() => {

    const [animateOut, setAnimateOut] = useState(false);
    const navigate = useNavigate();
    const handleClick = () => {
        setAnimateOut(true);
        setTimeout(() => {
            navigate("/Page2");
        }, 1000);
    };

    return (
        <div className='main-box'>
            <div className='nav-side'>
            <Sidebar />
            </div>

            <div className='main-box-right'>
                <motion.h5
                    initial={{ opacity: 1 }}
                    animate={animateOut ? { opacity: 0 } : {}}
                    transition={{ duration: 1 }}
                >Vikas Jangid</motion.h5>
                <motion.h3
                    initial={{ opacity: 1 }}
                    animate={animateOut ? { opacity: 0 } : {}}
                    transition={{ duration: 1 }}>Hello there! I'm Vikas, a passionate
                    [Web Developer/Graphic Designer/UI-UX Enthusiast],
                    breathing life into ideas through the magic of design
                    and technology.</motion.h3>

                <div className='btn-1'>
                    <button type='button' onClick={handleClick}><FaAngleRight className='btn-content' /></button>
                </div>
            </div>
            <div className='main-box-left'>
                <motion.img src="/images/Saly-16.png" className='h-imge' alt=""
                    initial={{ scale: 1, x: 0, opacity: 1 }}
                    animate={animateOut ? { scale: 2, x: -500, opacity: 0 } : {}}
                    transition={{ duration: 1 }}
                />
            </div>

        </div>
    )
})

export default home
import { React, useState } from 'react'
import "../styles/page7.css";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom";
import Sidebar from './navebar';

const page7 = (() => {

    const [animateOut, setAnimateOut] = useState(false);
    const navigate = useNavigate();
    const handleClick = () => {
        setAnimateOut(true);
        setTimeout(() => {
            navigate("/Page6");
        }, 1000);
    };


    const nextClick = () => {
        setAnimateOut(true);
        setTimeout(() => {
            navigate("/Page8");
        }, 1000);
    };

    return (
        <div className='page7_box'>
            <div className='nav-side'>
                <Sidebar />
            </div>
            <div className="page7_box-2">
                <motion.button className="page7_box-2-btn-1"
                    aria-label="Previous Page"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: animateOut ? 0 : 1 }}
                    transition={{ duration: 0.5 }} onClick={handleClick}>
                    <FaAngleLeft className='btn-content' />
                </motion.button>
                <motion.h5
                    initial={{ y: -50, opacity: 0 }}
                    animate={{
                        y: 0,
                        opacity: animateOut ? 0 : 1
                    }}
                    transition={{ duration: 1 }}>
                    Let’s Connect
                </motion.h5>
                <motion.button className="page7_box-2-btn-2" aria-label="Next Page" initial={{ opacity: 0 }}
                    animate={{ opacity: animateOut ? 0 : 1 }}
                    transition={{ duration: 0.5 }} onClick={nextClick} ><FaAngleRight className='btn-content' /></motion.button>
            </div>
            <motion.div className='page7_content-page2'
                animate={{ opacity: animateOut ? 0 : 1 }}
                transition={{ duration: 1 }}>
                <h5>Contact Me</h5>
                <h3>Ready to start a creative journey together?</h3>
                <h3>Drop me a mail at <a href="mailto:vikasjangid3353@gmail.com">vikasjangid3353@gmail.com</a></h3>
            </motion.div>

            <div className="page7_tool_box">
                <div className='icn_1'> <a href="https://www.linkedin.com/in/vikas-jangid-014a34281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile"><img src="/images/Ellipse 54.png" alt="LinkedIn" width="65" height="65"/></a></div>
                <div className='icn_2'> <a href="https://github.com/vikas3352" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile"><img src="/images/Ellipse 58.png" alt="GitHub" width="65" height="65" /></a></div>
            </div>

        </div>
    )
})

export default page7
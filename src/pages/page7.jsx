import { React, useState } from 'react'
import "../styles/page7.css";
import { FaAngleRight, FaAngleLeft, FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion"
import { useNavigate } from "react-router-dom";
import Sidebar from './navebar';
const page5 = (() => {

    const [animateOut, setAnimateOut] = useState(false);
    const [collectionOut, setcollectionOut] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
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
                    initial={{ opacity: 0 }}
                    animate={{ opacity: animateOut ? 0 : 1 }}
                    transition={{ duration: 0.5 }} onClick={handleClick}>
                    <FaAngleLeft className='btn-content' />
                </motion.button>
                <motion.h5
                    initial={{ y: -100, opacity: 1 }}
                    animate={{
                        y: 268,
                        opacity: animateOut ? 0 : 1
                    }}
                    transition={{ duration: 1.5 }}>
                    Let’s Connect
                </motion.h5>
                <motion.button className="page7_box-2-btn-2" initial={{ opacity: 0 }}
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
                <div className='icn_1'><img src="/images/Ellipse 54.png" alt="" /></div>
                <div className='icn_2'><img src="/images/Ellipse 58.png" alt="" /></div>
                    

                    
            </div>

        </div>
    )
})

export default page5
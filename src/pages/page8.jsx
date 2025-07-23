import { React, useState } from 'react'
import "../styles/page8.css";
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
            navigate("/Page7");
        }, 1000);
    };

    return (
        <div className='page8_box'>
            <div className='nav-side'>
                <Sidebar />
            </div>
            <div className="page8_box-2">
                <motion.button className="page8_box-2-btn-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: animateOut ? 0 : 1 }}
                    transition={{ duration: 0.5 }} onClick={handleClick}>
                    <FaAngleLeft className='btn-content' />
                </motion.button>
                <motion.h5
                    initial={{ y: -100, opacity: 1 }}
                    animate={{
                        y: 288,
                        opacity: animateOut ? 0 : 1
                    }}
                    transition={{ duration: 1.5 }}>
                    Let's Create Something Amazing!                </motion.h5>
            </div>

            <div className="page8_tool_box">
                    <p>Embark on a visual journey with me. Whether you're looking for stunning designs or cutting-edge web solutions, I'm here to bring your ideas to life. Let's build something extraordinary together!</p>
            </div>

        </div>
    )
})

export default page5
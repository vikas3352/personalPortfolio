import { React, useState } from 'react'
import "../styles/page8.css";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom";
import Sidebar from './navebar';

const page8 = (() => {

    const [animateOut, setAnimateOut] = useState(false);
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
                    Let's Create Something Amazing!
                </motion.h5>
            </div>
            <div className="page8_contant">
                <div className="page8_tool_box">
                    <p>Embark on a visual journey with me. Whether you're looking for stunning designs or cutting-edge web solutions, I'm here to bring your ideas to life. Let's build something extraordinary together!</p>
                </div>
            </div>

        </div>
    )
})

export default page8
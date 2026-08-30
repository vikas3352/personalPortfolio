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
                    Have a Project in Mind?
                </motion.h5>
            </div>
            <div className="page8_contant">
                <div className="page8_tool_box">
                    <p>Whether you need a business website, e-commerce platform, booking system, custom web application, API, or AI-powered solution, I can help turn your idea into a reliable digital product. Based in Alwar, Rajasthan, I work with businesses and clients across Rajasthan and India.</p>
                </div>
            </div>

        </div>
    )
})

export default page8
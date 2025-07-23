import { React, useState } from 'react'
import "../styles/page6.css";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
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
            navigate("/Page5");
        }, 1000);
    };


    const nextClick = () => {
        setAnimateOut(true);
        setTimeout(() => {
            navigate("/Page7");
        }, 1000);
    };

    return (
        <div className='page6_box'>
            <div className='nav-side'>
                <Sidebar />
            </div>
            <div className="page6_box-2">
                <motion.button className="page6_box-2-btn-1"
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
                    My Toolbox
                </motion.h5>
                <motion.button className="page6_box-2-btn-2" initial={{ opacity: 0 }}
                    animate={{ opacity: animateOut ? 0 : 1 }}
                    transition={{ duration: 0.5 }} onClick={nextClick} ><FaAngleRight className='btn-content' /></motion.button>
            </div>
            <motion.div className='page6_content-page2'
                animate={{ opacity: animateOut ? 0 : 1 }}
                transition={{ duration: 1 }}>
                <h5>Development Stack</h5>
            </motion.div>

            <div className="page6_tool_box">
                <div className="page6_tool_box_1">
                    <div className='page6_up'>
                        <div className='page6_up_1'><img src="/images/backend.jpeg" alt="" /></div>
                        <div className='page6_up_2'>Node.js, Express.js, MongoDB And Python</div>
                    </div>
                    <div className='page6_down'> <h3>Fueling the backend magic.</h3></div>
                </div>
                <div className="page6_tool_box_2">
                    <div className='page6_up2'>
                        <div className='page6_up2_1'><img src="/images/Ellipse 57.png" alt="" /></div>
                        <div className='page6_up2_2'>React.js, HTML5, CSS, JavaScript, Tailwind CSS</div>
                    </div>
                    <div className='page6_down2'> <h3>Crafting pixel-perfect frontend
                        experiences.
                    </h3></div>

                </div>
            </div>

        </div>
    )
})

export default page5
import { React, useState } from 'react'
import "../styles/page5.css";
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
            navigate("/Page4");
        }, 1000);
    };


    const nextClick = () => {
        setAnimateOut(true);
        setTimeout(() => {
            navigate("/Page6");
        }, 1000);
    };

    return (
        <div className='page5_box'>
            <div className='nav-side'>
                <Sidebar />
            </div>
            <div className="page5_box-2">
                <motion.button className="page5_box-2-btn-1"
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
                <motion.button className="page5_box-2-btn-2" initial={{ opacity: 0 }}
                    animate={{ opacity: animateOut ? 0 : 1 }}
                    transition={{ duration: 0.5 }} onClick={nextClick} ><FaAngleRight className='btn-content' /></motion.button>
            </div>
            <motion.div className='page5_content-page2'
                animate={{ opacity: animateOut ? 0 : 1 }}
                transition={{ duration: 1 }}>
                <h5>Design Tools</h5>
            </motion.div>

            <div className="tool_box">
                <div className="tool_box_1">
                    <div className='up'>
                        <div className='up_1'><img src="/images/Ellipse 56.png" alt="" /></div>
                        <div className='up_2'>Figma</div>
                    </div>
                    <div className='down'> <h3>Where ideas come to life collaboratively.</h3></div>
                </div>
                <div className="tool_box_2">
                    <div className='up2'>
                        <div className='up2_1'><img src="/images/Ellipse 56.png" alt="" /></div>
                        <div className='up2_2'>Adobe Creative Suite</div>
                    </div>
                    <div className='down2'> <h3>Harnessing the power of Photoshop
                        and Illustrator.
                    </h3></div>

                </div>
            </div>

        </div>
    )
})

export default page5
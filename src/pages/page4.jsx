import { React, useState } from 'react'
import "../styles/page4.css";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { IoAddOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { AnimatePresence, motion } from "framer-motion"
import { useNavigate } from "react-router-dom";
import Sidebar from './navebar';

const page2 = (() => {

    const [animateOut, setAnimateOut] = useState(false);
    const [collectionOut, setcollectionOut] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();
    const handleClick = () => {
        setAnimateOut(true);
        setTimeout(() => {
            navigate("/Page3");
        }, 1000);
    };


    const nextClick = () => {
        setAnimateOut(true);
        setTimeout(() => {
            navigate("/Page5");
        }, 1000);
    };

    const handleCollection = () => {
        setcollectionOut(prev => !prev);
    };

    return (
        <div className='page4_box'>
            <div className='nav-side'>
                <Sidebar />
            </div>
            <div className="page4_box-2">
                <motion.button className="page4_box-2-btn-1"
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
                    Animations
                </motion.h5>
                <motion.button className="page4_box-2-btn-2" initial={{ opacity: 0 }}
                    animate={{ opacity: animateOut ? 0 : 1 }}
                    transition={{ duration: 0.5 }} onClick={nextClick} ><FaAngleRight className='btn-content' /></motion.button>
            </div>
            <motion.div className='page3_content-page2'
                animate={{ opacity: animateOut ? 0 : 1 }}
                transition={{ duration: 1 }}>
                <h5>2D Animation Wonders</h5>
                <h3>Step into a world of animated tales and captivating motion graphics.</h3>
            </motion.div>

            <div className="page4_btn-3">
                <motion.button onClick={handleCollection}
                    initial={{ marginLeft: 704, marginTop: 120, opacity: 1 }}
                    animate={{
                        marginLeft: collectionOut ? 600 : 704, marginTop: collectionOut ? 0 : 120,
                        opacity: collectionOut ? 0 : 1
                    }}
                    transition={{ duration: 0.5 }}>
                    <IoAddOutline className='fi_btn' />
                </motion.button>

                <motion.button onClick={handleCollection}
                    initial={{ marginLeft: 808, marginTop: 240, opacity: 0 }}
                    animate={{
                        marginLeft: collectionOut ? 704 : 808, marginTop: collectionOut ? 120 : 240,
                        opacity: collectionOut ? 1 : 0
                    }}
                    transition={{ duration: 0.5 }}>
                    <RxCross2 className='fi_btn' />
                </motion.button>
                <div className="media">
                    <motion.div className="media1"
                        animate={{
                            marginLeft: collectionOut ? 238 : 119, marginTop: collectionOut ? 64 : 122,
                        }}
                        transition={{ duration: 0.5 }}
                        
                    ><img src="images/Ellipse be.png" alt="" /></motion.div>
                    <motion.div className="media2"
                        animate={{
                            marginLeft: collectionOut ? 0 : 119, marginTop: collectionOut ? 64 : 122,
                        }}
                        transition={{ duration: 0.5 }}
                    ><img src="images/Ellipse i.png" alt="" /></motion.div>
                    <motion.div className="media3"
                        animate={{
                            marginLeft: collectionOut ? 119 : 119, marginTop: collectionOut ? 0 : 122,
                        }}
                        transition={{ duration: 0.5 }}
                    ><img src="images/Ellipse y.png" alt="" /></motion.div>
                    <motion.div className="media4"
                        animate={{
                            marginLeft: collectionOut ? 32 : 119, marginTop: collectionOut ? 213 : 122,
                        }}
                        transition={{ duration: 0.5 }}
                    ><img src="images/Ellipse net.png" alt="" /></motion.div>
                    <motion.div className="media5"
                        animate={{
                            marginLeft: collectionOut ? 206 : 119, marginTop: collectionOut ? 213 : 122,
                        }}
                        transition={{ duration: 0.5 }}
                    ><img src="images/Ellipse f.png" alt="" /></motion.div>
                </div>
            </div>
        </div>
    )
})

export default page2
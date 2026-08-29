import { React, useState, useEffect } from 'react'
import "../styles/page4.css";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { IoAddOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { AnimatePresence, motion } from "framer-motion"
import { useNavigate } from "react-router-dom";
import Sidebar from './navebar';

const page4 = (() => {

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

    function useWindowSize() {
        const [width, setWidth] = useState(window.innerWidth);
        useEffect(() => {
            const handleResize = () => setWidth(window.innerWidth);
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }, []);
        return width;
    }
    const width = useWindowSize();
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
                    Animations
                </motion.h5>

                <motion.button className="page4_box-2-btn-2" aria-label="Next Page" initial={{ opacity: 0 }}
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
                    aria-label="Expand Animation Bubbles"
                    initial={{ marginLeft: 0, marginTop: 0, opacity: 1 }}
                    animate={{
                        marginLeft: collectionOut ? -150 : 0, marginTop: collectionOut ? -150 : 0,
                        opacity: collectionOut ? 0 : 1
                    }}
                    transition={{ duration: 0.5 }}>
                    <IoAddOutline className='fi_btn' />
                </motion.button>

                <motion.button onClick={handleCollection}
                    aria-label="Close Animation Bubbles"
                    initial={{ marginLeft: 150, marginTop: 150, opacity: 0 }}
                    animate={{
                        marginLeft: collectionOut ? 0 : 150, marginTop: collectionOut ? 0 : 150,
                        opacity: collectionOut ? 1 : 0
                    }}
                    transition={{ duration: 0.5 }}>
                    <RxCross2 className='fi_btn' />
                </motion.button>

                {width <= 768 && width > 480 && (<div className="media">
                    <motion.div className="media1"
                        animate={{
                            marginLeft: collectionOut ? 238 : 119, marginTop: collectionOut ? 64 : 122,
                            opacity: collectionOut ? 1 : 0, scale: collectionOut ? 1 : 0
                        }}
                        transition={{ duration: 0.5 }}

                    ><img src="/images/Ellipse be.png" alt="Behance Animation" width="85" height="85" /></motion.div>
                    <motion.div className="media2"
                        animate={{
                            marginLeft: collectionOut ? 0 : 119, marginTop: collectionOut ? 64 : 122,
                            opacity: collectionOut ? 1 : 0, scale: collectionOut ? 1 : 0
                        }}
                        transition={{ duration: 0.5 }}
                    ><img src="/images/Ellipse i.png" alt="Instagram Animation" width="85" height="85" /></motion.div>
                    <motion.div className="media3"
                        animate={{
                            marginLeft: collectionOut ? 119 : 119, marginTop: collectionOut ? 0 : 122,
                            opacity: collectionOut ? 1 : 0, scale: collectionOut ? 1 : 0
                        }}
                        transition={{ duration: 0.5 }}
                    ><img src="/images/Ellipse y.png" alt="YouTube Animation" width="85" height="85" /></motion.div>
                    <motion.div className="media4"
                        animate={{
                            marginLeft: collectionOut ? 32 : 119, marginTop: collectionOut ? 213 : 122,
                            opacity: collectionOut ? 1 : 0, scale: collectionOut ? 1 : 0
                        }}
                        transition={{ duration: 0.5 }}
                    ><img src="/images/Ellipse net.png" alt="Dribbble Animation" width="85" height="85" /></motion.div>
                    <motion.div className="media5"
                        animate={{
                            marginLeft: collectionOut ? 206 : 119, marginTop: collectionOut ? 213 : 122,
                            opacity: collectionOut ? 1 : 0, scale: collectionOut ? 1 : 0
                        }}
                        transition={{ duration: 0.5 }}
                    ><img src="/images/Ellipse f.png" alt="Facebook Animation" width="85" height="85" /></motion.div>
                </div>)}

                {width < 480 && (<div className="media">
                    <motion.div className="media1"
                        animate={{
                            marginLeft: collectionOut ? 238 : 130, marginTop: collectionOut ? 64 : 132,
                            opacity: collectionOut ? 1 : 0, scale: collectionOut ? 1 : 0
                        }}
                        transition={{ duration: 0.5 }}

                    ><img src="/images/Ellipse be.png" alt="Behance Animation" width="85" height="85" /></motion.div>
                    <motion.div className="media2"
                        animate={{
                            marginLeft: collectionOut ? 0 : 130, marginTop: collectionOut ? 64 : 132,
                            opacity: collectionOut ? 1 : 0, scale: collectionOut ? 1 : 0
                        }}
                        transition={{ duration: 0.5 }}
                    ><img src="/images/Ellipse i.png" alt="Instagram Animation" width="85" height="85" /></motion.div>
                    <motion.div className="media3"
                        animate={{
                            marginLeft: collectionOut ? 119 : 130, marginTop: collectionOut ? 0 : 132,
                            opacity: collectionOut ? 1 : 0, scale: collectionOut ? 1 : 0
                        }}
                        transition={{ duration: 0.5 }}
                    ><img src="/images/Ellipse y.png" alt="YouTube Animation" width="85" height="85" /></motion.div>
                    <motion.div className="media4"
                        animate={{
                            marginLeft: collectionOut ? 32 : 130, marginTop: collectionOut ? 213 : 132,
                            opacity: collectionOut ? 1 : 0, scale: collectionOut ? 1 : 0
                        }}
                        transition={{ duration: 0.5 }}
                    ><img src="/images/Ellipse net.png" alt="Dribbble Animation" width="85" height="85" /></motion.div>
                    <motion.div className="media5"
                        animate={{
                            marginLeft: collectionOut ? 206 : 130, marginTop: collectionOut ? 213 : 132,
                            opacity: collectionOut ? 1 : 0, scale: collectionOut ? 1 : 0
                        }}
                        transition={{ duration: 0.5 }}
                    ><img src="/images/Ellipse f.png" alt="Facebook Animation" width="85" height="85" /></motion.div>
                </div>)}

                {width > 768 && (
                    <div className="media">
                        <motion.div className="media1"
                            animate={{
                                marginLeft: collectionOut ? 238 : 119, marginTop: collectionOut ? 64 : 122,
                                opacity: collectionOut ? 1 : 0, scale: collectionOut ? 1 : 0
                            }}
                            transition={{ duration: 0.5 }}

                        ><img src="/images/Ellipse be.png" alt="Behance Animation" width="85" height="85" /></motion.div>
                        <motion.div className="media2"
                            animate={{
                                marginLeft: collectionOut ? 0 : 119, marginTop: collectionOut ? 64 : 122,
                                opacity: collectionOut ? 1 : 0, scale: collectionOut ? 1 : 0
                            }}
                            transition={{ duration: 0.5 }}
                        ><img src="/images/Ellipse i.png" alt="Instagram Animation" width="85" height="85" /></motion.div>
                        <motion.div className="media3"
                            animate={{
                                marginLeft: collectionOut ? 119 : 119, marginTop: collectionOut ? 0 : 122,
                                opacity: collectionOut ? 1 : 0, scale: collectionOut ? 1 : 0
                            }}
                            transition={{ duration: 0.5 }}
                        ><img src="/images/Ellipse y.png" alt="YouTube Animation" width="85" height="85" /></motion.div>
                        <motion.div className="media4"
                            animate={{
                                marginLeft: collectionOut ? 32 : 119, marginTop: collectionOut ? 213 : 122,
                                opacity: collectionOut ? 1 : 0, scale: collectionOut ? 1 : 0
                            }}
                            transition={{ duration: 0.5 }}
                        ><img src="/images/Ellipse net.png" alt="Dribbble Animation" width="85" height="85" /></motion.div>
                        <motion.div className="media5"
                            animate={{
                                marginLeft: collectionOut ? 206 : 119, marginTop: collectionOut ? 213 : 122,
                                opacity: collectionOut ? 1 : 0, scale: collectionOut ? 1 : 0
                            }}
                            transition={{ duration: 0.5 }}
                        ><img src="/images/Ellipse f.png" alt="Facebook Animation" width="85" height="85" /></motion.div>
                    </div>
                )}
            </div>
        </div>
    )
})

export default page4
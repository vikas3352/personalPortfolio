import { React, useState ,useEffect} from 'react'
import "../styles/page3.css";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { FiZap } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion"
import { useNavigate } from "react-router-dom";
import Sidebar from './navebar';

const page2 = (() => {

    const [animateOut, setAnimateOut] = useState(false);
    const [collectionOut, setcollectionOut] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [videoPopup, setVideoPopup] = useState({ visible: false, src: null });
    const navigate = useNavigate();
    const handleClick = () => {
        setAnimateOut(true);
        setTimeout(() => {
            navigate("/Page2");
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
            navigate("/Page4");
        }, 1000);
    };
    const handleCollection = () => {
        setcollectionOut(prev => !prev);
        // setTimeout(() => {
        //   navigate("/Page2");
        // }, 1000);
    };

    const handleVideoPlay = (src) => {
        setVideoPopup({ visible: true, src });
    };

    const closePopup = () => {
        setVideoPopup({ visible: false, src: null });
    };

    return (
        <div className='page3_box'>
            <div className='nav-side'>
                <Sidebar />
            </div>
            <div className="page3_box-2">
                <motion.button className="page3_box-2-btn-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: animateOut ? 0 : 1 }}
                    transition={{ duration: 0.5 }} onClick={handleClick}>
                    <FaAngleLeft className='btn-content' />
                </motion.button>

        { width <= 768 && width > 480 &&(
                            <motion.h5
                    initial={{ y: -100, opacity: 1 }}
                    animate={{
                        y: "5em",
                        opacity: animateOut ? 0 : 1
                    }}
                    transition={{ duration: 1.5 }}
                >Frontend Devloper</motion.h5>
        )}
{width < 480 && (
                    <motion.h5
                    initial={{ y: -100, opacity: 1 }}
                    animate={{
                        y: "5.3em",
                        opacity: animateOut ? 0 : 1
                    }}
                    transition={{ duration: 1.5 }}
                >Frontend Devloper</motion.h5>
)}

{width > 768 && (
                <motion.h5
                    initial={{ y: -100, opacity: 1 }}
                    animate={{
                        y: "5em",
                        opacity: animateOut ? 0 : 1
                    }}
                    transition={{ duration: 1.5 }}
                >Frontend Devloper</motion.h5>
                )}

                <motion.button className="page3_box-2-btn-2" initial={{ opacity: 0 }}
                    animate={{ opacity: animateOut ? 0 : 1 }}
                    transition={{ duration: 0.5 }} onClick={nextClick} ><FaAngleRight className='btn-content' /></motion.button>

            </div>

            <motion.div className='page3_content-page2'
                animate={{ opacity: animateOut ? 0 : 1 }}
                transition={{ duration: 1 }}

            >
                <h5>Captivating UI-UX Designe</h5>
                <h3>Explore a collection of UI-UX Designes.</h3>
            </motion.div>

            <div className="page3_btn-3"
            >
                <motion.div className="collection_p"
                    initial={{ marginLeft: 104, marginTop: 500 }}
                    animate={{
                        width: collectionOut ? "auto" : 0, height: collectionOut ? 233 : 0, marginLeft: collectionOut ? 0 : 104, marginTop: collectionOut ? 5 : 500,
                        // opacity: collectionOut ? 1 : 0
                    }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="collection_1"><img src="images/nike_image.png" alt="" /><button className='play-btn-1' onClick={(e) => { e.stopPropagation(); handleVideoPlay('/videos/nike_video.mp4'); }}>▶</button></div>
                    <div className="collection_2"><img src="images/Screenshot 2025-07-22 at 4.25.44 PM.png" alt="" /><button className='play-btn-2' onClick={(e) => { e.stopPropagation(); handleVideoPlay('/videos/login_video.mov'); }}>▶</button></div>
                    <div className="collection_3"><img src="images/Screenshot 2025-07-21 at 1.36.59 PM.png" alt="" /><button className='play-btn-3' onClick={(e) => { e.stopPropagation(); handleVideoPlay('/videos/cal_video.mov'); }}>▶</button></div>
                </motion.div>

                <button className="main-btn-page3"onClick={handleCollection}><img src="/images/Subtract-2.png" alt="" className='page3_fi_btn' /></button>
            </div>
            {videoPopup.visible && (
                <div className="video-popup">
                    <div className="popup-content">
                        <button className="close-btn" onClick={closePopup}>X</button>
                        <video width="100%" height="auto" controls autoPlay>
                            <source src={videoPopup.src} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            )}

        </div>
    )
})

export default page2
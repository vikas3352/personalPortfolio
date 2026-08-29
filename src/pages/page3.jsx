import { React, useState ,useEffect} from 'react'
import "../styles/page3.css";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { FiZap } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion"
import { useNavigate } from "react-router-dom";
import Sidebar from './navebar';

const page3 = (() => {

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
                    transition={{ duration: 1 }}
                >Web Development</motion.h5>

                <motion.button className="page3_box-2-btn-2" aria-label="Next Page" initial={{ opacity: 0 }}
                    animate={{ opacity: animateOut ? 0 : 1 }}
                    transition={{ duration: 0.5 }} onClick={nextClick} ><FaAngleRight className='btn-content' /></motion.button>

            </div>

            <motion.div className='page3_content-page2'
                animate={{ opacity: animateOut ? 0 : 1 }}
                transition={{ duration: 1 }}
            >
                <h5>Front-end Marvels</h5>
                <h3>Experience seamless user interfaces created with cutting-edge technologies.</h3>
            </motion.div>

            <div className="page3_btn-3">
                {!collectionOut && (
                    <motion.div className="click-indicator"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}>
                        <div className="arrow-wrapper">
                            <div className="arrow-stem"></div>
                            <div className="arrow-head">↓</div>
                        </div>
                        <span className="click-text">Click the button</span>
                    </motion.div>
                )}

                <motion.div className="collection_p"
                    initial={{ opacity: 0 }}
                    animate={{
                        width: collectionOut ? "90%" : "0%", height: collectionOut ? "auto" : 0,
                        opacity: collectionOut ? 1 : 0
                    }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="collection_1"><img src="/images/nike_image.png" alt="Nike Clone Project" width="360" height="270" /><button className='play-btn-1' aria-label="Play Nike Clone Video" onClick={(e) => { e.stopPropagation(); handleVideoPlay('/videos/nike_video.mp4'); }}>▶</button></div>
                    <div className="collection_2"><img src="/images/hospital.jpg" alt="Hospital Management Project" width="360" height="270" /><button className='play-btn-2' aria-label="Play Hospital Video" onClick={(e) => { e.stopPropagation(); handleVideoPlay('/videos/login_video.mov'); }}>▶</button></div>
                    <div className="collection_3"><img src="/images/student__erp.png" alt="Student ERP Project" width="360" height="270" /><button className='play-btn-3' aria-label="Play Student ERP Video" onClick={(e) => { e.stopPropagation(); handleVideoPlay('/videos/cal_video.mov'); }}>▶</button></div>
                </motion.div>

                <button className="main-btn-page3" aria-label="Expand project collection" onClick={handleCollection}><img src="/images/Subtract-2.png" alt="Lightning Icon" width="85" height="85" className='page3_fi_btn' /></button>
            </div>
            {videoPopup.visible && (
                <div className="video-popup">
                    <div className="popup-content">
                        <button className="close-btn" aria-label="Close Video" onClick={closePopup}>X</button>
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

export default page3
import { React, useState } from 'react'
import "../styles/page2.css";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion"
import { useNavigate } from "react-router-dom";
import Sidebar from './navebar';

const page2 = (() => {

  const [animateOut, setAnimateOut] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [videoPopup, setVideoPopup] = useState({ visible: false, src: null });
  const navigate = useNavigate();

  const handleClick = () => {
    setAnimateOut(true);
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  const btn2Click = () => {
    setAnimateOut(true);
    setTimeout(() => {
      navigate("/Page3");
    }, 1000);
  };

  const handleCollectionClick = (clickedIndex) => {
    if (clickedIndex === 0) return; // Already front

    const newItems = [...items];
    const clickedItem = newItems.splice(clickedIndex, 1)[0];
    newItems.unshift(clickedItem); // Bring clicked image to front
    setItems(newItems);
    setActiveIndex(0);
  };

  const handleVideoPlay = (src) => {
    setVideoPopup({ visible: true, src });
  };

  const closePopup = () => {
    setVideoPopup({ visible: false, src: null });
  };

  const [items, setItems] = useState([
    { src: '/images/Screenshot 2025-07-17 at 12.01.50 AM.png', video: '/videos/video1.mp4' },
    { src: '/images/hospital.jpg', video: '/videos/video2.mp4' },
    { src: '/images/Screenshot 2025-07-21 at 2.15.04 PM.png', video: '/videos/video3.mp4' },
    { src: '/images/student__erp.png', video: '/videos/video4.mp4' },
  ]);

  return (
    <div className='box'>
      <div className='nav-side'>
        <Sidebar />
      </div>

      <div className="box-2">
        <motion.button className="box-2-btn-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          onClick={handleClick}>
          <FaAngleLeft className='btn-content' />
        </motion.button>

        <motion.h5
          initial={{ y: -100, opacity: 1 }}
          animate={{ y: 40, x: isHovered ? -300 : 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >WEB Devloper</motion.h5>

        <motion.button className="box-2-btn-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          onClick={btn2Click}>
          <FaAngleRight className='btn-content' />
        </motion.button>
      </div>

      <motion.div className='content-page2'
        animate={{ opacity: isHovered ? 0 : 1 }}
        transition={{ duration: 1 }}>
        <h5>Captivating Projects</h5>
        <h3>Explore a collection of projects that tell unique design and development.</h3>
      </motion.div>

      <motion.div className="collection"
        initial={{ y: 400, opacity: 1 }}
        animate={{ y: isHovered ? -120 : 0, x: isHovered ? 120 : 0, scale: isHovered ? 1.3 : 1, opacity: 1 }}
        transition={{ duration: 1 }}>

        {items.map((item, index) => (
          <motion.div
            key={index}
            className={`collection${index + 1}`}
            onClick={() => handleCollectionClick(index)}
            style={{ position: 'absolute', cursor: 'pointer', zIndex: 10 - index }}>
            <img src={item.src} alt="" />
            <button className='play-btn' onClick={(e) => { e.stopPropagation(); handleVideoPlay(item.video); }}>▶</button>
          </motion.div>
        ))}
      </motion.div>

      <div className={`box-1 ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <motion.img src="/images/Saly-12.png" alt=""
          initial={{ scale: 1, x: 0, opacity: 1 }}
          animate={animateOut ? { scale: 2, x: -500, opacity: 0 } : isHovered ? { x: -120, y: -220 } : {}}
          transition={{ duration: 1 }} />
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

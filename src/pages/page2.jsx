import { React, useState, useEffect } from 'react'
import "../styles/page2.css";
import { FaAngleRight, FaAngleLeft, FaPlay } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion"
import { useNavigate } from "react-router-dom";
import Sidebar from './navebar';

const page2 = (() => {
  const [animateOut, setAnimateOut] = useState(false);
  const [videoPopup, setVideoPopup] = useState({ visible: false, src: null });
  const navigate = useNavigate();

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

  const handlePrevPage = () => {
    setAnimateOut(true);
    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  const handleNextPage = () => {
    setAnimateOut(true);
    setTimeout(() => {
      navigate("/Page3");
    }, 500);
  };

  const [items, setItems] = useState([
    { id: 1, title: "E-Commerce Web Application", type: "Client & Freelance Project", tech: "React.js · Node.js · Express.js · MongoDB", src: '/images/nike_image.png', video: '/videos/video1.mp4' },
    { id: 2, title: "Hospital Management & Booking System", type: "Web Application Project", tech: "React.js · Node.js · REST APIs · MongoDB", src: '/images/hospital.jpg', video: '/videos/hospital_management.mp4' },
    { id: 3, title: "Developer Portfolio & API Services", type: "Full-Stack Project", tech: "React.js · Express.js · Node.js · REST APIs", src: '/images/backend.jpeg', video: '/videos/personal_portfolio.mp4' },
    { id: 4, title: "Student ERP & Admin Management System", type: "Client Project for Rizeworld / Alwar", tech: "MERN Stack · MongoDB · Express.js · React.js · Node.js", src: '/images/student__erp.png', video: '/videos/video4.mp4' },
  ]);

  const handleCardClick = (clickedIndex) => {
    if (clickedIndex === 0) return;
    setItems((prevItems) => [
      ...prevItems.slice(clickedIndex),
      ...prevItems.slice(0, clickedIndex),
    ]);
  };

  const handleVideoPlay = (src) => {
    setVideoPopup({ visible: true, src });
  };

  const closePopup = () => {
    setVideoPopup({ visible: false, src: null });
  };

  useEffect(() => {
    document.title = "Web Development Projects in Alwar, Rajasthan | Full-Stack Developer";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Explore web development projects, client websites, freelance work, MERN applications, e-commerce platforms, booking systems, and custom web applications built by a Full-Stack Developer in Alwar, Rajasthan.'
      );
    }
  }, []);

  // Fanned Card Stack layout opening Right-to-Left:
  // Card 0 (frontmost, active): Top-right, fully visible (zIndex 10)
  // Cards 1, 2, 3: Stacked behind, stepping left (-X) and slightly down (+Y) with negative rotation
  const getCardTransform = (index) => {
    const isMobile = width <= 768;
    const stepX = isMobile ? 38 : 60;
    const stepY = isMobile ? 6 : 10;
    const stepRotate = isMobile ? 1.5 : 2.5;

    const baseX = 85 - (index * stepX);
    const baseY = index * stepY;
    const rotate = -1 * index * stepRotate;

    return {
      x: isMobile ? 50 - (index * 32) : baseX,
      y: baseY,
      rotate: rotate,
      scale: 1 - (index * 0.02),
      opacity: animateOut ? 0 : 1,
    };
  };

  return (
    <div className='box'>
      <div className='nav-side'>
        <Sidebar />
      </div>

      {/* Headline & Page Navigation Arrow Controls (Matching Page3) */}
      <div className="box-2">
        <motion.button className="box-2-btn-1"
          aria-label="Previous Page"
          initial={{ opacity: 0 }}
          animate={{ opacity: animateOut ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          onClick={handlePrevPage}>
          <FaAngleLeft className='btn-content' />
        </motion.button>

        <motion.h5
          initial={{ y: -50, opacity: 0 }}
          animate={{
            y: 0,
            opacity: animateOut ? 0 : 1
          }}
          transition={{ duration: 0.6 }}
        >Web Development Projects & Client Work</motion.h5>

        <motion.button className="box-2-btn-2"
          aria-label="Next Page"
          initial={{ opacity: 0 }}
          animate={{ opacity: animateOut ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          onClick={handleNextPage}>
          <FaAngleRight className='btn-content' />
        </motion.button>
      </div>

      <div className="page2-main-container">
        {/* Left Side Active Project Description */}
        <motion.div className='page2-left-content'
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={items[0].id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <span className="project-badge">{items[0].type}</span>
              <h5>{items[0].title}</h5>
              <p className="project-tech">{items[0].tech}</p>
              <h3>Explore the websites, web applications, and digital solutions I’ve built through personal projects, freelance work, and client collaborations for Rizeworld and businesses in Alwar, Rajasthan.</h3>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Right Side Stacked Card Deck (Logos.png style) */}
        <div className="page2-right-projects">
          <div className="collection-container">
            <AnimatePresence initial={false}>
              {items.map((item, index) => {
                const isFront = index === 0;
                const anim = getCardTransform(index);

                return (
                  <motion.div
                    key={item.id}
                    layout
                    style={{ zIndex: 10 - index }}
                    className={`collection-card ${isFront ? 'card-front' : 'card-stacked'}`}
                    onClick={() => handleCardClick(index)}
                    initial={false}
                    animate={anim}
                    transition={{
                      type: "spring",
                      stiffness: 240,
                      damping: 24,
                    }}
                  >
                    <img src={item.src} alt={`${item.title} - ${item.type}`} width="300" height="300" />
                    {isFront && (
                      <button
                        className='play-btn'
                        aria-label={`Play ${item.title} Video`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleVideoPlay(item.video);
                        }}
                      >
                        <FaPlay className="play-icon" />
                      </button>
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
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

export default page2




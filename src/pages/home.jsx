import { useState } from 'react';
import "../styles/home.css";
import { FaAngleRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Sidebar from './navebar';

const Home = () => {
    const [animateOut, setAnimateOut] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        setAnimateOut(true);
        setTimeout(() => {
            navigate("/Page2");
        }, 1000);
    };

    return (
        <main className='main-box'>
            <div className='nav-side'>
                <Sidebar />
            </div>

            <div className='main-box-right'>
                <motion.h1
                    className='hero-name'
                    initial={{ opacity: 0, y: 20 }}
                    animate={animateOut ? { opacity: 0, y: -20 } : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Full-Stack Web Developer in Alwar, Rajasthan
                </motion.h1>

                <motion.h2
                    className='hero-subtitle'
                    initial={{ opacity: 0, y: 20 }}
                    animate={animateOut ? { opacity: 0, y: -20 } : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    MERN Stack Developer <span className='divider'>|</span> React.js & Node.js <span className='divider'>|</span> AI & Web Applications
                </motion.h2>

                <motion.h3
                    className='hero-description'
                    initial={{ opacity: 0, y: 20 }}
                    animate={animateOut ? { opacity: 0, y: -20 } : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Hi, I’m Vikas Jangid, a Full-Stack Web Developer based in Alwar, Rajasthan, specializing in React.js, Node.js, MongoDB, REST APIs, and modern web application development. I build fast, scalable, and user-focused websites and custom web applications for businesses, startups, and entrepreneurs.
                </motion.h3>

                <motion.div
                    className='btn-1'
                    initial={{ opacity: 0, y: 20 }}
                    animate={animateOut ? { opacity: 0, y: -20 } : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <button type='button' aria-label="View My Work" onClick={handleClick}>
                        <span className='btn-label'>View My Work</span>
                        <FaAngleRight className='btn-content' />
                    </button>
                </motion.div>
            </div>

            <div className='main-box-left'>
                <motion.img
                    src="/images/Saly-16.webp"
                    className='h-imge'
                    alt="3D Creative Developer Illustration"
                    width="1050"
                    height="772"
                    fetchPriority="high"
                    initial={{ scale: 1, x: 0, opacity: 1 }}
                    animate={animateOut ? { scale: 2, x: -500, opacity: 0 } : { scale: 1, x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                />
            </div>
        </main>
    );
};

export default Home;
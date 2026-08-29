import { React, useState } from 'react'
import "../styles/navebar.css";
import { useNavigate } from "react-router-dom";


const home = (() => {

  const [videoPopup, setVideoPopup] = useState({ visible: false, src: null });
    const navigate = useNavigate();
    const handleClick = () => {
            navigate("/");
    };

      const handledocument = () => {
    setVideoPopup({ visible: true});
  };

  const closePopup = () => {
    setVideoPopup({ visible: false});
  };

    return (
        <div>
        <header className='nav-box'>
            <div className="nav-box-left">
                <div className='my_image'><img src="/images/IMG_4979.webp" alt="Vikas Jangid Profile" width="250" height="250" /></div>
                <div className='my_name'>VIKAS .</div>
            </div>
            <div className="nav-box-right">
                <div className='t_1' onClick={handleClick} role="button" tabIndex={0}>Home</div>
                <div className='t_2' onClick={handledocument} role="button" tabIndex={0}> Resume</div>
            </div>
       
        </header>
         {videoPopup.visible && (
        <div className="document-popup">
          <div className="popup-content_doc">
            <button className="close-btn_doc" onClick={closePopup} aria-label="Close resume viewer">X</button>
            
            <iframe src="/docs/vikas_resume-2.pdf" frameborder="0" width="1000px" height="1000px" title='PDF Document'></iframe>
            
          </div>
        </div>
      )}
        </div>
    )
})

export default home
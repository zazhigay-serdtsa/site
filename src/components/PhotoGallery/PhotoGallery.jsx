import style from './PhotoGallery.module.css';

import image1 from '../../assets/image1.svg';
import image2 from '../../assets/image2.svg';
import image3 from '../../assets/image3.svg';
import image4 from '../../assets/image4.svg';
import image5 from '../../assets/image5.svg';
import image6 from '../../assets/image6.svg';
import image7 from '../../assets/image7.svg';
import image8 from '../../assets/image8.svg';
import image9 from '../../assets/image9.svg';
import image10 from '../../assets/image10.svg';
import image11 from '../../assets/image11.svg';
import image12 from '../../assets/image12.svg';
import image13 from '../../assets/image13.svg';
import image14 from '../../assets/image14.svg';
import image15 from '../../assets/image15.svg';
import image16 from '../../assets/image16.svg';
import image17 from '../../assets/image17.svg';
import image18 from '../../assets/image18.svg';
import image19 from '../../assets/image19.svg';
import image20 from '../../assets/image20.svg';
import image21 from '../../assets/image21.svg';
import image22 from '../../assets/image22.svg';


import { useState } from 'react';

const Modal = ({ active, setActive, fullImage }) => {
  console.log(fullImage);
  return (
    <div className={style.modal} onClick={() => setActive(false)}>
      <img className={style.fullImage} src={fullImage} alt="logo" />
    </div>
  )
}

const PhotoGallery = () => {

  const [activeModal, setActiveModal] = useState(false);
  const [actualImage, setActualImage] = useState();

  const changeModal = (img) => {
    setActiveModal(true);
    setActualImage(img);
    console.log(img)
  }

  // Карусель
  // const slider = document.querySelector('.slider_track');
  // let isDown = false;
  // let startX;
  // let scrollLeft;

  // slider.addEventListener('mousedown', e => {
  //   isDown = true;
  //   slider.classList.add('active');
  //   startX = e.pageX - slider.offsetLeft;
  //   scrollLeft = slider.scrollLeft;
  // });
  // slider.addEventListener('mouseleave', _ => {
  //   isDown = false;
  //   slider.classList.remove('active');
  // });
  // slider.addEventListener('mouseup', _ => {
  //   isDown = false;
  //   slider.classList.remove('active');
  // });
  // slider.addEventListener('mousemove', e => {
  //   if (!isDown) return;
  //   e.preventDefault();
  //   const x = e.pageX - slider.offsetLeft;
  //   const SCROLL_SPEED = 3;
  //   const walk = (x - startX) * SCROLL_SPEED;
  //   slider.scrollLeft = scrollLeft - walk;
  // });

  return (
    <div className={style.wrapper} id='gallery'>
      <p className={style.title}>Галерея</p>

      <div className={style.slider_container}>
        <div className={style.arrow_left}>
          <div className={style.arrow_bg}>
            <div className={style.arrow}></div>
          </div>
        </div>
        <div className={style.arrow_right}>
          <div className={style.arrow_bg}>
            <div className={style.arrow}></div>
          </div>
        </div>

        <div className={style.slider_track}>
          <img className={style.logo} src={image1} alt="logo1" onClick={() => changeModal(image1)} />
          <img className={style.logo} src={image2} alt="logo2" onClick={() => changeModal(image2)} />
          <img className={style.logo} src={image3} alt="logo3" onClick={() => changeModal(image3)} />
          <img className={style.logo} src={image4} alt="logo4" onClick={() => changeModal(image4)} />
          <img className={style.logo} src={image5} alt="logo5" onClick={() => changeModal(image5)} />
          <img className={style.logo} src={image6} alt="logo6" onClick={() => changeModal(image6)} />
          <img className={style.logo} src={image7} alt="logo7" onClick={() => changeModal(image7)} />
          <img className={style.logo} src={image8} alt="logo8" onClick={() => changeModal(image8)} />
          <img className={style.logo} src={image9} alt="logo9" onClick={() => changeModal(image9)} />
          <img className={style.logo} src={image10} alt="logo10" onClick={() => changeModal(image10)} />
          <img className={style.logo} src={image11} alt="logo11" onClick={() => changeModal(image11)} />
          <img className={style.logo} src={image12} alt="logo12" onClick={() => changeModal(image12)} />
          <img className={style.logo} src={image13} alt="logo13" onClick={() => changeModal(image13)} />
          <img className={style.logo} src={image14} alt="logo14" onClick={() => changeModal(image14)} />
          <img className={style.logo} src={image15} alt="logo15" onClick={() => changeModal(image15)} />
          <img className={style.logo} src={image16} alt="logo16" onClick={() => changeModal(image16)} />
          <img className={style.logo} src={image17} alt="logo17" onClick={() => changeModal(image17)} />
          <img className={style.logo} src={image18} alt="logo18" onClick={() => changeModal(image18)} />
          <img className={style.logo} src={image19} alt="logo19" onClick={() => changeModal(image19)} />
          <img className={style.logo} src={image20} alt="logo20" onClick={() => changeModal(image20)} />
          <img className={style.logo} src={image21} alt="logo21" onClick={() => changeModal(image21)} />
          <img className={style.logo} src={image22} alt="logo22" onClick={() => changeModal(image22)} />
        </div>
      </div>

      <div className={style.galleryWrap}>
        <img className={style.logo} src={image1} alt="logo1" onClick={() => changeModal(image1)} />
        <img className={style.logo} src={image2} alt="logo2" onClick={() => changeModal(image2)} />
        <img className={style.logo} src={image3} alt="logo3" onClick={() => changeModal(image3)} />
        <img className={style.logo} src={image4} alt="logo4" onClick={() => changeModal(image4)} />
        <img className={style.logo} src={image5} alt="logo5" onClick={() => changeModal(image5)} />
        <img className={style.logo} src={image6} alt="logo6" onClick={() => changeModal(image6)} />
        <img className={style.logo} src={image7} alt="logo7" onClick={() => changeModal(image7)} />
        <img className={style.logo} src={image8} alt="logo8" onClick={() => changeModal(image8)} />
        <img className={style.logo} src={image9} alt="logo9" onClick={() => changeModal(image9)} />
        <img className={style.logo} src={image10} alt="logo10" onClick={() => changeModal(image10)} />
        <img className={style.logo} src={image11} alt="logo11" onClick={() => changeModal(image11)} />
        <img className={style.logo} src={image12} alt="logo12" onClick={() => changeModal(image12)} />
        <img className={style.logo} src={image13} alt="logo13" onClick={() => changeModal(image13)} />
        <img className={style.logo} src={image14} alt="logo14" onClick={() => changeModal(image14)} />
        <img className={style.logo} src={image15} alt="logo15" onClick={() => changeModal(image15)} />
        <img className={style.logo} src={image16} alt="logo16" onClick={() => changeModal(image16)} />
        <img className={style.logo} src={image17} alt="logo17" onClick={() => changeModal(image17)} />
        <img className={style.logo} src={image18} alt="logo18" onClick={() => changeModal(image18)} />
        <img className={style.logo} src={image19} alt="logo19" onClick={() => changeModal(image19)} />
        <img className={style.logo} src={image20} alt="logo20" onClick={() => changeModal(image20)} />
        <img className={style.logo} src={image21} alt="logo21" onClick={() => changeModal(image21)} />
        <img className={style.logo} src={image22} alt="logo22" onClick={() => changeModal(image22)} />
      </div>

      {activeModal && (
        <Modal
          image={''}
          active={activeModal}
          setActive={setActiveModal}
          fullImage={actualImage}
        />
      )}
    </div>
  );
}

export default PhotoGallery;

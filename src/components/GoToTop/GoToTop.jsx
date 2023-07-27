import React, { useEffect, useState } from 'react'
import uparrow from '../../assets/up-arrow.png'
const GoToTop = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <div onClick={scrollToTop} className=''>{showButton && <img src={uparrow} alt="" />}</div>
    )
}

export default GoToTop
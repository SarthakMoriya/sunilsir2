import React, { useEffect, useState } from 'react'
import whastpp from '../../assets/whatsapp1.png'
const Whatsapp = () => {
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
        <div onClick={scrollToTop} className=''>{showButton && <img src={whastpp} alt="" />}</div>
    )
}

export default Whatsapp
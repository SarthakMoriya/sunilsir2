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

    const handleWhatsapp=()=>{
        
        const whatsappUrl = `https://wa.me/8544875229?text=Hi, I contacted you through your website...`;
        window.open(whatsappUrl, '_blank');
    }
    return (
        <div onClick={handleWhatsapp} className=''>{showButton && <img src={whastpp} alt="" />}</div>
    )
}

export default Whatsapp
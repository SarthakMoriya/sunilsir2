import React, { useState } from 'react'
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
const CounterBox = ({ end }) => {
    const [counter, setCounter] = useState(false);
    return (
        <ScrollTrigger
            onEnter={() => setCounter(true)}
            onExit={() => setCounter(false)}
        >
            {counter && <CountUp start={0} end={end} duration={2} delay={0} />}
        </ScrollTrigger>
    );
};

export default CounterBox
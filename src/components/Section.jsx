import { motion } from 'framer-motion';
import React from 'react';
import '../styles/section.scss'

const headingoptions={
    initial:{
        y:"-100%",
        opacity: 0
    },
    whileInView:{
        y:"0%",
        opacity: 1
    }
}

const textoptions={
    ...headingoptions,
    transition:{
        delay: 0.3
    }
}

const buttonoptions={
    initial: {
      y: "100%",
      opacity: 0,
    },
    whileInView: {
      y: 0,
      opacity: 1,
    },
    transition:{
      delay: 0.3,
      ease: "easeIn"
    }
}


const Section = (
    {   headingtext, 
        headingtextcolor,
        text, 
        textcolor,
        btntext,
        btntextcolor,
        btnbgcolor, 
        bgcolor, 
        imgsource,
        imgsize="70%",
        hasbutton= true,
    }) => {
  return (
    <motion.div className='section' style={{
        backgroundColor: bgcolor
    }}
    >
        <motion.div>
            <motion.h3 {...headingoptions} style={{color: headingtextcolor }}>{headingtext}</motion.h3>
            <motion.p {...textoptions} style={{color: textcolor}}>{text}</motion.p>
            {hasbutton && <motion.button {...buttonoptions} style={{color: btntextcolor, backgroundColor: btnbgcolor }}>{btntext}</motion.button>}
            <motion.img width={imgsize} src= {imgsource} alt="unavailable" />
        </motion.div>
    </motion.div>
  );
}

export default Section;
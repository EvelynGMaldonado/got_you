import React, {useRef, useEffect, useCallback} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import {useSpring, animated} from 'react-spring'


const Footer = () =>{
    
    return(
    <>
    <footer className="">
    <p> {new Date().getFullYear()} - IGotcha!</p>
    </footer>
    </>
    )

}

export default Footer;
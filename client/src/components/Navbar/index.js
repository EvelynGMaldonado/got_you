import React, {useRef, useEffect, useCallback} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import {useSpring, animated} from 'react-spring'
import Auth from '../../utils/auth';


const Navbar = () =>{


    return (
        <>
        <nav className="full-width nav-columns distribute-even fit">
        <Link to="/profile">
            <button className="btn">Profile</button>
        </Link>
        <Link to="/find-service">
        <button className="btn">Find Service</button>
        </Link>
        <Link to="/offer-service">
        <button className="btn">Offer Service</button>
        </Link>
        <button className="btn">Language</button>
        <button onClick={Auth.logout}className="btn">Logout</button>
        </nav>
        </>
    )
}

export default Navbar;
//libraries
import React, { Fragment } from 'react';
//components
import NavComponents from './components/NavComponents';
//css
import './components/styles/index.css';

function Header() {
    return (
        <Fragment>
            <header className='header'>
                <NavComponents/>
            </header>
        </Fragment>
    )
}

export default Header;
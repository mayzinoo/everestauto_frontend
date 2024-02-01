//libraries
import React, { Fragment } from 'react'
import { Container } from 'react-bootstrap';
//components
import FooterAd from './components/FooterAd';
import CompanyInfo from './components/CompanyInfo';
import CopyRight from './components/CopyRight';
//css
import './components/styles/index.css'

function Footer() {
    return (
        <Fragment>
            <footer className='footer'>
                <Container>
                    <FooterAd/>
                    <div className='footer-breakup'/>
                    <CompanyInfo/>
                    <div className='footer-breakup'/>
                    <CopyRight/>
                </Container>
            </footer>
        </Fragment>
    )
}

export default Footer;
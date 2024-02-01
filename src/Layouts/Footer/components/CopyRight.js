//libraries
import React, { Fragment } from 'react';
//components

//css
import './styles/copyright.css';

function CopyRight(props){
    
    return(
        <Fragment>
            <div className='copyRight-wrap'>
                <p className='copyRight-desc'>©2004-2022 Everest Auto Pte.Ltd, Singapore. All rights reserved !</p>
            </div>
        </Fragment>
    )

}

export default CopyRight;
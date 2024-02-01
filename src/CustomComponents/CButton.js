//libraries
import React, { Fragment } from 'react'
//component
//css
import './CButton.css';

function CButton(props) {
  const className = props.className;
  const text = props.text;
  const type = props.type;
  // type0=button,type1=a

  return (
    <Fragment>
      {type === 0 ?
        <button className={className ? className : 'defaultGeneralBtn'} {...props}>{text}</button>
        :
        type === 1 ?
        <a className={className ? className : 'defaultGeneralBtn'} {...props}>{text}</a>
        :
        <></>
      }
    </Fragment>
  )

}

export default CButton
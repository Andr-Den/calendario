import React from 'react'

import './InfoTooltip.css'

function InfoTooltip({ tooltipOpen, tooltipClose, tooltipErrorText, tooltipIcon}) {

  return (
    <div className={`tooltip ${tooltipOpen ? 'tooltip_opened' : ''}`} >
        <div className="tooltip__container">
          <button className="tooltip__close-icon" type="button" onClick={tooltipClose}></button>
          <img className="tooltip__icon" src={tooltipIcon} alt="done icon"/>
          <h2 className="tooltip__title">{tooltipErrorText}</h2>
        </div>
    </div>
  )
}

export default InfoTooltip;
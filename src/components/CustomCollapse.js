import React from 'react'
import PropTypes from 'prop-types'
import './CustomCollapse.css'

function CustomCollapse(props) {
  const { on } = props
  return (
    <div className={`CustomCollapse ${on ? "show":""} `}>
      {props.children}
    </div>
  )
}

CustomCollapse.propTypes = {
  on: PropTypes.bool.isRequired,
}

export default CustomCollapse


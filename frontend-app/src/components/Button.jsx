import React from 'react'
import PropTypes from 'prop-types'

const Button = React.memo(({ children, className, type, click, styleBtn, width }) => {
  console.log('Button.jsx')
  return (
    <button
      className={`btn ${className} ${styleBtn && 'btn--in-form'} ${width === 'full' && 'btn--full'}`.trim()}
      onClick={click}
      type={type}
      >
      {children}
    </button>
  )
})

Button.defaultProps = {
  type: 'button',
  styleBtn: '',
  className: '',
  width: 'auto'
}

Button.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  click: PropTypes.func,
  styleBtn: PropTypes.oneOf(['in-form', null]),
  width: PropTypes.oneOf(['auto', 'full'])
}

export default Button
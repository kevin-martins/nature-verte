import React from 'react'

const Button = ({ type, text, className }) => (
    <button
        type={type}
        className={className}
    >
        {text}
    </button>
)

export default Button

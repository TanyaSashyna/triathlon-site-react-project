import React from 'react'

export default ({text, type = "button", disabled, ...rest}) => 
    <button type = {type} disabled = {disabled} {...rest}>{text}</button>;
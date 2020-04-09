import React from 'react'
import "./Fab.sass"
import PropTypes from 'prop-types'

const Fab = props => {
    return (
        <div className={props.open ? 'fab open' : 'fab'} onClick={props.onClick}>
            <img src={require('../../assets/plus_icon.svg')} alt={''}/>
        </div>
    )
}

Fab.propTypes = {
    onClick: PropTypes.func,
    open: PropTypes.bool,
}

export default Fab

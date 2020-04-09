import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import "./Button.sass"

const Button = props => {
 return (
     <button
         type={props.type}
         onClick={props.onClick}
         className={'btn_original'}>
         {props.children}
     </button>
 )
}

Button.propTypes = {
    onClick: PropTypes.func,
    type: PropTypes.string,
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Button)

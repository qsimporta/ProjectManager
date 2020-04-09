import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import "./InputText.sass"

const InputText = props => {
 return (
    <div className={'input_container '+props.className}>
        <label>{props.label}</label>
        <input
            autoComplete={props.autoComplete}
            placeholder={props.placeholder}
            type={props.type} name={props.name} />
    </div>
 )
}

InputText.propTypes = {
    autoComplete: PropTypes.bool,
    label: PropTypes.string.isRequired,
    className: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(InputText)

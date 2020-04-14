import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import "./InputText.sass"

const InputText = props => {
 return (
    <div style={props.style} className={'input_container '+props.className}>
        <label>{props.label}</label>
        <input
            required={props.required}
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
    style: PropTypes.object,
    required: PropTypes.bool,
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(InputText)

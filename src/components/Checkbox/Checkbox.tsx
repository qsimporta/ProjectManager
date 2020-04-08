import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import "./Checkbox.sass"

const Checkbox = props => {

    const [checked, setChecked] = React.useState(false)

 return (
    <div style={props.style} className={checked ? 'checkbox_container checked' : 'checkbox_container'} onClick={() => {
        props.onCheck(!checked)
        setChecked(!checked)
    }}/>
 )
}

Checkbox.propTypes = {
    onCheck: PropTypes.func,
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Checkbox)

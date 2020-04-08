import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import "./spinner.sass"

const Spinner = props => {
 return (
    <div className={'spinner'}>
        <div />
        <div />
        <div />
        <div />
        <div />
    </div>
 )
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Spinner)

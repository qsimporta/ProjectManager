import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import "./Hamb.sass"

const Hamb = props => {
 return (
    <div className={'hamb_container'}>
        <section>
        <div/>
        <div/>
        <div/>
        </section>
    </div>
 )
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Hamb)

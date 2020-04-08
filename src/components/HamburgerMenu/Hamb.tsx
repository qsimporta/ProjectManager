import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import "./Hamb.sass"

const Hamb = props => {
 return (
    <div onClick={props.onClick} className={props.sidebarOpen ? 'hamb_container open' : 'hamb_container'}>
        <section>
        <div/>
        <div/>
        <div/>
        </section>
    </div>
 )
}

const mapStateToProps = state => ({
    sidebarOpen: state.general.sidebarOpen,
})
const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Hamb)

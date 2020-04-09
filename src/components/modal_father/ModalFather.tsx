import React from 'react'
import {connect} from 'react-redux'
import "./ModalFather.sass"
import PropTypes from 'prop-types'

const ModalFather = props => {
 return (
    <div className={props.open ? 'modal_parent open' : 'modal_parent'}>
        <header>
            <h1>{props.title}</h1>
            <img onClick={props.close} src={require('../../assets/x_icon.svg')} alt={''} />
        </header>
        <body>
            {props.children}
        </body>
    </div>
 )
}

ModalFather.propTypes = {
    open: PropTypes.bool.isRequired,
    title: PropTypes.string,
    close: PropTypes.func,
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ModalFather)

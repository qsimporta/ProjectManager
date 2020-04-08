import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import "./sidebar.sass"

const Sidebar = props => {
 return (
     <div className={props.sidebarOpen ? 'sidebar_container open' : 'sidebar_container'}>
         <ul>
             <li className={'selected'}><p>Home </p><img src={require('../../assets/home_icon.svg')} alt={''}/></li>
             <li><p>Projetos</p><img src={require('../../assets/code_icon.svg')} alt={''}/></li>
             <li><p>Usuários</p><img src={require("../../assets/user_icon.svg")} alt={''} /></li>
             <li><p>Sair</p><img src={require('../../assets/leave_icon.svg')} alt={''}/></li>
         </ul>
     </div>
 )
}

const mapStateToProps = state => ({
    sidebarOpen: state.general.sidebarOpen,
})
const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)

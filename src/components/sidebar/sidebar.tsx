import React from 'react'
import {connect} from 'react-redux'
import "./sidebar.sass"
import {useHistory, useLocation} from 'react-router-dom'

const Sidebar = props => {

    const story = useHistory()
    const location = useLocation()

    return (
        <div className={props.sidebarOpen ? 'sidebar_container open' : 'sidebar_container'}>
            <ul>
                <li
                    onClick={() => {
                        story.push('/home')
                    }}
                    className={location.pathname === '/home' ? 'selected' : ''}><p>Home </p><img src={require('../../assets/home_icon.svg')} alt={''}/></li>
                <li
                    className={location.pathname === '/projetos' ? 'selected' : ''}
                    onClick={() => story.push('/projetos')}>
                    <p>Projetos</p>
                    <img src={require('../../assets/code_icon.svg')} alt={''}/>
                </li>
                <li
                    onClick={() => story.push('/home')}>
                    <p>Usuários</p><img src={require("../../assets/user_icon.svg")} alt={''}/></li>
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

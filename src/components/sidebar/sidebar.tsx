import React from 'react'
import {connect} from 'react-redux'
import "./sidebar.sass"
import {useHistory, useLocation} from 'react-router-dom'
import {Actions} from "../../redux/actions/actions";
import Users from "../../DAOs/Users";

const Sidebar = props => {

    const story = useHistory()
    const location = useLocation()

    return (
        <div className={props.sidebarOpen ? 'sidebar_container open' : 'sidebar_container'}>
            <ul>
                <li
                    onClick={() => {
                        story.push('/home')
                        if (props.sidebarOpen)
                            props.openSidebar(false)
                    }}
                    className={location.pathname === '/home' ? 'selected' : ''}>
                    <p>Home </p><img src={require('../../assets/home_icon.svg')} alt={''}/></li>
                <li
                    className={location.pathname === '/home/projetos' ? 'selected' : ''}
                    onClick={() => {
                        if (props.sidebarOpen)
                            props.openSidebar(false)
                        story.push('/home/projetos')
                    }}>
                    <p>Projetos</p>
                    <img src={require('../../assets/code_icon.svg')} alt={''}/>
                </li>
                <li
                    className={location.pathname === '/home/users' ? 'selected' : ''}
                    onClick={() => {
                        if (props.sidebarOpen)
                            props.openSidebar(false)
                        story.push('/home/users')
                    }}>
                    <p>Usuários</p><img src={require("../../assets/user_icon.svg")} alt={''}/></li>
                <li onClick={() => props.clickExit(true)}>
                    <p>Sair</p>
                    <img src={require('../../assets/leave_icon.svg')} alt={''}/>
                </li>
            </ul>
        </div>
    )
}

const mapStateToProps = state => ({
    sidebarOpen: state.general.sidebarOpen,
})
const mapDispatchToProps = dispatch => ({
    clickExit: exit => dispatch({type: Actions.clickExit, payload: exit}),
    openSidebar: open => dispatch({type: Actions.openSidebar, payload: open})
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)

import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import "./Tabs.sass"

const Tab = props => {
    return (
        <div className={props.selected ? 'tab selected' : 'tab'} onClick={props.onClickTab}>
            {props.name}
        </div>
    )
}

const Tabs = props => {

    const tabs = ["Tarefas", "Commits", "Planejamento"]

 return (
    <div className={'tabs'}>
        {tabs.map((tab, index) =>
            <Tab
                name={tab}
                selected={props.tabSelected === tab}
                onClickTab={() => props.onClickTab(tab)}
                key={index} /> )}
    </div>
 )
}

Tabs.propTypes = {
    onClickTab: PropTypes.func,
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Tabs)

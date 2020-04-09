import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Title from "../../../components/title/title"
import "./planejamento_project.sass"
import InputText from "../../../components/InputText/InputText"
import Button from "../../../components/Button/Button"
import Tabs from "../../../components/Tabs/Tabs"
import Planejamento from "./tabs/planejamento/planejamento"
import Tarefas from "./tabs/tarefas/tarefas"

const PlanejamentoProject = props => {

    const [tabSelected, selectTab] = React.useState('Tarefas')
    const planejamentoDone = true

    return (
        <div className={'planejamento'}>
            <div className={'content'}>
                <header>
                    <Title>BarberProject</Title>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi ac facilisis ante. Nullam sed convallis sapien. Suspendisse scelerisque bibendum blandit.
                        Mauris dui sem, varius quis efficitur non, tempor ac lacus.
                        Proin viverra mollis massa, sed ornare felis accumsan commodo.</p>
                    <button>Ver no GitHub <img src={require('../../../assets/github-logo.svg')} alt/></button>
                </header>
                {
                    planejamentoDone ? (
                        <div>
                            <Tabs onClickTab={(tab) => selectTab(tab)} tabSelected={tabSelected}/>
                            <Planejamento show={tabSelected === 'Planejamento'}/>
                            <Tarefas show={tabSelected === 'Tarefas'} />
                        </div>
                    ) : (<Planejamento/>)
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(PlanejamentoProject)

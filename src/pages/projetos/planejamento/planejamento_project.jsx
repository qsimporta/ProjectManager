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
import Commits from "./tabs/commits/commits"

const PlanejamentoProject = props => {

    const [tabSelected, selectTab] = React.useState('Tarefas')
    const planejamentoDone = true

    return (
        <div className={'planejamento'}>
            <div className={'content'}>
                <header>
                    <Title>{props.projetoSelected.nome}</Title>
                    <p>{props.projetoSelected.descricao}</p>
                    <button onClick={() => {
                        window.open('http://github.com/qsimporta/'+props.projetoSelected.nome)
                    }}>
                        Ver no GitHub <img src={require('../../../assets/github-logo.svg')} alt/>
                    </button>
                </header>
                {
                    planejamentoDone ? (
                        <div>
                            <Tabs onClickTab={(tab) => selectTab(tab)} tabSelected={tabSelected}/>
                            <Planejamento show={tabSelected === 'Planejamento'}/>
                            <Tarefas show={tabSelected === 'Tarefas'} />
                            <Commits show={tabSelected === 'Commits'}/>
                        </div>
                    ) : (<Planejamento/>)
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    projetoSelected: state.projetos.projetoSelected,
})
const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(PlanejamentoProject)

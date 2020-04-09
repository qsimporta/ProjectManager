import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Title from "../../../components/title/title"
import "./planejamento_project.sass"
import InputText from "../../../components/InputText/InputText"
import Button from "../../../components/Button/Button"

const PlanejamentoProject = props => {
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
                <div className={'section_container'}>
                    <h1>Requisitos</h1>
                    <section>
                    <p className={'none'}>Ainda não foram registrados nenhum Requisito Funcional ou Não-Funcional.</p>
                        <div className={'requisito_container'}>
                            <InputText autoComplete={false} className={'req'} label={'Requisito'} type={'text'} name={'requisito'} />
                            <button>+</button>
                        </div>
                    </section>
                </div>
                <div className={'section_container'}>
                    <h1>Classes</h1>
                    <section>
                        <p className={'none'}>Ainda não foi registrada nenhuma classe.</p>
                        <div className={'class_container'}>
                            <h2 className={'title'}>Pessoa</h2>
                            <p>nome: String</p>
                            <p>idade: Number</p>
                            <p>Bagagens: Array [{'{'}<br/>tamanho: Number,<br/> peso: Number,<br/> id: ObjectId<br/> {'}'}]</p>
                        </div>
                        <Button>Adicionar Classe</Button>
                        <Button>Gerar Data Access Objects</Button>
                    </section>
                </div>
                <div className={'section_container'}>
                    <h1>Mock-ups</h1>
                    <section>
                        <p className={'none'}>Nenhum upload até o momento.</p>
                    </section>
                </div>
                <button className={'finalizar'}>Finalizar Planejamento</button>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(PlanejamentoProject)

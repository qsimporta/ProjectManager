import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import InputText from "../../../../../components/InputText/InputText"
import Button from "../../../../../components/Button/Button"

const Planejamento = props => {
    if (props.show) {
        return (
            <div>
                <div className={'section_container'}>
                    <h1>Requisitos</h1>
                    <section>
                        <p className={'none'}>Ainda não foram registrados nenhum Requisito Funcional ou
                            Não-Funcional.</p>
                        <div className={'requisito_container'}>
                            <InputText autoComplete={false} className={'req'} label={'Requisito'} type={'text'}
                                       name={'requisito'}/>
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
                            <p>Bagagens: Array [{'{'}<br/>tamanho: Number,<br/> peso: Number,<br/> id:
                                ObjectId<br/> {'}'}]
                            </p>
                        </div>
                        <Button>Adicionar Classe</Button>
                        <Button>Gerar Data Access Objects</Button>
                    </section>
                </div>
                <div className={'section_container'}>
                    <h1>Mock-ups</h1>
                    <section>
                        <p className={'none'}>Nenhum upload até o momento.</p>
                        <Button>Fazer Upload dos Mock-Ups</Button>
                    </section>
                </div>
                <button className={'finalizar'}>Finalizar Planejamento</button>
            </div>
        )
    } else {
        return (<></>)
    }
}

Planejamento.propTypes = {
    show: PropTypes.bool,
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Planejamento)

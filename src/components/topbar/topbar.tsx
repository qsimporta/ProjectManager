import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import "./topbar.sass"
import InputText from "../InputText/InputText";
import Checkbox from "../Checkbox/Checkbox";

const Topbar = props => {
    if (props.loginTopbar) {
        return (
            <div className={'topbar_container'}>
                <section>
                    <img src={require('../../assets/logo_qsi.png')} alt={''}/>
                    <h2>Projects</h2>
                </section>
                <section>
                    <form>
                        <div className={'topbar_div'}>
                            <InputText
                                placeholder={"Ex: joao@bol.com"}
                                label={"E-mail"}/>
                            <a>Esqueceu sua senha?</a>
                        </div>
                        <div className={'topbar_div'}>
                            <InputText
                                type={'password'}
                                placeholder={"Informe aqui sua senha"}
                                label={"Senha"}/>
                            <a>
                                <Checkbox
                                    style={{
                                        display: 'inline-block',
                                        marginRight: '8px',
                                        marginTop: '3px',
                                        borderRadius: '2px'}}
                                    onCheck={checked => {}}/>
                                Manter-me conectado
                            </a>
                        </div>
                        <button>
                            <img src={require('../../assets/arrow_left_icon.svg')} alt={''}/>
                        </button>
                    </form>
                </section>
            </div>
        )
    } else {
        return (<div></div>)
    }
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Topbar)

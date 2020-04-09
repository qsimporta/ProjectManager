import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import "./topbar.sass"
import InputText from "../InputText/InputText"
import Checkbox from "../Checkbox/Checkbox"
import {useHistory} from 'react-router-dom'
import Hamb from "../HamburgerMenu/Hamb";
import {Actions} from "../../redux/actions/actions";

const Topbar = props => {

    const history = useHistory()
    const [sidebarOpen, setSidebarOpen] = React.useState(false)

    if (props.loginTopbar) {
        return (
            <div className={'topbar_container'}>
                <section>
                    <img src={require('../../assets/logo_qsi.png')} alt={''}/>
                    <h2>Projects</h2>
                </section>
                <section>
                    <form onSubmit={() => {
                        history.push('/loading')
                    }}>
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
                                        borderRadius: '2px'
                                    }}
                                    onCheck={checked => {
                                    }}/>
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
        return (<div className={'topbar_container'}>
            <section>
                <Hamb onClick={() => {
                    props.openSidebar(!sidebarOpen)
                    setSidebarOpen(!sidebarOpen)
                }}/>
                <img style={{height: '45px', margin: '15px 20px'}} src={require('../../assets/small_icon.svg')}
                     alt={''}/>
                <h2 className={'projs'}>Projects</h2>
            </section>
            <section style={{alignItems: 'center'}}>
                <div className={'name_div'}>
                    <h1>Brian Ito</h1>
                    <h2>Desenvolvedor</h2>
                </div>
                <img className={'photo'} src={require('../../assets/mock_image.PNG')} alt={''} />
            </section>
        </div>)
    }
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({
    openSidebar: open => dispatch({type: Actions.openSidebar, payload: open}),
})

export default connect(mapStateToProps, mapDispatchToProps)(Topbar)

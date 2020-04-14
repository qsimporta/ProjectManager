import React, {Ref, useRef} from 'react'
import {connect} from 'react-redux'
import "./topbar.sass"
import InputText from "../InputText/InputText"
import Checkbox from "../Checkbox/Checkbox"
import {useHistory} from 'react-router-dom'
import Hamb from "../HamburgerMenu/Hamb"
import {Actions} from "../../redux/actions/actions"
import Users from "../../DAOs/Users"
import {firebaseAuth, firebaseStorage} from "../../config/firebase"
import {Redirect} from 'react-router-dom'

const Topbar = props => {

    const history = useHistory()
    const [sidebarOpen, setSidebarOpen] = React.useState(false)
    const [keepConnected, setKeepConnected] = React.useState(false)

    const imgRef = useRef<HTMLImageElement>(null)

    if (firebaseAuth.currentUser && !props.userLogged) {
        return (<Redirect to={'/loading'} />)
    } else if (firebaseAuth.currentUser && props.userLogged) {
        firebaseStorage.child(props.userLogged.photo_url).getDownloadURL().then(url => {
            if (imgRef && imgRef.current) {
                imgRef.current.src = url
            }
        })
    }

    const LoginSubmit = async e => {
        e.preventDefault()
        const form = e.target
        let user = {email: form.email.value, password: form.pwd.value}
        let res = await Users.login(user, keepConnected)
        // @ts-ignore
        if (res.code === 200) {
            history.push('/loading')
        } else {
            alert('na na ni na não')
        }
    }



    if (props.loginTopbar) {
        return (
            <div className={'topbar_container'}>
                <section>
                    <img src={require('../../assets/logo_qsi.png')} alt={''}/>
                    <h2>Projects</h2>
                </section>
                <section>
                    <form onSubmit={LoginSubmit}>
                        <div className={'topbar_div'}>
                            <InputText
                                placeholder={"Ex: joao@bol.com"}
                                name={'email'}
                                label={"E-mail"}/>
                            <a>Esqueceu sua senha?</a>
                        </div>
                        <div className={'topbar_div'}>
                            <InputText
                                type={'password'}
                                name={'pwd'}
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
                                        setKeepConnected(checked)
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
    } else if (props.userLogged && firebaseAuth.currentUser) {
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
                    <h1>{props.userLogged.first_name}</h1>
                    <h2>Desenvolvedor</h2>
                </div>
                <img ref={imgRef} className={'photo'} src={require('../../assets/mock_image.PNG')} alt={''} />
            </section>
        </div>)
    } else {
        return <Redirect to ="/loading" />
    }
}

const mapStateToProps = state => ({
    userLogged: state.general.userLogged,
})

const mapDispatchToProps = dispatch => ({
    setUserLogged: userLogged => dispatch({type: Actions.setUserLogged, payload: userLogged}),
    openSidebar: open => dispatch({type: Actions.openSidebar, payload: open}),
})

//@ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(Topbar)

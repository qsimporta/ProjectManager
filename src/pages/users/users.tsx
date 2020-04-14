import React from 'react'
import {connect} from 'react-redux'
import Title from "../../components/title/title"
import "./users.sass"
import Fab from "../../components/Fab/Fab"
import ModalFather from '../../components/modal_father/ModalFather'
// @ts-ignore
import UsersDAO from "../../DAOs/Users"
import {Actions} from "../../redux/actions/actions"
import InputText from "../../components/InputText/InputText"
import Button from "../../components/Button/Button"
import {User} from "../../DAOs/Users"
import FileInput from "../../components/file_input/FileInput";
import {firebaseStorage} from "../../config/firebase";

const Users = props => {

    const [modalOpen, setModalOpen] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    const [fileSelected, setFileSelected] = React.useState({})

    React.useEffect(() => {
        if (props.users.length <= 0) {
            UsersDAO.getUsers().then(res => {
                props.getUsers(res)
            })
        }
    })

    const newUserHandler = e => {
        e.preventDefault()
        const form = e.target
        setLoading(true)
        const userData: User = {
            first_name: form.prim_nome.value,
            last_name: form.ult_nome.value,
            github: form.github.value,
            //@ts-ignore
            photo_url: '/' + fileSelected.name,
        }
        //@ts-ignore
        firebaseStorage.child(userData.photo_url).put(fileSelected).then(() => {
            UsersDAO.createUser(userData, form.email.value, form.senha.value).then(() => {
                alert("Adicionado com sucesso!")
                setLoading(false)
            })
        })

    }

    return (
        <div className={'users_page'}>
            <div className={'content'}>
                <ModalFather title={"Novo Usuário"}
                             close={() => setModalOpen(false)}
                             open={modalOpen}>
                    <form onSubmit={newUserHandler}>
                        <FileInput
                            fileName={'photo'}
                            urlName={'photo_url'}
                            onChangeFile={(file) => {
                                setFileSelected(file)
                            }}
                        />
                        <div className={'flex'}>
                            <InputText
                                className={'width_bigger'}
                                label={'Primeiro Nome'}
                                name={'prim_nome'}
                                required
                                placeholder={"Ex: Brian"}/>
                            <InputText
                                className={'width_bigger'}
                                label={'Último Nome'}
                                name={'ult_nome'}
                                required
                                placeholder={"Ex: Ito de Oliveira Moura"}/>
                        </div>
                        <div className={'flex'}>
                            <InputText
                                className={'width_bigger'}
                                required
                                label={'E-mail'}
                                name={'email'}
                                placeholder={"Ex: brian.oliveira100@gmail.com"}/>
                            <InputText
                                required
                                className={'width_bigger'}
                                label={'GitHub'}
                                name={'github'}
                                placeholder={"Ex: BrianIto"}/>
                        </div>
                        <div className={'flex'}>
                            <InputText
                                required
                                className={'width_bigger'}
                                label={'Senha'}
                                name={'senha'}
                                type={'password'}
                                placeholder={"Informe sua senha"}/>
                            <InputText
                                required
                                className={'width_bigger'}
                                label={'Confirmar Senha'}
                                name={'confirmar_senha'}
                                type={'password'}
                                placeholder={"Por favor, confirme sua senha"}/>
                        </div>
                        <div className={'footer'}>
                            <Button loading={loading} type={'submit'}>Confirmar</Button>
                        </div>
                    </form>
                </ModalFather>
                <Title>Usuários</Title>
                <table cellSpacing={'0'}>
                    <thead>
                    <td></td>
                    <td>Nome</td>
                    <td>E-mail</td>
                    <td>GitHub</td>
                    <td></td>
                    <td></td>
                    </thead>
                    <tbody>
                    {
                        props.users.map(user => (
                            <tr>
                                <td><img src={user.photo} alt={''}/></td>
                                <td>{user.first_name + " " + user.last_name}</td>
                                <td>{user.id}</td>
                                <td>{user.github}</td>
                                <td>
                                    <button>Editar</button>
                                </td>
                                <td>
                                    <button>Remover</button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
                <Fab onClick={() => setModalOpen(!modalOpen)} open={modalOpen}/>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    users: state.users.users,
})

const mapDispatchToProps = dispatch => ({
    getUsers: users => dispatch({type: Actions.getUsers, payload: users})
})

export default connect(mapStateToProps, mapDispatchToProps)(Users)

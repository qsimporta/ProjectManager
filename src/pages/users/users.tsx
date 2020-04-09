import React from 'react'
import {connect} from 'react-redux'
import Title from "../../components/title/title"
import "./users.sass"
import Fab from "../../components/Fab/Fab";

const Users = props => {
    return (
        <div className={'users_page'}>
            <div className={'content'}>
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
                    <tr>
                        <td><img src={require('../../assets/mock_image.PNG')} alt={''}/></td>
                        <td>Brian Ito de Oliveira Moura</td>
                        <td>brian.oliveira100@gmail.com</td>
                        <td>BrianIto</td>
                        <td>
                            <button>Editar</button>
                        </td>
                        <td>
                            <button>Remover</button>
                        </td>
                    </tr>
                    <tr>
                     <td><img src={require('../../assets/mock_image.PNG')} alt={''}/></td>
                     <td>Brian Ito de Oliveira Moura</td>
                     <td>brian.oliveira100@gmail.com</td>
                     <td>BrianIto</td>
                     <td>
                      <button>Editar</button>
                     </td>
                     <td>
                      <button>Remover</button>
                     </td>
                    </tr>
                    </tbody>
                </table>
                <Fab/>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Users)

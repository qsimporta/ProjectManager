import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'


const Tarefa = props => (
    <tr>
        <td><img src={require('../../../../../assets/mock_image.PNG')} alt={''}/></td>
        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac facilisis ante.</td>
        <td>28/Jan/2020</td>
        <td>
            <button>Editar</button>
            <button>Remover</button>
        </td>
    </tr>
)

const Tarefas = props => {
 return (
    <div className={'tarefas_container'}>
        <div className={'group_container'}>
            <h2 className={'group_title'}>Frontend</h2>
            <table>
                <Tarefa />
            </table>
        </div>
    </div>
 )
}

Tarefas.propTypes = {
    show: PropTypes.bool,
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Tarefas)

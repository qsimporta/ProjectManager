import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import "./tarefas.sass"

const Tarefa = props => (
    <tr>
        <td><img src={require('../../../../../assets/mock_image.PNG')} alt={''}/></td>
        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac facilisis ante.</td>
        <td>28/Jan/2020</td>
        <td>
            <button>Pendente</button>
        </td>
    </tr>
)

const Tarefas = props => {
    if (props.show) {
        return (
            <div className={'tarefas_container'}>
                <div className={'group_container'}>
                    <h2 className={'group_title'}>Frontend</h2>
                    <table cellSpacing={'0'}>
                        <Tarefa />
                        <Tarefa />
                        <Tarefa />
                        <Tarefa />
                    </table>
                </div>
                <div className={'group_container'}>
                    <h2 className={'group_title'}>Frontend</h2>
                    <table cellSpacing={'0'}>
                        <Tarefa />
                        <Tarefa />
                        <Tarefa />
                        <Tarefa />
                    </table>
                </div>
            </div>
        )
    } else {
        return <></>
    }
}

Tarefas.propTypes = {
    show: PropTypes.bool,
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Tarefas)

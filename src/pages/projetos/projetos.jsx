import React from 'react'
import {connect} from 'react-redux'
import "./projetos.sass"
import Title from "../../components/title/title"
import Fab from "../../components/Fab/Fab"
import ModalFather from "../../components/modal_father/ModalFather"
import {useHistory} from "react-router-dom"

const Projetos = props => {

    const projetos = [
        {nome: 'BarberShop', stage: 'Desenvolvimento'},
        {nome: 'ProjectManager', stage: 'Planejamento'},
    ]
    const colors = ['#F39200','#DDDC00','#94C11F','#3AAA35','#127533', '#951B81', '#E94F1C']
    const story = useHistory()
    const [novoProjetoOpen, setNovoProjetoOpen] = React.useState(false);

 return (
    <div className={'projetos_page'}>
        <div className={'content'}>
            <ModalFather
                close={() => setNovoProjetoOpen(false)}
                title={'Novo Projeto'} open={novoProjetoOpen}>
            </ModalFather>
            <Title>Projetos</Title>
            <div className={'projects_container'}>
                {
                    projetos.map((projeto, index) => (
                        <div
                            onClick={() => story.push('/home/projeto')}
                            className={'project'} style={{backgroundColor: colors[index % colors.length]}}>
                            <h2>{projeto.nome}</h2>
                            <h3>{projeto.stage}</h3>
                        </div>
                    ))
                }
            </div>
            <Fab onClick={() => setNovoProjetoOpen(!novoProjetoOpen)} open={novoProjetoOpen}/>
        </div>
    </div>
 )
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Projetos)

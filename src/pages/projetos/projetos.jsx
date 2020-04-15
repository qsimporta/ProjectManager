import React from 'react'
import {connect} from 'react-redux'
import "./projetos.sass"
import Title from "../../components/title/title"
import Fab from "../../components/Fab/Fab"
import ModalFather from "../../components/modal_father/ModalFather"
import {useHistory} from "react-router-dom"
import InputText from "../../components/InputText/InputText"
import Button from "../../components/Button/Button"

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
                <InputText
                    className={'width_bigger'}
                    label={'Nome do Projeto'}
                    placeholder={'Informe o nome do projeto.'} />
                <InputText
                    className={'width_bigger'}
                    label={'Descrição do Projeto'}
                    placeholder={'Informe uma breve descrição com resultado final e como será implementado'} />
                    <div className={'footer'}>
                        <Button>Confirmar</Button>
                    </div>
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

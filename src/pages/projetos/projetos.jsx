import React from 'react'
import {connect} from 'react-redux'
import "./projetos.sass"
import Title from "../../components/title/title"
import Topbar from "../../components/topbar/topbar"
import Sidebar from "../../components/sidebar/sidebar"
import Fab from "../../components/Fab/Fab"

const Projetos = props => {

    const projetos = [
        {nome: 'BarberShop', stage: 'Desenvolvimento'},
        {nome: 'ProjectManager', stage: 'Planejamento'},
    ]
    const colors = ['#F39200','#DDDC00','#94C11F','#3AAA35','#127533', '#951B81', '#E94F1C']

 return (
    <div className={'projetos_page'}>
        <Topbar/>
        <Sidebar/>
        <div className={'content'}>
            <Title>Projetos</Title>
            <div className={'projects_container'}>
                {
                    projetos.map((projeto, index) => (
                        <div className={'project'} style={{backgroundColor: colors[index % colors.length]}}>
                            <h2>{projeto.nome}</h2>
                            <h3>{projeto.stage}</h3>
                        </div>
                    ))
                }
            </div>
            <Fab/>
        </div>
    </div>
 )
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Projetos)

import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import "./home.sass"
import Topbar from "../../components/topbar/topbar"
import Sidebar from "../../components/sidebar/sidebar"
import Title from "../../components/title/title"
import {HashRouter as Router, Route} from 'react-router-dom'
import Projetos from "../projetos/projetos"
import Users from "../users/users"
import {useHistory} from "react-router-dom"
import PlanejamentoProject from "../projetos/planejamento/planejamento_project"
import ModalFather from "../../components/modal_father/ModalFather"
import Button from "../../components/Button/Button"
import {Actions} from "../../redux/actions/actions";

const FeedPage = props => {
    const projetos = [
        {nome: 'BarberShop', stage: 'Desenvolvimento'},
        {nome: 'ProjectManager', stage: 'Planejamento'},
    ]
    const colors = ['#F39200','#DDDC00','#94C11F','#3AAA35','#127533', '#951B81', '#E94F1C']
    const story = useHistory()

    return (
        <div className={'content'}>
            <Title>Últimos Projetos</Title>
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
            <Title>Feed</Title>
            <div className={'feed_container'}>
                <h2 className={'date'}>24/05</h2>
                <div className={'feed_update'}>
                    <img src={require('../../assets/mock_image.PNG')} alt={''} />
                    <p>Criou novo projeto intitulado as Crônicas de Nárnia</p>
                    <div>
                        <p>19:53</p>
                    </div>
                </div>
                <div className={'feed_update'}>
                    <img src={require('../../assets/mock_image.PNG')} alt={''} />
                    <p>Criou novo projeto intitulado as Crônicas de Nárnia</p>
                    <div>
                        <p>19:53</p>
                    </div>
                </div>
                <div className={'feed_update'}>
                    <img src={require('../../assets/mock_image.PNG')} alt={''} />
                    <p>Criou novo projeto intitulado as Crônicas de Nárnia</p>
                    <div>
                        <p>19:53</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Home = props => {

    const [modalOpen, setModalOpen] = React.useState(false)
    let story = useHistory()

    return (
        <div className={'home_page'}>
            <Topbar/>
            <Sidebar/>
            <div className={'content'}>
                <ModalFather
                    title={'Saída'}
                    open={props.exitClicked}
                    close={() => props.clickExit(false)}>
                    <p>Tem certeza que deseja sair do Projects?</p>
                    <p style={{textAlign: 'right'}}>
                        <Button onClick={() => {
                            props.clickExit(false)
                            story.push('/')
                        }}>Confirmar</Button>
                    </p>
                </ModalFather>
            </div>
            <Router>
                <Route path={'/home'} component={FeedPage} exact />
                <Route path={'/home/projetos'} component={Projetos} />
                <Route path={'/home/users'} component={Users} />
                <Route path={'/home/projeto'} component={PlanejamentoProject} />
            </Router>
        </div>
    )
}

const mapStateToProps = state => ({
    exitClicked: state.general.exitClicked,
})
const mapDispatchToProps = dispatch => ({
    clickExit: exit => dispatch({type: Actions.clickExit, payload: exit})
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)

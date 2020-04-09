import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import "./home.sass"
import Topbar from "../../components/topbar/topbar"
import Sidebar from "../../components/sidebar/sidebar"
import Title from "../../components/title/title"
import {HashRouter as Router, Route} from 'react-router-dom'
import Projetos from "../projetos/projetos"
import Users from "../users/users";

const FeedPage = props => {
    const projetos = [
        {nome: 'BarberShop', stage: 'Desenvolvimento'},
        {nome: 'ProjectManager', stage: 'Planejamento'},
    ]
    const colors = ['#F39200','#DDDC00','#94C11F','#3AAA35','#127533', '#951B81', '#E94F1C']

    return (
        <div className={'content'}>
            <Title>Últimos Projetos</Title>
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
    return (
        <div className={'home_page'}>
            <Topbar/>
            <Sidebar/>
            <Router>
                <Route path={'/home'} component={FeedPage} exact />
                <Route path={'/home/projetos'} component={Projetos} />
                <Route path={'/home/users'} component={Users} />
            </Router>
        </div>
    )
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Home)

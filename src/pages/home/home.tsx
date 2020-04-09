import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import "./home.sass"
import Topbar from "../../components/topbar/topbar"
import Sidebar from "../../components/sidebar/sidebar"

const Home = props => {
    // $green: #3AAA35
    // $lightGreen: #94C11F
    // $greenYellow: #DDDC00
    // $orange: #F39200
    // $red: #E94F1C


    const projetos = [
        {nome: 'BarberShop', stage: 'Desenvolvimento'},
        {nome: 'ProjectManager', stage: 'Planejamento'},
    ]
    const colors = ['#F39200','#DDDC00','#94C11F','#3AAA35','#127533', '#951B81', '#E94F1C']
    return (
        <div className={'home_page'}>
            <Topbar/>
            <Sidebar/>
            <div className={'content'}>
                <h1>Últimos Projetos<span className={'line'}/></h1>
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
                <h1>Feed<span className={'line'}/></h1>
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
        </div>
    )
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Home)

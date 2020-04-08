import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import "./home.sass"
import Topbar from "../../components/topbar/topbar";
import Sidebar from "../../components/sidebar/sidebar";

const Home = props => {
 return (
    <div>
        <Topbar />
        <Sidebar/>
    </div>
 )
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Home)

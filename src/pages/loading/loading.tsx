import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Spinner from "../../components/spinner/spinner"
import "./loading.sass"
import {useHistory} from 'react-router-dom'

const Loading = props => {

    const story = useHistory()

    React.useEffect(() => {
        setTimeout(() => {
            story.push('/home')
        }, 2000)
    })

 return (
    <div className={'loading_page'}>
        <div>
        <Spinner/>
        <h1>Carregando...</h1>
            <h2>const loading => 50%</h2>
            <h3>//I know it's gonna be a syntax error</h3>
        </div>
    </div>
 )
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Loading)

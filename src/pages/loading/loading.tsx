import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Spinner from "../../components/spinner/spinner"
import "./loading.sass"
import {useHistory} from 'react-router-dom'
import {firebaseAuth} from "../../config/firebase"
import {Actions} from "../../redux/actions/actions"
import Users from "../../DAOs/Users"

const Loading = props => {

    const story = useHistory()

    React.useEffect(() => {
        if (firebaseAuth.currentUser) {
            if (!props.userLogged) {
                // @ts-ignore
                Users.getUserByEmail(firebaseAuth.currentUser.email).then(res => {
                    props.setUserLogged(res)
                }).catch(e => {
                    alert(e)
                })
            }
            else {
                setTimeout(() => {
                    story.push('/home')
                }, 400)
            }
        } else {
            setTimeout(() => {
                story.push('/')
            }, 2000)
        }

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

const mapStateToProps = state => ({
    userLogged: state.general.userLogged,
})
const mapDispatchToProps = dispatch => ({
    setUserLogged: userLogged => dispatch({type: Actions.setUserLogged, payload: userLogged}),
})

export default connect(mapStateToProps, mapDispatchToProps)(Loading)

import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import "./commits.sass"

const Commit = props => (
    <tr>
        <td><img src={require('../../../../../assets/github-logo.svg')} alt={''}/></td>
        <td>Lorem Ipsum dolor sit amet</td>
        <td>Brian Ito</td>
        <td>28/05/2020 19:45h</td>
    </tr>
)

const Commits = props => {
    if (props.show) {
        return (
            <div className={'commits_container'}>
                <table>
                    <Commit />
                    <Commit />
                    <Commit />
                    <Commit />
                </table>
            </div>
        )
    } else {
        return <></>
    }
}

Commits.propTypes = {
    show: PropTypes.bool,
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Commits)

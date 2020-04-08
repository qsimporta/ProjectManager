import * as React from 'react'
import {connect} from 'react-redux'
import Topbar from "../../components/topbar/topbar";
import "./login.sass"

const Login = props => {
 return (
  <div className={'login_container'}>
   <Topbar loginTopbar={true}/>
   <div className={'content'}>
       <img src={require('../../assets/full_icon.svg')} alt={''} />
       <div className={'page_container'}>
           <h1>Tracking, Gerenciamento e Automação, juntos.</h1>
           <p>Fazer código não precisa ser tão maçante, nem pra você nem para ninguém da empresa.
               Visando ajudar você, temos a ferramenta certa. (:</p>
           <div className={'icons'}>
               <div>
                   <img src={require('../../assets/coding_icon.svg')} />
                   <p>Automação de código</p>
               </div>
               <div>
                   <img src={require('../../assets/github-logo.svg')} />
                   <p>Viculado ao GitHub</p>
               </div>
               <div>
                   <img src={require('../../assets/kanban_icon.svg')} />
                    <p>Fácil Gerenciamento de Projetos</p>
               </div>
           </div>
       </div>
   </div>
  </div>
 )
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Login)

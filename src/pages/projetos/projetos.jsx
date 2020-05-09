import React from "react"
import { connect } from "react-redux"
import "./projetos.sass"
import Title from "../../components/title/title"
import Fab from "../../components/Fab/Fab"
import ModalFather from "../../components/modal_father/ModalFather"
import { useHistory } from "react-router-dom"
import InputText from "../../components/InputText/InputText"
import Button from "../../components/Button/Button"
import ProjetoDAO from "../../DAOs/Projeto"
import {Actions} from '../../redux/actions/actions'

const Projetos = props => {
  const projetos = [
    { nome: "BarberShop", stage: "Desenvolvimento" },
    { nome: "ProjectManager", stage: "Planejamento" }
  ]
  const colors = [
    "#F39200",
    "#DDDC00",
    "#94C11F",
    "#3AAA35",
    "#127533",
    "#951B81",
    "#E94F1C"
  ]
  const story = useHistory()
  const [novoProjetoOpen, setNovoProjetoOpen] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  const newProjectFormSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    const form = e.target
    let [nome, descricao] = [form.nome.value, form.descricao.value]
    await ProjetoDAO.createProjeto({
      nome: nome,
      descricao: descricao,
      tarefas: [],
      estaPlanejando: true
    })
    alert("inserido com sucesso.")
    setLoading(false)
  }

  return (
    <div className={"projetos_page"}>
      <div className={"content"}>
        <ModalFather
          close={() => setNovoProjetoOpen(false)}
          title={"Novo Projeto"}
          open={novoProjetoOpen}
        >
          <form onSubmit={newProjectFormSubmit}>
            <InputText
              name={"nome"}
              className={"width_bigger"}
              label={"Nome do Projeto"}
              placeholder={"Informe o nome do projeto."}
            />
            <InputText
              name={"descricao"}
              className={"width_bigger"}
              label={"Descrição do Projeto"}
              placeholder={
                "Informe uma breve descrição com resultado final e como será implementado"
              }
            />
            <div className={"footer"}>
              <Button type={"submit"} loading={loading}>
                Confirmar
              </Button>
            </div>
          </form>
        </ModalFather>
        <Title>Projetos</Title>
        <div className={"projects_container"}>
          {props.projetos.length > 0 ? (
            props.projetos.map((projeto, index) => (
              <div
                onClick={() => {
                  story.push("/home/projeto")
                  props.selectProjeto(projeto)
                }}
                className={"project"}
                style={{ backgroundColor: colors[index % colors.length] }}
              >
                <h2>{projeto.nome}</h2>
                <h3>Planejamento</h3>
              </div>
            ))
          ) : (
            <p style={{ color: "#A0A0A0", margin: 0 }}>
              Sem projetos no sistema até o momento
            </p>
          )}
        </div>
        <Fab
          onClick={() => setNovoProjetoOpen(!novoProjetoOpen)}
          open={novoProjetoOpen}
        />
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  projetos: state.projetos.projetos
})
const mapDispatchToProps = dispatch => ({
  selectProjeto: projeto =>
      dispatch({type: Actions.selectProjeto, payload: projeto})
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projetos)

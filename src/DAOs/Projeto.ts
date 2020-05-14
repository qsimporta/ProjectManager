import axios from 'axios'
import {firebaseDatabase} from "../config/firebase"

const COLLECTION = 'projetos'

export interface Projeto {
    nome: String,
    descricao: String,
    tarefas: Array<Object>,
    estaPlanejando: Boolean,
    planejamento?: {
        requisitos?: Array<string>,
    }
}

const ProjetoDAO = {
    createProjeto: async (projeto: Projeto) => {
        // @ts-ignore
        await axios.post('https://api.github.com/user/repos', {name: projeto.nome, description: projeto.descricao},
            {
                auth: {
                    // @ts-ignore
                    username: process.env.REACT_APP_GITHUB_AUTH_USER,
                    // @ts-ignore
                    password: process.env.REACT_APP_GITHUB_AUTH_TOKEN
                }
            })
        await axios.put('https://api.github.com/repos/qsimporta/'+projeto.nome+'/collaborators/BrianIto', {}, {
                auth: {
                    // @ts-ignore
                    username: process.env.REACT_APP_GITHUB_AUTH_USER,
                        // @ts-ignore
                        password: process.env.REACT_APP_GITHUB_AUTH_TOKEN
                }
            })
        return await firebaseDatabase.collection(COLLECTION).add(projeto)
    },
    getProjects: async () => {
        let array = []
        let querySnap = await firebaseDatabase.collection(COLLECTION).get()
        querySnap.forEach(doc => {
            // @ts-ignore
            array.push({...doc.data(), id: doc.id})
        })
        return array
    },
    addTarefaToProject: async (projectId, newTarefasArray) => {
        return await firebaseDatabase.doc(projectId).update({tarefas: newTarefasArray})
    },
}

export default ProjetoDAO

import {firebaseAuth} from "../config/firebase"

interface LoginInterface {
    email: String,
    password: String
}

const Users = {
    getUsers: () => {

    },
    deleteUser: (userId: String) => {

    },
    editUser: (userId: String, changes: Object) => {

    },
    createUser: (userData: Object) => {

    },
    /*
            FUNÇÃO DE LOGIN
     */
    login: async ({email, password}: LoginInterface): Promise<{ code: Number, message: String } | {}> => {
        let res: Object
        try {
            // @ts-ignore
            await firebaseAuth.signInWithEmailAndPassword(email, password)
            res = {code: 200, message: 'Login successfully'}
        } catch (err) {
            res = {code: err.code, message: err.message}
        }
        return res
    },
    /*
                FUNÇÃO DE LOGOUT
         */
    logout: async (): Promise<{ code: Number, message: String } | {}> => {
        let res: Object
        try {
            await firebaseAuth.signOut()
            res = {code: 200, message: "Logout Successfully"}
        } catch (err) {
            res = {code: err.code, message: err.message}
        }
        return res
    }
}

export default Users

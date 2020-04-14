import {firebaseAuth, firebaseDatabase, firebaseImpl, firebaseStorage} from "../config/firebase"

interface LoginInterface {
    email: String,
    password: String
}

export interface User {
    first_name: String,
    last_name: String,
    photo_url: String,
    github: String,
}

const COLLECTION = 'users'

const Users = {
    getUsers: async () => {
        let users = []
        let querySnapshot = await firebaseDatabase.collection(COLLECTION).get()
        querySnapshot.forEach(doc => {
                // @ts-ignore
                firebaseStorage.child(doc.data().photo_url).getDownloadURL().then(url => {
                    // @ts-ignore
                    users.push({...doc.data(), id: doc.id, photo: url})
                })
            })
        return users
    },
    getUserByEmail: async (email: String):Promise<Object | null> => {
        // @ts-ignore
        let doc =  await firebaseDatabase.collection(COLLECTION).doc(email).get()
        if (doc.exists) {
            return {...doc.data(), id: doc.id}
        } else {
            return null
        }
    },
    deleteUser: (userId: String) => {

    },
    editUser: (userId: String, changes: Object) => {

    },
    createUser: async (userData: User, email: String, password: String) => {
        // @ts-ignore
        await firebaseAuth.createUserWithEmailAndPassword(email,password)
        // @ts-ignore
        await firebaseDatabase.collection(COLLECTION).doc(email).set(userData)
    },
    /*
            FUNÇÃO DE LOGIN
     */
    login: async ({email, password}: LoginInterface, keepConnected?: Boolean) :
        Promise<{ code: Number, message: String, user: User } | {}> => {
        let res: Object
        try {
            // @ts-ignore
            await firebaseAuth.signInWithEmailAndPassword(email, password)
            if (keepConnected) {
                // @ts-ignore
                await firebaseAuth.setPersistence(firebaseImpl.auth.Auth.Persistence.LOCAL)
            }
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

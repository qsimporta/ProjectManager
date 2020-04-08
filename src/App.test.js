import React from 'react'
import {firebaseDatabase} from "./config/firebase"
require("dotenv").config()

describe("Database Entries", () => {
    it("Recieves the database env variables", () => {
        expect(process.env.REACT_APP_FIREBASE_PROJECT_ID).not.toBeUndefined()
    })

    it("Run de Database without Errors", () => {
        expect(firebaseDatabase).not.toBeNull()
    })
})

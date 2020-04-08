import React from 'react'
import { render } from '@testing-library/react'
import {firebaseDatabase} from "./config/firebase"

describe("Database Entries", () => {
  it("Runs the database without error", () => {
      expect(firebaseDatabase).not.toBeNull()
  })
})

import React from 'react'
import {render, screen} from '@testing-library/react'
import Challenge from '../../components/challenge'

describe("Challenge", () => {
    test("renders a challenge", () => {
        let challenge = {id: 1, title: "hack news front end in react", description: "Build a challenges front end in react", 
        tags: [{name:"react"}, {name:"redux"}]}
        render(<Challenge challenge={challenge}/>)
        screen.getByText("hack news front end in react")
        screen.getByText("react")
        screen.getByText("redux")
    })
})
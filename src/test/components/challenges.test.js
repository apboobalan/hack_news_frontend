import React from 'react'
import {render, screen} from '@testing-library/react'
import Challenges from '../../components/challenges'

describe("Challenges", () => {
    test("renders challenges with a title", () => {
        let challenges = [
            {title: "hack news front end in react", description: "Build a challenges front end in react", tags: ["react", "redux"]},
            {title: "hack news back end in react", description: "Build a challenges back end in elixir", tags: ["elixir", "ecto", "phoenix"]}
        ]

        render(<Challenges challenges={challenges}/>)
        screen.getByText("Challenges...")
        screen.getByText("hack news front end in react")
        screen.getByText("hack news back end in react")
        screen.getByText("react")
        screen.getByText("redux")
        screen.getByText("elixir")
        screen.getByText("ecto")
        screen.getByText("phoenix")
    })
})
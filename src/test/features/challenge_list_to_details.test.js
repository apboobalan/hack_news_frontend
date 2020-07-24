import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../../App'
import {withProvider} from '../test_helper'

describe("Challenge list to details page navigation", () => {
    test("navigates to challenge details page when a challenge is clicked on the list page", async () => {
        render(withProvider(<App/>))

        await screen.findByText("Challenges")
        await screen.findByText("hack news front end in react")
        await screen.findByText("hack news back end in react")

        await userEvent.click(screen.getByTestId("challenge-1"))
        const description = await screen.findByText("Develop hackathon website front end in react for the company.")

        expect(description).toBeInTheDocument()
    })
})
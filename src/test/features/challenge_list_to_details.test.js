import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../../App'

describe("Challenge list to details page navigation", () => {
    test("navigates to challenge details page when a challenge is clicked on the list page", async () => {
        render(<App/>)

        screen.getByText("Challenges")
        screen.getByText("hack news front end in react")
        screen.getByText("hack news back end in react")

        await userEvent.click(screen.getByTestId("challenge-1"))
        const description = await screen.getByText("Develop hackathon website front end in react for the company.")

        expect(description).toBeInTheDocument()
    })
})
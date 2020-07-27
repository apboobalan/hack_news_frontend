import React from "react"
import {render, screen, getByTestId} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import CreateChallenge from "../../components/CreateChallenge"

describe("CreateChallenge", ()=> {
    test("create challenge component with title, description and tags field", () => {
        render(<CreateChallenge/>)

        screen.getByText("New Challenge")
        screen.getByLabelText("Title :")
        screen.getByLabelText("Description :")
        screen.getByLabelText("Tags :")
    })

    test("create challenge with a button which on click call onClickHandler with required params", async () => {
        const onClickHandler = jest.fn()
        render(<CreateChallenge onClickHandler={onClickHandler}/>)

        screen.getByText("CREATE NEW CHALLENGE →")
        await userEvent.type(screen.getByTestId("title"), "Hackathon backend in Elixir")
        await userEvent.type(screen.getByTestId("description"), "Create hackathon backend in Elixir")
        await userEvent.type(screen.getByTestId('tags'), "Elixir , backend")

        await userEvent.click(screen.getByTestId("submit"))

        await expect(onClickHandler).toHaveBeenCalledTimes(1)
        await expect(onClickHandler).toBeCalledWith({
            title: "Hackathon backend in Elixir",
            description: "Create hackathon backend in Elixir",
            tags: [{name: "elixir"}, {name: "backend"}]
        })
    })
})
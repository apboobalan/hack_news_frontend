const initialState = {
    containerView: "CHALLENGE_LIST"
}

export default (state = initialState, action) => {
    switch(action.type) {
        case "NAVIGATE_TO_CHALLENGE_DETAILS":
            return {...state, containerView: "CHALLENGE_DETAILS"}
        default:
            return state;
    }
}

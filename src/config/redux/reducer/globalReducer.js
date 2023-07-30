const initialState = {
    name: 'Farid'
}

const globalReducer = (state = initialState, action) => {
    if (action.type === 'UPDATE_NAME') {
        return {
            ...state,
            name: 'Kharismawan'
        }
    }
    return state;
}

export default globalReducer
const initialState: any = {
    data: null,
    loading: false,
    error: ''
}

export default (state = initialState, action:any): any => {
    switch(action.type) {
        case 'GET_WEATHER':
            return {
                data: action.payload,
                loading: false,
                error: ''
            }
        case 'SET_POSITION':
            return {
                ...state,
                position: [...action.payload]
            }
        case 'SET_EXTENDED_WEATHER':
            return {
                ...state,
                extended: action.payload
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: true
            }
        case 'SET_ERROR': 
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default: 
            return state;
    }
}
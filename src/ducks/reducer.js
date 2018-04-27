const initialState = {
    updateTotal:false
}

const UPDATE_TOTAL = 'UPDATE_TOTAL';

export function updateTotalFn( bool ){
    return {
        type:UPDATE_TOTAL,
        payload:bool
    }
}

export default function reducer ( state=initialState, action){
    switch (action.type){
        case UPDATE_TOTAL:
            return Object.assign({}, state, {updateTotal:action.payload})
        default: return state
    }
}
import { SET_POPULAR_BOOK, SET_RANDOM_BOOKS } from "../../actions";

const initialState = {
    popularBooks: [],
    randomBooks: []
}
function bookReducer(state = initialState, action){
    switch(action.type){
        case SET_POPULAR_BOOK: 
            return {
                ...state,
                popularBooks: [...state.popularBooks,...action.payload]
            }
        case SET_RANDOM_BOOKS:
            return {
                ...state,
                randomBooks: [...state.randomBooks,...action.payload]
            }
            default:
                return state;
    }
}


export default bookReducer;

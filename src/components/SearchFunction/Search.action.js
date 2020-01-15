export const GET_SEARCHTEXT_SUCCESS = "GET_SEARCHTEXT_SUCCESS"




export function getSearchTextSuccessAction(searchText) {
    return {
        type: GET_SEARCHTEXT_SUCCESS,
        searchText: searchText
    }
}


// store.dispatch(loginSuccessAction());
export const getSearchTextAction = (searchText) => {
    return async(dispatch) => {
        dispatch(getSearchTextSuccessAction(searchText))

    }
}
import axios from 'axios'

export const PRODUCTLIST_REQUEST = "PRODUCTLIST-REQUEST"
export const PRODUCTLIST_SUCCESS = "PRODUCTLIST-SUCCESS"
export const PRODUCTLIST_FAIL = "PRODUCTLIST-FAIL"

export function ProductListRequestAction() {
    return {
        type: PRODUCTLIST_REQUEST
    }
}

export function ProductListSuccessAction(payload, metadata) {
    return {
        type: PRODUCTLIST_SUCCESS,
        payload: payload,
        metadata: metadata
    }
}

export function ProductListFailAction(error) {
    return {
        type: PRODUCTLIST_FAIL,
        error: error
    }
}
export function getProductList(searchText = "ao-so-mi-nam", pageNum) {
    return async(dispatch) => {
        dispatch(ProductListRequestAction())
        try {
            const result = await axios({
                method: "GET",
                url: `https://mapi.sendo.vn/mob/product/search?p=${pageNum}&q=${searchText}`
            })
            console.log(result, "result")
            dispatch(ProductListSuccessAction(result.data.data, result.data.meta_data))
        } catch (error) {
            dispatch(ProductListFailAction(error))
        }

    }
}

export function getProductListBySearch(searchText) {
    return async(dispatch) => {
        dispatch(ProductListRequestAction())
        console.log(searchText, "search text nha")
        try {
            const result = await axios({
                method: "GET",
                url: `https://mapi.sendo.vn/mob/product/search?p={1}&q=${searchText}`
            })
            console.log(result, "result")
            dispatch(ProductListSuccessAction(result.data.data))
        } catch (error) {
            dispatch(ProductListFailAction(error))
        }

    }
}

export function getProductListBySort(Array) {
    return async(dispatch) => {
        dispatch(ProductListRequestAction())
        dispatch(ProductListSuccessAction(Array))
    }
}
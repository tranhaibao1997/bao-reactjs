// import data from '../../data.json'
import FallingLeaf from '../FallingLeaf/FallingLeaf.jsx'
import axios from "axios"


export const PRODUCT_DETAIL_REQUEST = 'PRODUCT_DETAIL_REQUEST'
export const PRODUCT_DETAIL_SUCCESS = 'PRODUCT_DETAIL_SUCCESS'
export const PRODUCT_DETAIL_FAIL = 'PRODUCT_DETAIL_FAIL'



function productDetailRequestAction() {
    return {
        type: PRODUCT_DETAIL_REQUEST,
        load: true
    }
}

function productDetailSuccessAction(payload) {
    return {
        type: PRODUCT_DETAIL_SUCCESS,
        payload: payload,
        load: false,

    }
}

function productDetailFailAction(error) {
    return {
        type: PRODUCT_DETAIL_FAIL,
        error: error,
        load: true
    }
}

export function getProductDetailById(id) {
    return async(dispatch) => {
        dispatch(productDetailRequestAction())
        console.log("okkk22", id)
        try {
            const result = await axios({
                method: "GET",
                url: `https://mapi.sendo.vn/mob/product/${id}/detail/`
            })

            // const data = result
            console.log(result.data, "sdf")


            const relative_full = result.data.product_relateds.split(',').map(async elm => {
                try {
                    const result = await axios({
                        method: "GET",
                        url: `https://mapi.sendo.vn/mob/product/${elm}/detail/`
                    })
                    return result.data

                } catch (error) {
                    console.log(error)
                }
            })

            result.data.product_relateds = await Promise.all(relative_full).then(r => r.filter(x => x.id));
            console.log(result.data, ">>>>>>>>>>>>>>>>")
            dispatch(productDetailSuccessAction(result.data))
        } catch (error) {
            dispatch(productDetailFailAction(error))
        }
    }
}
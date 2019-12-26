export const PRODUCT_ADD = "PRODUCT-ADD"
export const PRODUCT_DELETE = "PRODUCT-DELETE"
export const PRODUCT_EDIT = "PRODUCT-EDIT"

function productAddAction() {
    return {
        type: "PRODUCT-ADD"
    }
}

function productDeleteAction(payload) {
    return {
        type: "PRODUCT-DELETE",
        payload: payload
    }
}

function productEditAction(error) {
    return {
        type: "PRODUCT-EDIT",
        error: error
    }
}
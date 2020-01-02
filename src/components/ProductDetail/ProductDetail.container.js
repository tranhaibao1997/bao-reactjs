import { connect } from 'react-redux'
import ProductDetail from './ProductDetail'
import { getProductDetailById } from './ProductDetail.action'
import { getCartSuccess } from '../Cart/Cart.action'

const mapStateToProps = (store) => ({
    load: store.ProductDetailReducer.load,
    data: store.ProductDetailReducer.data,
    error: store.ProductDetailReducer.error,
    cartdata: store.CartReducer.data,
})

const mapDispatchToProps = {
    getProductDetailById,
    getCartSuccess
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);